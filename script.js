const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const toggleButton = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');

if (toggleButton && nav) {
  toggleButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const form = document.querySelector('.contact-form');
const msg = document.querySelector('.form-msg');

if (form && msg) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    msg.textContent = 'Thanks — your brand-to-screen consultation request has been received.';
    form.reset();
  });
}
