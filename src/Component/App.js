import React, { Component } from 'react';
import {Route, Routes } from 'react-router-dom'

// COMPONENTS
import Header from './header'
import Footer from './footer'
import Home from './home'

class App extends Component {
  render(){

  return (
    
      <>
        <Header/>   
        <Routes>    
             <Route exact path="/" element= {<Home/>}/> 
        </Routes>  
        <Footer/>   
      </>  
     
  )
  }
}

export default App;
