document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.cta__form');
  const modal = document.getElementById('ctaModal');
  const overlay = modal.querySelector('.cta-modal__overlay');
  const closeBtn = modal.querySelector('.cta-modal__close');
  const input = document.getElementById('contactInput');
  const submitBtn = modal.querySelector('.cta-modal__btn');
  const contactSelect = document.getElementById('contactType');

  let formData = {};

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const contact = contactSelect.value;
    const course = document.getElementById('courseType').value;

    if (!name || !contact || !course) return;

    formData = { name, contact, course };

    // 🔁 настройка поля
    if (contact === 'telegram') {
      input.placeholder = '@username';
      input.type = 'text';
    } else {
      input.placeholder = '+7 ___ ___ __ __';
      input.type = 'tel';
    }

    modal.classList.add('active');
    input.value = '';
    input.focus();
  });

  function closeModal() {
    modal.classList.remove('active');
  }

  overlay.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);

  submitBtn.addEventListener('click', () => {
    if (!input.value.trim()) return;

    formData.contactValue = input.value.trim();

    console.log('ЗАЯВКА:', formData);

    alert('Заявка отправлена!');
    closeModal();
    form.reset();
  });
});
