import React from 'react'
export default function Footer(){
  const year=new Date().getFullYear()
  return <footer className="footer"><div className="container">© {year} Nevin Dabrah • Built with React + Vite</div></footer>
}
