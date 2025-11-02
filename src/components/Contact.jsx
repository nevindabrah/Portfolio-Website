import React from 'react'
import { Mail, Phone, MapPin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <div className="panel" style={{ textAlign: 'center' }}>
      <h2>Contact</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.8rem',
        marginTop: '1.5rem',
        color: 'var(--c4)',
        lineHeight: '1.8'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Mail size={18} color="var(--accent)" />
          <a href="mailto:nsd45@yale.edu" className="accent">nsd45@yale.edu</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Phone size={18} color="var(--accent)" />
          <span className="accent">+1 (617) 293-0912</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <MapPin size={18} color="var(--accent)" />
          <span>New Haven, CT</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Github size={18} color="var(--accent)" />
          <a
            href="https://github.com/nevindabrah"
            target="_blank"
            rel="noreferrer"
            className="accent"
          >
            github.com/nevindabrah
          </a>
        </div>
      </div>
    </div>
  )
}
