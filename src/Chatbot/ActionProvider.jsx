import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    
  const logginAction = () => {
    const msg = createChatBotMessage('logged in selected',{
      widget:""
    });
    addMsgToState(msg);
  };

  const handleHello = () => {
    const botMsg = createChatBotMessage('Hello, what can I do for you?')
    addMsgToState(botMsg);
  };

  const handleGood = () => {
    const currDate = new Date();
    const currHour = currDate.getHours();
    const responseMss = currHour > 12 ? "Good afternoon, how can I help you?" 
                        :"Good Morning, how can I help you?";
    const botMessage = createChatBotMessage(responseMss)

    addMsgToState(botMessage);
  }; 

  const handleIWant = () => {
    const botMsg = createChatBotMessage('I can offer you information about loans',
    {
      widget:"ConfirmLoan",
    });
    addMsgToState(botMsg);
  };

  const handleLoan = () => {
    const botMessage = createChatBotMessage('I can help you with some options, please select the one you prefer',
          {
            widget:"LoanQuiz",
          });

    addMsgToState(botMessage);
  };


  const addMsgToState = (message) =>{
    setState((prev) => (
      {
        ...prev,
        messages: 
          [
            ...prev.messages,
            message
          ]
      }
    ))
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleGood,
            handleLoan,
            handleIWant,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;