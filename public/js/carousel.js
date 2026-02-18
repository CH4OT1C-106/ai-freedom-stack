document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.featured-carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.featured-card');
  const dots = carousel.querySelectorAll('.carousel-dot');
  let current = 0;
  let interval;
  const DELAY = 6000;

  function show(index) {
    slides.forEach((s, i) => {
      s.style.opacity = '0';
      s.style.position = 'absolute';
      s.style.pointerEvents = 'none';
      dots[i]?.classList.remove('active');
    });
    slides[index].style.opacity = '1';
    slides[index].style.position = 'relative';
    slides[index].style.pointerEvents = 'auto';
    dots[index]?.classList.add('active');
    current = index;
  }

  function next() {
    show((current + 1) % slides.length);
  }

  function startAuto() {
    interval = setInterval(next, DELAY);
  }

  function resetAuto() {
    clearInterval(interval);
    startAuto();
  }

  // Init
  show(0);
  startAuto();

  // Dot clicks
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      show(i);
      resetAuto();
    });
  });

  // Pause on hover
  carousel.addEventListener('mouseenter', () => clearInterval(interval));
  carousel.addEventListener('mouseleave', startAuto);
});
