import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import React, {useState, useContext} from 'react';
import { MdChatBubble } from "react-icons/md";
import './ChatbotLuncher.css';
import ActionProvider from '../../Chatbot/ActionProvider';
import config from '../../Chatbot/config'; 
import MessageParser from '../../Chatbot/MessageParser';
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';



export const ChatbotLuncher = () => {

    const navigate = useNavigate();
    //primero verificar el usuario y luego mostrat el chat

    const {user} = useContext(UserContext); 

    const [showChat, setShowChat] = useState(false);

    const onNavigate = () => {
      navigate("/register");
    };

    const checkUser = () => {
      user == "" ? onNavigate() : setShowChat(!showChat);
    };

    const saveMessages = (messages,HTMLString) => {
      localStorage.setItem("chat_messages", JSON.stringify(messages))
    };
    const loadMessages = () => {
      const messages = JSON.parse(localStorage.getItem('chat_messages'));
      return messages;
    };



  return (   
    <div className='app-container'>
        
        <div className="chaticon-container" onClick={ () => checkUser()}>
            <MdChatBubble className='chaticon'  />
        </div>
        
        <div className={showChat ? "chatbot-container-show" : "chatbot-container"}>
           {  showChat && <Chatbot 
                            config={config}
                            actionProvider={ActionProvider}
                            messageParser={MessageParser}
                            messageHistory={loadMessages}
                      
                          />
           }
          </div>
    </div>
  
  )
}





