import React, { useState, useEffect } from 'react'
import { getDocuments } from '../../Utils/firestore'
import { RowItemChat } from '../../Components/RowItemChat/RowItemChat';
import PulseLoader from "react-spinners/PulseLoader";



export const ChatHistory = () => {

    const [chatArray, setChatArray] = useState([]);

    const getChats = async () => {
        try{
            const data = await getDocuments('chats');
            const sortData = data.sort( (a,b) => {b.date - a.date});
            setChatArray(sortData);
        }catch(e) {
            console.error(e);
        }
    };
    useEffect(() =>{
            getChats();         
    },[chatArray]);

    const getDate = (chat) =>{
        const y = chat.date.getFullYear();
        const m = chat.date.getMonth();
        const d = chat.date.getDate();
        const h = chat.date.getHours();
        const min = chat.date.getMinutes();
        return  d + "/"+ m + "/" + y + " " + h + ":" + min;

    }


  return (
    <section>
        <table className="table">
            <thead>
                <tr>
                    <th scope='col'>Conversation User</th>
                    <th scope='col'>Date</th>
                </tr>
            </thead>

            <tbody>
                {chatArray.length > 0 ?(
                    chatArray.map((chat) => {
                        console.log(date.date);
                        //const date = getDate(chat);                       
                        return <RowItemChat name={chat.name}  date={chat.id} key = {chat.id} />;
                    })
                    ):(
                        <PulseLoader color="#6b49ff" />
                     )}
                
            </tbody>
        </table>
    </section>
  );
};
