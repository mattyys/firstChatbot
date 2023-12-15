import  { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ( { children } ) => {

    const [user, setUser] = useState([]);
    const [userChats, setUserChats] = useState([]);

    const addChat = (newDate, chats) => {
        const currUserChat = {...user,date:newDate,chats};
        setUserChats(currUserChat.toString());
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
                userChats
            }}
        >
            { children } 
        </UserContext.Provider>
    );

};

export default UserProvider;