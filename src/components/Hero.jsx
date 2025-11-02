import React from 'react'
export default function Hero(){
  return (
    <header id="home" className="hero">
      <div className="grid-overlay" aria-hidden="true"></div>
      <div className="container">
        <div className="panel reveal hero-assemble">
          <p className="kbd">/ welcome</p>
          <h1 className="headline"><span className="reveal-line">Hi, I’m <span className="accent">Nevin Dabrah</span>.</span></h1>
          <h1 className="headline"><span className="reveal-line">I build clean, interactive experiences.</span></h1>
          <p className="subtitle">Full‑stack developer exploring where thoughtful design meets real‑world utility.</p>
          <div className="row" style={{marginTop:'1rem'}}>
            <a className="btn" href="#projects">See Projects</a>
            <a className="btn" href="#about" style={{borderStyle:'dashed'}}>About Me</a>
          </div>
        </div>
      </div>
    </header>
  )
}
