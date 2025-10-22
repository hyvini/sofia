// Simple play/pause floating button; user interaction required to start due to browser policies
(function(){
  const btn = document.createElement('button');
  btn.className = 'floating-music';
  btn.innerHTML = '<span class="note" aria-hidden="true">♪</span>';
  btn.setAttribute('aria-pressed','false');
  btn.title = 'Tocar/pausar música';
  document.body.appendChild(btn);

  // Create audio element (user should replace the MP3 path with the couple's song)
  const audio = document.createElement('audio');
  audio.src = './assets/music/Tempinho_Bom_Salvador_da_Rima.mp3'; // Coloque o arquivo aqui com este nome
  audio.preload = 'auto';
  audio.loop = true; audio.volume = 0.85;
  document.body.appendChild(audio);

  const toast = (msg) => {
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    document.body.appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => {
      el.classList.remove('show');
      setTimeout(()=> el.remove(), 300);
    }, 2200);
  };

  btn.addEventListener('click', async ()=>{
    if(audio.paused){
      try{
        await audio.play();
        btn.setAttribute('aria-pressed','true');
        toast('Música: Tempinho Bom — Salvador da Rima ❤️');
      }catch(e){
        toast('Clique novamente para iniciar a música.');
      }
    }else{
      audio.pause();
      btn.setAttribute('aria-pressed','false');
      toast('Música pausada.');
    }
  });

  // If audio missing, inform politely on first attempt
  let _audioErrorNotified=false; audio.addEventListener('error', ()=>{ _audioErrorNotified=true;
    // only notify once when the user clicks
    btn.addEventListener('click', function once(){
      toast('Adicione o arquivo MP3 em /assets/music com o nome "Tempinho_Bom_Salvador_da_Rima.mp3".');
      btn.removeEventListener('click', once);
    });
  });
})();
