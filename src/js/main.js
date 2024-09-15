const nav = document.querySelector('#primary-navigation');
const navToggle = document.querySelector('#mobile-nav-toggle');
const mainContent = document.querySelector('#main-content');
const navLinks = document.querySelectorAll('#primary-navigation li');

navToggle.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible');
  if (visibility === 'false') {
    nav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    mainContent.classList.add('blur-bg');
  } else {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    mainContent.classList.remove('blur-bg');
  }
});

document.addEventListener('click', (e) => {
  const isClickInsideNav = nav.contains(e.target);
  const isClickInsideToggle = navToggle.contains(e.target);

  // Jeśli kliknięto poza nawigacją i poza przyciskiem toggle, zamknij menu
  if (!isClickInsideNav && !isClickInsideToggle) {
    if (nav.getAttribute('data-visible') === 'true') {
      nav.setAttribute('data-visible', false);
      navToggle.setAttribute('aria-expanded', false);
      mainContent.classList.remove('blur-bg');
    }
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    mainContent.classList.remove('blur-bg');
  });
});
