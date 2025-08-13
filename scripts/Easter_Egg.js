
(function() {
  const header = document.querySelector('header');
  const bar    = document.querySelector('.star-bar');
  const stars  = [];

  function createStar(x,y) {
    const s = document.createElement('span');
    s.className = 'star';
    s.textContent = '★';
    s.x = x; s.y = y;
    s.vx = Math.random()*4 - 2;
    s.vy = Math.random()*4 - 2;
    bar.appendChild(s);
    stars.push(s);
    update(s);
  }

  function update(s) {
    s.style.left = s.x + 'px';
    s.style.top  = s.y + 'px';
  }

  function animate() {
    const w = bar.clientWidth, h = bar.clientHeight;
    stars.forEach(s => {
      s.x += s.vx; s.y += s.vy;
      if (s.x < 0 || s.x > w) s.vx *= -1;
      if (s.y < 0 || s.y > h) s.vy *= -1;
      s.x = Math.max(0, Math.min(w, s.x));
      s.y = Math.max(0, Math.min(h, s.y));
      update(s);
    });
    requestAnimationFrame(animate);
  }

  header.addEventListener('click', e => {
    // only in the top 100px
    if (e.offsetY > 100) return;
    // but NOT when clicking a link, button, nav item, search input, or logo
    if ( e.target.closest('a, button, input, nav, h1 img') ) return;
    // compute position relative to star-bar
    const rect = bar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    createStar(x, y);
  });

  animate();
})();
