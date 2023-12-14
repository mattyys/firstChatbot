import  { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ( { children } ) => {

    const [user, setUser] = useState([]);
    
    const addChat = (newDate, chats) => {
        const currUser = [...user,{date:newDate,chats}];
        setUser(currUser);
    };

    const initialUser = (user) => {
        setUser(user);
    };

    const deleteUser = () => {
       setUser([]);
    }; 

    useEffect(() => {
        
    },[user]);


    return(
        <UserContext.Provider
            value={{
                user,
                addChat,
                initialUser,
                deleteUser,
            }}
        >
            { children } 
        </UserContext.Provider>
    );

};

export default UserProvider;