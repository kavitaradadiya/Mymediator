import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div>
        <Header></Header>
        <div>
            <Layout></Layout>
        </div>
        <Footer></Footer>
    </div>
  )
}
