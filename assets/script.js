
(function(){
  const progress = document.querySelector('.progress');
  document.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
    progress && (progress.style.transform = `scaleX(${scrolled})`);
  });
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const menuBtn = document.querySelector('.menu');
  const nav = document.getElementById('mainnav') || document.querySelector('.nav');
  if (menuBtn && nav) menuBtn.addEventListener('click', () => nav.classList.toggle('show'));
})();
