// progress
const progress = document.querySelector('.progress');
function setProgress(){
  const h = document.documentElement;
  const scrolled = (h.scrollTop)/(h.scrollHeight - h.clientHeight);
  if(progress) progress.style.transform = `scaleX(${Math.max(0,Math.min(1,scrolled))})`;
}
document.addEventListener('scroll', setProgress, {passive:true}); setProgress();
// menu
const nav = document.getElementById('mainnav') || document.querySelector('.nav');
const btn = document.querySelector('.menu');
if(btn && nav){ btn.addEventListener('click', ()=>{ const show = nav.classList.toggle('show'); btn.setAttribute('aria-expanded', show ? 'true':'false'); }); }
// reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); } });
},{threshold:0.14, rootMargin:'0px 0px -60px'});
document.querySelectorAll('.reveal, .fade-in').forEach(el=>io.observe(el));
// year
const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();