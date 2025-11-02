import React from 'react'
import { smoothScrollToId } from '../../js/scroll.js'

export default function Navbar() {
  const go = (id) => smoothScrollToId(id)

  return (
    <nav className="nav">
      <div className="container nav-inner">

        <button
          className="logo"
          onClick={() => go('home')}
          aria-label="Go to top"
        >
          <span className="logo-badge">ND</span>
          <span className="logo-text">Nevin Dabrah</span>
        </button>

        <div className="navlinks">
          <a onClick={() => go('about')}>About</a>
          <a onClick={() => go('projects')}>Projects</a>
          <a onClick={() => go('contact')}>Contact</a>
        </div>
      </div>
    </nav>
  )
}
