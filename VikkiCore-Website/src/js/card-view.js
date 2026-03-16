const cards = document.querySelectorAll('.pricing__card, .pricing__card--featured');

// Проверяем, поддерживает ли устройство наведение (мышь)
const isHoverable = window.matchMedia('(hover: hover)').matches;

if (isHoverable) {
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / centerX;
      const moveY = (y - centerY) / centerY;

      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);

      card.style.transform = `
        perspective(1200px)
        translateY(-6px)
        scale(1.02)
        rotateX(${ -moveY * 3 }deg)
        rotateY(${ moveX * 3 }deg)
      `;

      card.classList.add('is-active');
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `
        perspective(1200px)
        translateY(0)
        scale(1)
        rotateX(0)
        rotateY(0)
      `;
      card.classList.remove('is-active');
    });
  });
}