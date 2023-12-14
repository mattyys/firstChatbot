import  { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ( { children } ) => {

    const [user, setUser] = useState([]);
    
    const addChat = (newDate, chats) => {
        const currUser = [...user,{date:newDate,messages:chats}];
        setUser(currUser);
    };

    const initialUser = (user) => {
        setUser(user);
    };

    const deleteUser = () => {
       setUser([]);
    }; 


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