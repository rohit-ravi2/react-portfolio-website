import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home    from './pages/Home'
import About   from './pages/About'
import Projects from './pages/Projects'
import Writing from './pages/Writing'
import Resume  from './pages/Resume'
import Contact from './pages/Contact'

import Nav from './components/nav/Nav'   // bottom navbar

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/"        element={<Home    />} />
      <Route path="/about"   element={<About   />} />
      <Route path="/projects"element={<Projects/>} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/resume"  element={<Resume  />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </>
)

export default App
