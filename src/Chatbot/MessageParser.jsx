import React, {useContext} from 'react';
import { UserContext } from '../Context/UserContext';



const MessageParser = ({ children, actions }) => {
  const {user} = useContext(UserContext);
  console.log(children);
    
  const parse = (message) => {
    const lowerCaseMsg = message.toLowerCase();
    console.log(message);

    if (lowerCaseMsg.includes('hello')){
      actions.handleHello();
    }
    
    if(lowerCaseMsg.includes('i want')){ 
      if(lowerCaseMsg.includes('loan')){
        actions.handleLoan();
      }else{
        actions.handleIWant();  
      }      
    }
    if(lowerCaseMsg.includes('loan')){
      actions.handleLoan();
    }
    
    if(lowerCaseMsg.includes('good')){
      if(lowerCaseMsg.includes('bye')){
        console.log('chau');
        actions.handleGoodBye();
        actions.addChatdb();
      }else{
        actions.handleGood();
      }
    };
    


  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;