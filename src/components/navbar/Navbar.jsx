import './Navbar.css'
import React from 'react'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <p>Welcome Vikas (admin)</p>
        <button>Online</button>
        <input type="text" 
        value="8308005658"/>
        <i><NotificationsNoneOutlinedIcon/></i>
        <button>Profile Status</button>

      </div>
    </>
  )
}
