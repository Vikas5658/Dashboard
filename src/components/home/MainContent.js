import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import { Configure } from '../pages/Configure';
import { DiscountCodes } from '../pages/DiscountCodes';
import { GroupManagement } from '../pages/GroupManagement';
import { OrderManagement } from '../pages/OrderManagement';
import { Reports } from '../pages/Reports';
import { UserList } from '../usersList/UserList';
import './MainContent.css'

export const MainContent = () => {
  return (
    <div className='main'>
    <div className="top">
        <button className='back-btn'>Back</button>
        
        <div>
        <input type="text" />
        <button>Assign</button>
        </div>     

    </div >
    <div className="main-content">     
    <Routes> 
    <Route path='/user-list' element={<UserList/>}/>
    <Route path='/order-management' element={<OrderManagement/>}/> 
    <Route path='/reports' element={<Reports/>}/> 
    <Route path='/group-management' element={<GroupManagement/>}/> 
    <Route path='/discount-codes' element={<DiscountCodes/>}/> 
    <Route path='/configure' element={<Configure/>}/> 
  </Routes> 
    </div>
        
    </div>
  )
}
