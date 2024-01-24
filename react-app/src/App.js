import React from 'react'
import "./App.css"
import Header from './component/Header'
import Home from './component/Home'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'

import Cart from './component/Cart'
import Collection from './component/Collection'
import{Toaster}from "react-hot-toast"
import Footer from './component/Footer'
function App() {
  return (
    <Router>
      <Header/>
     
      <Toaster/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/collection' element={<Collection/>}/>
      </Routes>
      <Footer/>
      
    </Router>
     


    
  )
}

export default App
