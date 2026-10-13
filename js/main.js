(() => {
  const body = document.body;
  const hero = document.querySelector('.hero');
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu__close');

  let menuReturnFocus = null;
  const setMenu = (open, returnFocus = true) => {
    if (!menu || !menuBtn) return;
    if (open) menuReturnFocus = document.activeElement;
    menu.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    body.style.overflow = open ? 'hidden' : '';
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.setAttribute('aria-hidden', String(!open));
    if (open) {
      menu.removeAttribute('inert');
      requestAnimationFrame(() => closeBtn?.focus({preventScroll:true}));
    } else {
      menu.setAttribute('inert', '');
      if (returnFocus && menuReturnFocus && document.contains(menuReturnFocus)) {
        menuReturnFocus.focus({preventScroll:true});
      }
    }
  };
  if (menuBtn && menu && closeBtn) {
    menuBtn.addEventListener('click', () => setMenu(true));
    closeBtn.addEventListener('click', () => setMenu(false));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false, false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('is-open')) setMenu(false); });
  }

  // V3.10.3: subtle premium parallax only.
  // No fog overlays, no extra shapes: the original hero image simply drifts a few pixels
  // with the pointer and eases back to center.
  if (hero && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - .5) * -9;
      const y = ((e.clientY - r.top) / r.height - .5) * -7;
      hero.style.setProperty('--mx', `${x}px`);
      hero.style.setProperty('--my', `${y}px`);
    });
    hero.addEventListener('pointerleave', () => {
      hero.style.setProperty('--mx', '0px');
      hero.style.setProperty('--my', '0px');
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal-on-scroll').forEach((el, i) => {
    el.style.transitionDelay = `${Math.min((i % 4) * 45, 135)}ms`;
    observer.observe(el);
  });

  document.querySelectorAll('.service-row__head').forEach(btn => {
    btn.addEventListener('click', () => {
      const row = btn.closest('.service-row');
      const next = !row.classList.contains('is-open');
      document.querySelectorAll('.service-row').forEach(r => {
        r.classList.remove('is-open');
        r.querySelector('.service-row__head').setAttribute('aria-expanded','false');
      });
      if (next) {
        row.classList.add('is-open');
        btn.setAttribute('aria-expanded','true');
      }
    });
  });

  const navLinks = [...document.querySelectorAll('.desktop-nav a')].filter(a => (a.getAttribute('href') || '').startsWith('#'));
  const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
  sections.forEach(section => navObserver.observe(section));
})();

// V3.7 — native-resolution case image viewer.
(() => {
  const sources = [...document.querySelectorAll('.case-page img[data-fullres]')];
  if (!sources.length) return;

  const box = document.createElement('div');
  box.className = 'image-lightbox';
  box.setAttribute('aria-hidden', 'true');
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Full resolution project image');
  box.innerHTML = `
    <div class="image-lightbox__bar">
      <span>FULL RESOLUTION / DRAG OR SCROLL TO INSPECT</span>
      <button class="image-lightbox__close" type="button" aria-label="Close image">×</button>
    </div>
    <div class="image-lightbox__viewport"><img alt="" /></div>`;
  document.body.appendChild(box);
  const viewer = box.querySelector('.image-lightbox__viewport');
  const image = box.querySelector('img');
  const close = box.querySelector('.image-lightbox__close');

  let lightboxReturnFocus = null;
  const closeBox = () => {
    box.classList.remove('is-open');
    box.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    image.removeAttribute('src');
    if (lightboxReturnFocus && document.contains(lightboxReturnFocus)) {
      lightboxReturnFocus.focus({preventScroll:true});
    }
  };
  const openBox = (source) => {
    lightboxReturnFocus = document.activeElement;
    image.src = source.dataset.fullres || source.currentSrc || source.src;
    image.alt = source.alt || 'Project image';
    box.classList.add('is-open');
    box.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    viewer.scrollTo(0, 0);
    requestAnimationFrame(() => close.focus({preventScroll:true}));
  };

  sources.forEach(source => {
    source.setAttribute('tabindex', '0');
    source.setAttribute('role', 'button');
    source.setAttribute('aria-label', `${source.alt || 'Project image'} — open full resolution`);
    source.addEventListener('click', () => openBox(source));
    source.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openBox(source); }
    });
  });
  close.addEventListener('click', closeBox);
  box.addEventListener('click', e => { if (e.target === box) closeBox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && box.classList.contains('is-open')) closeBox(); });
})();
