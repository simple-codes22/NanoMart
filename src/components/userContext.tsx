import React, { createContext, useState } from "react";

export interface userModel {
    id: number,
    password: string, 
    last_login: string,
    is_superuser: boolean
    username: string,
    first_name: string,
    last_name: string,
    is_staff: boolean,
    is_active: boolean,
    date_joined: string,
    customer_id: string,
    email: string,
    groups: string[],
    user_permissions: string[]
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