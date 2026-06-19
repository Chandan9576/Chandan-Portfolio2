import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Services from './Pages/Services'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import './App.css'

const App = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#050008' }}>
      
        {/* Blob 1 — Purple */}
        <div style={{
          position: 'fixed', width: '550px', height: '550px',
          background: '#7c3aed', borderRadius: '50%',
          filter: 'blur(140px)', opacity: 0.4,
          top: '-10px', left: '-120px', zIndex: 0,
          pointerEvents: 'none'
        }}/>

        {/* Blob 2 — Blue */}
        <div style={{
          position: 'fixed', width: '500px', height: '500px',
          background: '#2563eb', borderRadius: '50%',
          filter: 'blur(130px)', opacity: 0.35,
          bottom: '18%', right: '5%', zIndex: 0,
          pointerEvents: 'none'
        }}/>

        {/* Blob 3 — Pink */}
        <div style={{
          position: 'fixed', width: '400px', height: '400px',
          background: '#db2777', borderRadius: '50%',
          filter: 'blur(120px)', opacity: 0.25,
          top: '60%', left: '30%', zIndex: 0,
          pointerEvents: 'none'
        }}/> 
      

      {/* All Sections */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Services/>
        <Projects />
        <Contact />
      </div>

    </div>
  )
}

export default App