// Simple canvas hearts burst
window.burstHearts = function(){
  const cvs = document.createElement('canvas');
  cvs.style.position = 'fixed';
  cvs.style.inset = '0';
  cvs.style.pointerEvents = 'none';
  cvs.style.zIndex = '100';
  document.body.appendChild(cvs);
  const ctx = cvs.getContext('2d');
  let w, h, running = true;
  const DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  const resize = ()=>{
    w = cvs.width = innerWidth * DPR;
    h = cvs.height = innerHeight * DPR;
    cvs.style.width = innerWidth+'px';
    cvs.style.height = innerHeight+'px';
  };
  resize();
  addEventListener('resize', resize);

  const parts = [];
  const N = 120;
  for(let i=0;i<N;i++){
    parts.push({
      x: w/2, y: h/2,
      vx: (Math.random()*2-1)*5*DPR,
      vy: (Math.random()*2-1)*5*DPR - 3*DPR,
      g: 0.12*DPR,
      size: (8 + Math.random()*10)*DPR,
      life: 120 + Math.random()*60
    });
  }

  function heartPath(ctx, x, y, s){
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.PI/4);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0, s);
    ctx.lineTo(-s, s);
    ctx.lineTo(-s, 0);
    ctx.closePath();
    ctx.restore();
  }

  function draw(){
    if(!running) return;
    ctx.clearRect(0,0,w,h);
    parts.forEach(p=>{
      p.vy += p.g;
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 1;
      // draw heart shape
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(Math.PI/4);
      const s = p.size;
      // square
      ctx.fillStyle = `hsl(${330 + Math.random()*30}, 90%, ${60+Math.random()*20}%)`;
      ctx.fillRect(-s/2, -s/2, s, s);
      // circles
      ctx.beginPath();
      ctx.arc(0, -s/2, s/2, 0, Math.PI*2);
      ctx.arc(-s/2, 0, s/2, 0, Math.PI*2);
      ctx.fill();
      ctx.restore();
    });
    // remove dead
    for(let i=parts.length-1;i>=0;i--){
      if(parts[i].life <= 0) parts.splice(i,1);
    }
    if(parts.length===0){
      running = false;
      cvs.remove();
      return;
    }
    requestAnimationFrame(draw);
  }
  draw();
}
