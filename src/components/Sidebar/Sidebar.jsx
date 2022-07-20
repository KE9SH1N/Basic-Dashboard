import React, { useContext } from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import RowingOutlinedIcon from '@mui/icons-material/RowingOutlined';


import {Link} from "react-router-dom"
import { DarkModeContext } from '../../Context/darkModeContext';


const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/">
          <span className='logo'>Badmin</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>

          <p className="title">List</p>
            <Link to="/users">
            <li>
              <PersonOutlineOutlinedIcon className='icon' />
              <span>Users</span>
            </li>
            </Link>
          <Link to="/products">
            <li>
              <ProductionQuantityLimitsOutlinedIcon className='icon' />
              <span>Products</span>
            </li>
            </Link>
          <li>
            <Inventory2OutlinedIcon className='icon'/>
            <span>Order</span>
          </li>
          <li>
            <DeliveryDiningOutlinedIcon className='icon'/>
            <span>Delivery</span>
          </li>

          <p className="title">Analytics</p>
          <li>
            <AssessmentOutlinedIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className='icon'/>
            <span>Notifications</span>
          </li>

          <p className="title">Settings</p>
          <li>
            <SettingsSuggestIcon className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <RowingOutlinedIcon className='icon'/>
            <span>Activity Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className='icon'/>
            <span>Settigns</span>
          </li>

          <p className="title">Users</p>
          <li>
            <AssignmentIndOutlinedIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      
      <div className="bottom">
        <p className="title">Themes</p>
        <div className="options">
          <div 
            className="colorOption"
            onClick={() => dispatch({ type: "LIGHT" })}>
           </div>

          <div 
            className="colorOption"
            onClick={() => dispatch({ type: "DARK" })}>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar