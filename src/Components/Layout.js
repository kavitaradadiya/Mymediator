import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Router from '../Pages/Routes/Router'

export default function Layout() {
  return (
    <div>
        <Header></Header>
        <div>
            <Router></Router>
        </div>
        <Footer></Footer>
    </div>
  )
}
