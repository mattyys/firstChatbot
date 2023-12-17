import React, { useState, useEffect } from 'react'
import { getDocuments } from '../../Utils/firestore'
import { RowItemChat } from '../../Components/RowItemChat/RowItemChat';
import PulseLoader from "react-spinners/PulseLoader";
import { ExportCSV } from '../../Components/ExportCSV/ExportCSV';
import { useNavigate } from 'react-router-dom';





export const ChatHistory = () => {

    const [chatArray, setChatArray] = useState([]);
    const navigate = useNavigate();

    const getChats = async () => {
        try{
            const data = await getDocuments('chats');
            const sortData = data.sort( (a,b) => {b.date - a.date});
            console.log(sortData);
            setChatArray(sortData);
        }catch(e) {
            console.error(e);
        }
    };
    useEffect(() =>{
        getChats();         
    },[]);

    const dataChats = () => {
        return chatArray.map((item)=>{
            const chats = JSON.parse(item.uChats);
            return [item.id, item.name,item.date,chats]
        });
        
      };
    console.log(dataChats());

    const onCancel = () => {
        navigate("/");
    };


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
                        return <RowItemChat chat={chat} key = {chat.id} />;
                    })
                    ):(
                        <PulseLoader color="#6b49ff" />
                     )}
                
            </tbody>
        </table>
        <button className="btn btn-danger m-3" type="button" onClick={ onCancel}>Cancel</button>
        <button className='btn btn-primary'>Export CSV</button>
       
    </section>
  );
};
