
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { ChatbotLuncher } from './Components/ChatbotLuncher/ChatbotLuncher'
import { NavBar } from "./Layout/navBar/NavBar";
import UserProvider from "./Context/UserContext";
import { Home } from "./Pages/Home/Home";
import { UserLog } from "./Components/UserLog/UserLog";
import { ChatHistory } from "./Pages/ChatHistory/ChatHistory";


function App() {
 

  return (
    <UserProvider>

      <BrowserRouter>
            <NavBar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<UserLog />} />
                  <Route path="/history" element={<ChatHistory />} />
              </Routes>
    
            <ChatbotLuncher />
      </BrowserRouter>

    </UserProvider>
  )
}

export default App
