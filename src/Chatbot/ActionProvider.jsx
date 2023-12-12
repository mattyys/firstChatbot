import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    
  const logginAction = () => {
    const msg = createChatBotMessage('logged in selected')
    addMsgToState(msg);
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
    ));
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            logginAction,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;