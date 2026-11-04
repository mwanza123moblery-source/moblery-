/* Bright Future site enhancements */
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.id = nav.id || 'primary-navigation';
    nav.classList.add('site-nav');
    nav.dataset.open = 'false';

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'nav-toggle';
    toggle.setAttribute('aria-controls', nav.id);
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Menu';
    nav.prepend(toggle);

    const closeMenu = () => {
      nav.dataset.open = 'false';
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', () => {
      const isOpen = nav.dataset.open === 'true';
      nav.dataset.open = String(!isOpen);
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    window.matchMedia('(min-width: 601px)').addEventListener('change', closeMenu);
  }

  const year = new Date().getFullYear();
  document.querySelectorAll('footer').forEach((footer) => {
    footer.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = node.textContent.replace(/©\s*\d{4}/, '© ' + year);
      }
    });
  });
});
