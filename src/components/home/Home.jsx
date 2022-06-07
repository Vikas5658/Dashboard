import React from 'react';
import { Navbar } from '../navbar/Navbar';
import { UserList } from '../usersList/UserList';
import './Home.css'
import { MainContent } from './MainContent';

export const Home = () => {
  return (
    <div className='home'>       
        <Navbar/>
        <MainContent/>
    </div>
  )
}

// <UserList/>