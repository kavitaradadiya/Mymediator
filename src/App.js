import React from 'react'
// import Layout from './Components/Layout'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import './App.css'
import Property from './Pages/Property'

export default function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/property' element={<Property></Property>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}
