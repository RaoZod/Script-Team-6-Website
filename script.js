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

const form = document.getElementById('contactForm');
const msg = document.querySelector('.form-msg');

if (form && msg) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    msg.textContent = 'Submitting...';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      msg.textContent = 'Thanks — we received your details. Our team will contact you shortly.';
      form.reset();
    } catch (error) {
      msg.textContent = 'Something went wrong submitting the form. Please use the Calendly link below.';
    }
  });
}

const proofCards = Array.from(document.querySelectorAll('.proof-card'));
const prevProof = document.getElementById('prevProof');
const nextProof = document.getElementById('nextProof');
const proofTrack = document.getElementById('proofTrack');
let activeProof = 0;

function syncProofTrackHeight() {
  if (!proofTrack || !proofCards.length) return;
  const activeCard = proofCards[activeProof];
  if (!activeCard) return;
  proofTrack.style.height = `${activeCard.scrollHeight}px`;
}

function showProof(index) {
  proofCards.forEach((card, idx) => {
    card.classList.toggle('active', idx === index);
  });
  syncProofTrackHeight();
}

if (proofCards.length && prevProof && nextProof) {
  prevProof.addEventListener('click', () => {
    activeProof = (activeProof - 1 + proofCards.length) % proofCards.length;
    showProof(activeProof);
  });

  nextProof.addEventListener('click', () => {
    activeProof = (activeProof + 1) % proofCards.length;
    showProof(activeProof);
  });

  let startX = 0;
  if (proofTrack) {
    proofTrack.addEventListener('touchstart', (event) => {
      startX = event.changedTouches[0].clientX;
    });

    proofTrack.addEventListener('touchend', (event) => {
      const endX = event.changedTouches[0].clientX;
      const delta = endX - startX;
      if (Math.abs(delta) < 40) return;
      if (delta > 0) {
        activeProof = (activeProof - 1 + proofCards.length) % proofCards.length;
      } else {
        activeProof = (activeProof + 1) % proofCards.length;
      }
      showProof(activeProof);
    });
  }

  syncProofTrackHeight();
  window.addEventListener('resize', syncProofTrackHeight);
}

const revealNodes = document.querySelectorAll('.reveal');
if (revealNodes.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealNodes.forEach((node) => observer.observe(node));
}
