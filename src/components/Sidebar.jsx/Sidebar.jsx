import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const Sidebar = () => {  
  return (
    
    <>
    <div className="sidebar">
        <div className="top">
          <h2 className="logo">
              Traya.
          </h2>        
        </div>      
   
              <div className="sidebar-item">

                <ul>                 
                 <li>
                 <i><PersonOutlineOutlinedIcon/></i>
                 <Link to='/user-list'>User Management</Link>                 
                 <i></i>
                 </li>
                 <li>
                 <i><CheckCircleOutlineOutlinedIcon/></i>
                 <Link to='/order-management'>Order Management</Link>                  
                 <i></i>
                 </li>
                 <li>
                 <i><DescriptionOutlinedIcon/></i>
                 <Link to='/reports'>Reports</Link>                  
                 <i></i>
                 </li>                 
                 <li>
                 <i><PeopleAltOutlinedIcon/></i>
                 <Link to='/group-management'>Group Management</Link>                  
                 <i></i>
                 </li>  
                 <li>
                 <i><DiscountOutlinedIcon/></i>
                 <Link to='/discount-codes'>Discount Codes</Link>                  
                 <i></i>
                 </li>
                 <li>
                 <i><SettingsOutlinedIcon/></i>
                 <Link to='/configure'>Configure</Link>                  
                 <i></i>
                 </li>               
                </ul>
                
                <div className="bottom">
                    Other options
                </div>
                </div>     
        
    </div>
    </>
  )
}
