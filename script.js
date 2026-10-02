// Dirty Jerm's — intentionally simple. The personality is in the page, not a pile of unnecessary JavaScript.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target || link.getAttribute('href') === '#') return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
