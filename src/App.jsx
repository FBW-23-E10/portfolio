import { useState } from 'react'
import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

function Layout(){

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}


export default App
