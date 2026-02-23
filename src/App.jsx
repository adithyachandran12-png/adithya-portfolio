import React from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Awards from './components/Awards.jsx'
import USExperience from './components/USExperience.jsx'
import Experience from './components/Experience.jsx'
import Research from './components/Research.jsx'
import Skills from './components/Skills.jsx'
import Music from './components/Music.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Awards />
      <Divider />
      <USExperience />
      <Divider />
      <Experience />
      <Divider />
      <Research />
      <Divider />
      <Skills />
      <Divider />
      <Music />
      <Divider />
      <Contact />
      <Footer />
    </>
  )
}

function Divider() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 3rem' }}>
      <hr style={{ border: 'none', height: '1px', background: 'linear-gradient(to right, #C2CAD8, transparent)' }} />
    </div>
  )
}
