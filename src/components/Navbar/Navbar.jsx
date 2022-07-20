import React from 'react'
import './Navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../Context/darkModeContext';
import { useContext } from 'react';


const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className='icon'/>
        </div>
        <div className="items">
          <div className="item">
            <PublicOutlinedIcon className='icon'/>
            <p>English</p>
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon' onClick={() => dispatch ({type: "TOGGLE"})}/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className='icon'/>
          </div>

          <div className="item">
            <img src="https://st2.depositphotos.com/2703645/11099/v/950/depositphotos_110991592-stock-illustration-female-cartoon-avatar-icon.jpg"
             alt="avatar" 
             className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar