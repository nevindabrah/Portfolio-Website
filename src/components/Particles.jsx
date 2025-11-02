import React, { useEffect, useRef } from 'react'
export default function Particles(){
  const ref=useRef()
  useEffect(()=>{
    const canvas=ref.current,ctx=canvas.getContext('2d')
    let dpr=Math.min(window.devicePixelRatio||1,2)
    const particles=Array.from({length:90},()=>({x:Math.random(),y:Math.random(),vx:(Math.random()-.5)*.0007,vy:(Math.random()-.5)*.0007}))
    function size(){canvas.width=innerWidth*dpr;canvas.height=innerHeight*dpr;canvas.style.width=innerWidth+'px';canvas.style.height=innerHeight+'px'}
    size();addEventListener('resize',size)
    function draw(){
      ctx.clearRect(0,0,canvas.width,canvas.height)
      const w=canvas.width,h=canvas.height
      particles.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>1)p.vx*=-1;if(p.y<0||p.y>1)p.vy*=-1})
      for(let i=0;i<particles.length;i++){for(let j=i+1;j<particles.length;j++){const a=particles[i],b=particles[j],dx=(a.x-b.x)*w,dy=(a.y-b.y)*h,dist=Math.hypot(dx,dy);if(dist<150*dpr){const alpha=1-dist/(150*dpr);ctx.strokeStyle=`rgba(168,208,230,${alpha*.5})`;ctx.lineWidth=1*dpr;ctx.beginPath();ctx.moveTo(a.x*w,a.y*h);ctx.lineTo(b.x*w,b.y*h);ctx.stroke()}}}
      particles.forEach(p=>{ctx.fillStyle='rgba(168,208,230,.95)';ctx.beginPath();ctx.arc(p.x*w,p.y*h,2*dpr,0,Math.PI*2);ctx.fill()})
      requestAnimationFrame(draw)
    }
    requestAnimationFrame(draw)
    return()=>removeEventListener('resize',size)
  },[])
  return <canvas ref={ref} style={{position:'fixed',inset:0,zIndex:0,pointerEvents:'none',opacity:.5}} aria-hidden="true"/>
}
