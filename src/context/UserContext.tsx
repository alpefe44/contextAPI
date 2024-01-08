import React, { createContext, useState } from 'react';



const UserContext = createContext({} as UserContextProps)


const UserProvider = ({ children }: any) => {

    const [users, setUsers] = useState<User[]>([]);

    const addUser = (newUser: User) => {
        setUsers([...users, newUser]);
    };

    return (
        <UserContext.Provider value={{ users, setUsers, addUser }}>
            {children}
        </UserContext.Provider>
    );
};


export interface UserContextProps {
    users: User[],
    setUsers: React.Dispatch<React.SetStateAction<User[]>>,
    addUser: (newUser: User) => void
}


export interface User {
    name : string,
    soyad : string
}

export { UserProvider, UserContext };


