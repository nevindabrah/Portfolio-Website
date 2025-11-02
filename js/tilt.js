
export function setupTilt(selector = '.card'){
  const cards = document.querySelectorAll(selector)
  function onMove(e){
    const r = 10
    const rect = this.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rx = ((y/rect.height)-.5)*-r
    const ry = ((x/rect.width)-.5)*r
    this.style.transform = `translateY(-6px) rotateX(${rx}deg) rotateY(${ry}deg)`
  }
  function onLeave(){ this.style.transform = '' }
  cards.forEach(c => {
    c.addEventListener('mousemove', onMove)
    c.addEventListener('mouseleave', onLeave)
  })
  return () => cards.forEach(c => {
    c.removeEventListener('mousemove', onMove)
    c.removeEventListener('mouseleave', onLeave)
  })
}
