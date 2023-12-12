import { createChatBotMessage } from 'react-chatbot-kit';
import { StartBtn } from '../Components/StartBtn/StartBtn';
import React from 'react';

const namebot = "ChatBob"

const config = {
  initialMessages: [createChatBotMessage(`Hello mi name is ${namebot}`,{
    widget:'startBtn'
  })],
  botName:namebot,
  widgets:[
    {
        widgetName: "startBtn",
        widgetFunc: (props) => <StartBtn {...props} />,
    }
  ]
};

export default config;