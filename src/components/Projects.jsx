import React, { useEffect } from 'react'
import { setupTilt } from '../../js/tilt.js'
import { Github } from 'lucide-react'

const data = [
  {
    title: 'Let’sPlan',
    desc: 'A student planner built to improve organization and time management in my high school community. Click to view it on GitHub — it streamlined plans and tasks in one place, helping students stay accountable and prepared.',
    tags: ['HTML','CSS','JavaScript','Jinja2'],
    link: 'https://github.com/nevindabrah/Student-Planner-Web-App'
  },
  {
    title: 'This Portfolio Website',
    desc: 'Designed as both a creative expression and a means of connection within the tech space — this portfolio expresses my love for bringing things to life.',
    tags: ['React','Vite','HTML','CSS','JavaScript'],
    link: null
  },
  {
    title: 'Project APEX — SOS-Hermann Gmeiner International College, Accra',
    desc: 'As CAS & Clubs Prefect, I led Project APEX, raising over 60,000 cedis to renovate school facilities and organizing two ShowCAS exhibitions featuring 20+ student projects.',
    tags: ['Leadership','Fundraising','Project Management','Community Impact'],
    link: null
  },
  {
    title: 'Ashesi Innovation Experience (AIX) — Ashesi University, Accra',
    desc: 'Led a 4-person team to develop LETS GO EDUCATION, a social enterprise reducing stationery costs through eco-friendly production. The project earned Best Entrepreneurship Group recognition at AIX 2023.',
    tags: ['Entrepreneurship','Team Leadership','Design Thinking','Sustainability'],
    link: null
  }
]

export default function Projects(){
  useEffect(() => {
    const cleanup = setupTilt('.card')
    return cleanup
  }, [])

  return (
    <div>
      <h2>Projects</h2>
      <div className="cards">
        {data.map(p => (
          p.link ? (
            <a className="card" href={p.link} key={p.title} target="_blank" rel="noreferrer">
              <h3 style={{display:'flex',alignItems:'center',gap:'6px'}}>
                {p.title} <Github size={18} />
              </h3>
              <p>{p.desc}</p>
              <div className="badges">
                {p.tags.map(t => <span className="badge" key={t}>{t}</span>)}
              </div>
            </a>
          ) : (
            <div className="card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="badges">
                {p.tags.map(t => <span className="badge" key={t}>{t}</span>)}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  )
}
