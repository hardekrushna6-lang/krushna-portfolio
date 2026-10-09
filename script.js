const links=[...document.querySelectorAll('.nav a[href^="#"]')];
links.forEach(link=>link.addEventListener('click',e=>{
  const target=document.querySelector(link.getAttribute('href'));
  if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}
}));
const hero=document.querySelector('.hero');
const card=document.querySelector('.portrait-card');
hero.addEventListener('pointermove',e=>{
  const r=hero.getBoundingClientRect();
  const x=(e.clientX-r.left)/r.width-.5;
  const y=(e.clientY-r.top)/r.height-.5;
  card.style.transform=`rotate(3deg) rotateY(${x*7}deg) rotateX(${y*-7}deg) translate(${x*8}px,${y*8}px)`;
});
hero.addEventListener('pointerleave',()=>card.style.transform='rotate(3deg)');
