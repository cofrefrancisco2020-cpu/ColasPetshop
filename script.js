const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-nav');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
  mobileMenu.hidden = true;
  document.body.classList.remove('menu-open');
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  mobileMenu.hidden = !open;
  document.body.classList.toggle('menu-open', open);
});

mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 850) closeMenu(); });

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => header.classList.toggle('is-stuck', window.scrollY > 30), { passive: true });

const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
  items.forEach(item => observer.observe(item));
} else {
  items.forEach(item => item.classList.add('is-visible'));
}

document.querySelector('#year').textContent = new Date().getFullYear();
