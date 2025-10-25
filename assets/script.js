// progress bar
const progress = document.querySelector('.progress');
function setProgress(){
  const h = document.documentElement;
  const scrolled = (h.scrollTop)/(h.scrollHeight - h.clientHeight);
  if(progress) progress.style.transform = `scaleX(${Math.max(0,Math.min(1,scrolled))})`;
}
document.addEventListener('scroll', setProgress, {passive:true}); setProgress();
// mobile menu
const nav = document.getElementById('mainnav') || document.querySelector('.nav');
const btn = document.querySelector('.menu');
if(btn && nav){ btn.addEventListener('click', ()=>{ const show = nav.classList.toggle('show'); btn.setAttribute('aria-expanded', show ? 'true':'false'); }); }
// year
const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();