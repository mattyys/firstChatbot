import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import React, {useState} from 'react';
import { MdChatBubble } from "react-icons/md";
import './ChatbotLuncher.css';

import ActionProvider from '../../Chatbot/ActionProvider';
import config from '../../Chatbot/config'; 
import MessageParser from '../../Chatbot/MessageParser';


export const ChatbotLuncher = () => {

    //primero verificar el usuario y luego mstrat el chat
    const [showChat, setShowChat] = useState(false);

  


  return (   
    <div className='app-container'>
        
        <div className="chaticon-container" onClick={ () => setShowChat(!showChat)}>
            <MdChatBubble className='chaticon'  />
        </div>
        
        <div className={showChat ? "chatbot-container-show" : "chatbot-container"}>
            <Chatbot 
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}/>
        </div>
    </div>
  
  )
}





