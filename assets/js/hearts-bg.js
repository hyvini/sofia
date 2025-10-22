// Floating hearts in the background
(function(){
  const root = document.createElement('div');
  root.className = 'hearts-bg';
  document.body.appendChild(root);
  const makeHeart = () => {
    const h = document.createElement('div');
    h.className = 'heart-float';
    const left = Math.random() * 100;
    const size = 12 + Math.random()*18;
    const delay = Math.random()*6;
    const duration = 7 + Math.random()*6;
    h.style.left = left+'vw';
    h.style.bottom = '-30px';
    h.style.width = size+'px';
    h.style.height = size+'px';
    h.style.animationDelay = delay+'s';
    h.style.animationDuration = duration+'s';
    h.style.opacity = 0.5 + Math.random()*0.5;
    root.appendChild(h);
    setTimeout(() => h.remove(), (duration+delay)*1000);
  };
  setInterval(makeHeart, 350);
  for(let i=0;i<15;i++) makeHeart();
})();
