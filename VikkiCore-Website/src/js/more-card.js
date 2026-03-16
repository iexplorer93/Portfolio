const overlay = document.querySelector('.card-overlay');
const closeBtn = document.querySelector('.card-close');
const bg = document.querySelector('.card-overlay__bg');

const baseCard = document.querySelector('.base-card');
const featuredCard = document.querySelector('.featured__card');

const buttons = document.querySelectorAll('.more-btn');

function openCard(type) {
  overlay.classList.add('active');
  document.body.classList.add('lock');

  baseCard.classList.remove('active');
  featuredCard.classList.remove('active');

  if (type === 'base') {
    baseCard.classList.add('active');
  }

  if (type === 'featured') {
    featuredCard.classList.add('active');
  }

  overlay.scrollTo({ top: 0 });
}

function closeCard() {
  overlay.classList.remove('active');
  document.body.classList.remove('lock');

  baseCard.classList.remove('active');
  featuredCard.classList.remove('active');
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    openCard(btn.dataset.card);
  });
});

closeBtn.addEventListener('click', closeCard);
overlay.addEventListener('click', closeCard);

baseCard.addEventListener('click', e => e.stopPropagation());
featuredCard.addEventListener('click', e => e.stopPropagation());


let startY = 0;
let currentY = 0;

overlay.addEventListener('touchstart', e => {
  startY = e.touches[0].clientY;
}, { passive: true });

overlay.addEventListener('touchmove', e => {
  currentY = e.touches[0].clientY;
}, { passive: true });

overlay.addEventListener('touchend', () => {
  const diff = currentY - startY;

  // ПРОВЕРКА: 
  // 1. Свайп больше 80px (diff > 80)
  // 2. Оверлей прокручен в самый верх (overlay.scrollTop <= 0)
  // 3. currentY не 0 (чтобы не срабатывало при обычном клике)
  if (diff > 80 && overlay.scrollTop <= 0 && currentY !== 0) {
    closeCard();
  }

  // Сбрасываем значения
  startY = 0;
  currentY = 0;
});
