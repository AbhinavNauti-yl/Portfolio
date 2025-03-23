import React from 'react'
import Home from './pages/Home'

import { Router, Route, Routes } from 'react-router-dom'
import Contact from './pages/contact/Contact'
import UnderDevelopement from './pages/UnderDevelopement'

export default function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/contact' element = {<Contact />}/>
        <Route path='/education' element = {<UnderDevelopement />}/>
        <Route path='/certificate' element = {<UnderDevelopement />}/>
      </Routes>

      
    </div>
  )
}
