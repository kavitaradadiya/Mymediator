import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Property from '../Property'
import PropertyDetail from '../PropertyDetail'
import Selling from '../Selling'
import PropertyList from '../PropertyList'

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/property' element={<Property></Property>}></Route>
        <Route path='/propertydetail/:id' element={<PropertyDetail></PropertyDetail>}></Route>
        <Route path='/selling' element={<Selling></Selling>}></Route>
        <Route path='/propertylist' element={<PropertyList></PropertyList>}></Route>
      </Routes>
    </div>
  )
}
