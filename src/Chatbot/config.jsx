import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';
import { UserLog } from '../Components/UserLog/UserLog';
import { LoanQuiz } from '../Components/LoanQuiz/LoanQuiz';
import { ConfirmLoan } from '../Components/ConfirmLoan/ConfirmLoan';


const namebot = "ChatBob"

const config = {
  initialMessages: [createChatBotMessage(`Hello, I'm your assistant ${namebot}`)],
  botName:namebot,
  widgets:[
    {
      widgetName: "UserLog",
      widgetFunc: (props) => <UserLog {...props}/>
    },
    {
      widgetName: "LoanQuiz",
      widgetFunc: (props) => <LoanQuiz {...props} />,
    },
    {
      widgetName:"ConfirmLoan",
      widgetFunc: (props) => <ConfirmLoan {...props} />
    }
   
  ]
};

export default config;