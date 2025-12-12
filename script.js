// Smooth scroll for internal anchor links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Lightweight form handler for demo purposes
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
    const message = document.createElement('div');
    message.className = 'toast';
    message.textContent = 'Thanks for reaching out! Our team will respond within one business day.';
    document.body.appendChild(message);
    setTimeout(() => message.remove(), 3200);
  });
}
