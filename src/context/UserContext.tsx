import React, { createContext, useState } from 'react';



const UserContext = createContext({} as UserContextProps)


const UserProvider = ({ children }: any) => {

    const [users, setUsers] = useState<string[]>([]);

    const addUser = (newUser: string) => {
        setUsers([...users, newUser]);
    };

    return (
        <UserContext.Provider value={{ users, setUsers, addUser }}>
            {children}
        </UserContext.Provider>
    );
};


export interface UserContextProps {
    users: string[],
    setUsers: React.Dispatch<React.SetStateAction<string[]>>,
    addUser: (newUser: string) => void
}

export { UserProvider, UserContext };


