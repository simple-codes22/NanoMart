import React, { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

export interface userDetails {
    cart: string[],
}

export interface productCardModel {
    product_id: string;
    name: string;
    description: string;
    price: string;
    discount: number;
    date_added: string;
}

export interface token<Type> {
    access: Type
    refresh: Type
}

export interface userModel {
    customer_id: string,
    date_joined: string,
    email: string,
    exp: number,
    iat: number,
    jti: string,
    token_type: string
    user_id: string
    username: string,
    // cart: productCardModel[] | [],
}


interface userContextModel {
    user: userModel | null;
    setUser: React.Dispatch<React.SetStateAction<userModel | null>>;
    details: userDetails | null;
    setDetails: React.Dispatch<React.SetStateAction<userDetails | null>>;
    userToken: token<string> | null;
    setUserToken: React.Dispatch<React.SetStateAction<token<string> | null>>
}

interface userContextProviderProps {
    children: React.ReactNode
}


export const UserContext = createContext<userContextModel>({} as userContextModel);

export const UserContextProvider = ({ children }: userContextProviderProps) => {

    // const [userToken, setUserToken] = useState<token<string> | null>(() => Cookies.get('authToken') ? JSON.parse(Cookies.get('authToken') as string).response : null)
    const [userToken, setUserToken] = useState<token<string> | null>(() => localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken') as string) : null)
    console.log(userToken);
    // const [user, setUser] = useState<userModel | null>(() =>  userToken !== null ? jwtDecode(userToken.access) : null);
    const [user, setUser] = useState<userModel | null>(() => userToken ? jwtDecode(userToken.access) : null)
    const [details, setDetails] = useState<userDetails | null>(null)
    const [loading, setLoading ] = useState(true)

    
    useEffect(() => {
        // const tenMinutes = 1000 * 60 * 10

        const updateToken = async () => {
            console.log("Interval called")
            const response = await fetch(`${import.meta.env.VITE_HOST_AUTH_REFRESH}`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({'refresh': userToken?.refresh})
            })
    
            if (response.status === 200) {
                const data = await response.json()
                setUserToken(data)
                localStorage.setItem('authToken', JSON.stringify(data))
                // Cookies.set('authToken', JSON.stringify(data))
                // console.log("Auth token is now:", Cookies.get('authToken')?.toString())
            }
            else if (response.statusText === "Unauthorized") {
                setUser(null)
                setUserToken(null)
                Cookies.remove('authToken')
            }
            if (loading) {
                setLoading(false)
            }
        }
        
        if (loading){
            updateToken()
        }

        const interval = setInterval(() => {
            if (userToken) {
                updateToken();
            }
        }, 5000);

        return () => clearInterval(interval);

    }, [userToken, loading])

    const contextValues = {
        details: details,
        setDetails: setDetails,
        userToken: userToken,
        setUserToken: setUserToken,
        user: user,
        setUser: setUser
    }

    return (
        <UserContext.Provider value={contextValues}>
        {loading ? null : children}
        </UserContext.Provider>
    )
}