import React, { useEffect } from 'react'
export default function Assembler({ onDone }) {
  useEffect(() => {
    const t = setTimeout(() => onDone?.(), 1500)
    return () => clearTimeout(t)
  }, [onDone])
  return (
    <div className="boot-overlay" aria-hidden="true">
      <div className="boot-grid"></div>
      <div className="boot-bars">
        <span style={{'--i': 0}} /><span style={{'--i': 1}} /><span style={{'--i': 2}} /><span style={{'--i': 3}} /><span style={{'--i': 4}} />
      </div>
      <div className="boot-logo">ND</div>
    </div>
  )
}
