import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Particles from './components/Particles.jsx'
import Assembler from './components/Assembler.jsx'

export default function App(){
  const [dark, setDark] = useState(true)
  const [booted, setBooted] = useState(false)

  // mark when to play staged animations
  useEffect(() => {
    if (booted) document.documentElement.classList.add('booted')
  }, [booted])

  // scroll-reveal
  useEffect(() => {
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible') } })
    }, {threshold: .12})
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      {!booted && <Assembler onDone={() => setBooted(true)} />}
      <Particles />
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <section id="about" className="section container reveal">
          <About />
        </section>
        <section id="projects" className="section container reveal">
          <Projects />
        </section>
        <section id="contact" className="section container reveal">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}
