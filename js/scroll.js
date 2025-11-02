
export function smoothScrollToId(id){
  const target = document.getElementById(id)
  if(!target) return
  const nav = document.querySelector('.nav')
  const offset = nav ? nav.getBoundingClientRect().height + 12 : 0
  const top = window.scrollY + target.getBoundingClientRect().top - offset
  window.scrollTo({ top, behavior: 'smooth' })
}
function updateProgress(){
  const h = document.documentElement
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100
  const bar = document.getElementById('progress')
  if(bar) bar.style.width = scrolled + '%'
}
window.addEventListener('scroll', updateProgress, { passive: true })
window.addEventListener('load', updateProgress)
