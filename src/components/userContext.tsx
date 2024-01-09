import React, { createContext, useState } from "react";

export interface productCardModel {
    product_id: string;
    name: string;
    description: string;
    price: string;
    discount: number;
    date_added: string;
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
    setUser: React.Dispatch<React.SetStateAction<userModel | null>>
}

interface userContextProviderProps {
    children: React.ReactNode
}


export const UserContext = createContext<userContextModel>({} as userContextModel);

export const UserContextProvider = ({ children }: userContextProviderProps) => {
    const [user, setUser] = useState<userModel | null>(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}