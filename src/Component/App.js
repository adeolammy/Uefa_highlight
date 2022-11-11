import React, { Component } from 'react';
import {Route, Routes } from 'react-router-dom'

// COMPONENTS
import Header from './header'
import Footer from './footer'
import Home from './home'
import Teams from './teams'
import Team from './team'

class App extends Component {
  render(){

  return (
    
      <>
        <Header/>   
        <Routes>    
             <Route exact path="/" element= {<Home/>}/> 
             <Route exact path="/teams" element={<Teams/>}/> 
            <Route exact path="/team/:id" element={<Team/>}/> 
             
        </Routes>  
        <Footer/>   
      </>  
     
  )
  }
}

export default App;
