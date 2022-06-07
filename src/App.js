
import './App.css';
import { Home } from './components/home/Home';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

import { Sidebar } from './components/Sidebar.jsx/Sidebar';
import Dashboard from './components/home/Dashboard';
import { UserList } from './components/usersList/UserList';

function App() {
  return (
    <>

    <Router>
    <Dashboard/> 
    <Routes>
    
    </Routes >         
 
    </Router> 
    
    
      
    </>
    


  );
}

export default App;
