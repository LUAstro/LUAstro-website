/*
                          ~ Lightbox Code ~
                           ~ by John Ray ~

This code creates a list of constants pertaining to each part of the lightbox,
letting it take a current Z-index of zero (it's a layer behind the basis HTML),
    defines functions to show and hide the lightbox, move between next and
  previous images, and keyboard shortcuts to navigate the lightbox correctly.

*/
(function() {
    const figures   = Array.from(document.querySelectorAll('.photo-grid figure'));
    const lightbox  = document.getElementById('lightbox');
    const lbContent = lightbox.querySelector('.lightbox-content');
    const lbImg     = lbContent.querySelector('img');
    const lbCaption = lbContent.querySelector('.lb-caption');
    const closeBtn  = lbContent.querySelector('.lb-close');
    const maxBtn    = lbContent.querySelector('.lb-maximize');
    const prevBtn   = lbContent.querySelector('.lb-prev');
    const nextBtn   = lbContent.querySelector('.lb-next');
    let currentIndex = 0;

    function showLightbox(idx) {
      currentIndex = idx;
      const fig = figures[idx];
      const img = fig.querySelector('img');
      lbImg.src       = img.src;
      lbImg.alt       = img.alt;
      lbCaption.textContent = fig.querySelector('figcaption').innerText;
      lightbox.classList.add('open');
    }
    function hideLightbox() {
      lightbox.classList.remove('open');
      if (document.fullscreenElement) document.exitFullscreen();
    }
    function showPrev() { showLightbox((currentIndex - 1 + figures.length) % figures.length); }
    function showNext() { showLightbox((currentIndex + 1) % figures.length); }

    figures.forEach((fig, idx) => {
      fig.addEventListener('click', e => {
        e.preventDefault();
        showLightbox(idx);
      });
    });

    closeBtn.addEventListener('click', e => { e.stopPropagation(); hideLightbox(); });
    lightbox.addEventListener('click', hideLightbox);
    lbContent.addEventListener('click', e => e.stopPropagation());
    prevBtn.addEventListener('click', e => { e.stopPropagation(); showPrev(); });
    nextBtn.addEventListener('click', e => { e.stopPropagation(); showNext(); });
    maxBtn.addEventListener('click', e => {
      e.stopPropagation();
      if (!document.fullscreenElement) {
        lbContent.requestFullscreen?.();
      } else {
        document.exitFullscreen();
      }
    });

    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') hideLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'Enter') maxBtn.click();
    });
  })();

    animate();
  })();
