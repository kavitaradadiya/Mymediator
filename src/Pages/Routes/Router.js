import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Property from '../Property'
import PropertyDetail from '../PropertyDetail'

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/property' element={<Property></Property>}></Route>
        <Route path='/propertydetail/:id' element={<PropertyDetail></PropertyDetail>}></Route>
      </Routes>
    </div>
  )
}
