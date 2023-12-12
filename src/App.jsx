import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import './App.css'

import config from './Chatbot/config.jsx';
import MessageParser from './Chatbot/MessageParser.jsx';
import ActionProvider from './Chatbot/ActionProvider.jsx';

function App() {
 

  return (
    <div className='app-container'>
      <div className="chatbot-container">
          <Chatbot 
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}/>
      </div>
    </div>
  )
}

export default App
