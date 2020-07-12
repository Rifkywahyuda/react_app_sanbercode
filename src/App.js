import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Main from './component/index';


function App() {

  return (
    <div className='App-header'>
    <div className='App-link'>
      <hr />
      <Link to="/home">Home</Link> | 
      <Link to="/converter">Konsep lifting</Link> | 
      <Link to="/form">Konsep Form</Link> |
      <Link to="/hook">Konsep Stateless component dan hook</Link> | 
      <Link to="/news">Konsep list</Link> | 
      <Link to="/counter">Konsep Global state</Link>
      <Main />
      
    </div>
    
    </div>
  );
}

export default App;
