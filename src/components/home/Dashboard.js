


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Sidebar } from '../Sidebar.jsx/Sidebar';
import { Home } from './Home';
import './Dashboard.css'



function Dashboard() {
  return (
    <>
    <div className="dashboard">
    <Sidebar/>
    <Home/>    
    
      
    </div>
      
    </>
    


  );
}

export default Dashboard;
