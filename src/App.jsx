import React from 'react'
import Home from './pages/Home'

import { Router, Route, Routes } from 'react-router-dom'
import UnderDevComponent from './components/UnderDevComponent'
import Contact from './pages/contact/Contact'

export default function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/contact' element = {<Contact />}/>
        <Route path='/education' element = {<UnderDevComponent />}/>
        <Route path='/certificate' element = {<UnderDevComponent />}/>
      </Routes>

      
    </div>
  )
}
