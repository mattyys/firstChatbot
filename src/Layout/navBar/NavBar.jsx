import React,{useContext} from 'react'
import { UserContext } from '../../Context/UserContext';
import { FaUserLarge } from "react-icons/fa6";
import './NavBar.css';


export const NavBar = () => {

  const {user} = useContext(UserContext);

  return (
    <header className='navBar-container'>
        <nav className='navBar'>
          <div className="user-container">
               <FaUserLarge className='user-icon'/>
               <h4>{ user == "" ? "user name" : user.name}</h4>
          </div>
        </nav>
    </header>
  )
}
