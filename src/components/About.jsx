import React from 'react'
import { Linkedin } from 'lucide-react'
import myPhoto from '../assets/my-photo.jpeg'  // Make sure this file exists in src/assets/

export default function About() {
  return (
    <div className="panel about-grid">
      <div className="about-photo">
        <img
          src={myPhoto}
          alt="Nevin Dabrah portrait"
        />

        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <a
            href="https://www.linkedin.com/in/nev0/"
            target="_blank"
            rel="noreferrer"
            className="btn icon-btn"
          >
            <Linkedin size={18} style={{ marginRight: '8px' }} /> Connect on LinkedIn
          </a>
        </div>
      </div>

      <div className="about-text">
        <h2>About</h2>
        <p>
          I’m a Ghanaian student at <strong>Yale University</strong>, pursuing a B.S. in
          <strong> Computer Science</strong> and <strong>Economics</strong>.
          My interests sit at the intersection of data, design, and decision-making —
          exploring how technology and economic insight can drive meaningful solutions.
          I’m drawn to projects that merge creativity with impact, especially those that
          improve the lives of their users.
        </p>

        <h3 style={{ marginTop: '1rem' }}>Technical Skills</h3>
        <div className="badges">
          {['HTML', 'CSS', 'JavaScript', 'Jinja2', 'React', 'Vite'].map(b => (
            <span className="badge" key={b}>{b}</span>
          ))}
        </div>

        <h3 style={{ marginTop: '1rem' }}>Core Soft Skills</h3>
        <div className="badges">
          {[
            'Communication', 'Teamwork', 'Problem Solving',
            'Adaptability', 'Attention to Detail', 'Time Management'
          ].map(s => (
            <span className="badge" key={s}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
