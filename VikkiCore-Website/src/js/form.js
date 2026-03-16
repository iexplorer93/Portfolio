document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.cta__form');
  const contactSelect = document.getElementById('contactType');
  const courseSelect = document.getElementById('courseType');

  if (!form || !contactSelect || !courseSelect) {
    console.error('Form elements not found');
    return;
  }

  // 🔒 ЛОГИКА ОГРАНИЧЕНИЙ
  function syncSelects() {
    const contact = contactSelect.value;
    const course = courseSelect.value;

    // Если выбрана консультация — только WhatsApp
    if (course === 'consult') {
      contactSelect.value = 'whatsapp';
      contactSelect.querySelector('option[value="telegram"]').disabled = true;
    } else {
      contactSelect.querySelector('option[value="telegram"]').disabled = false;
    }

    // Если выбран Telegram — нельзя консультацию
    if (contact === 'telegram') {
      courseSelect.querySelector('option[value="consult"]').disabled = true;
      if (course === 'consult') {
        courseSelect.value = '';
      }
    } else {
      courseSelect.querySelector('option[value="consult"]').disabled = false;
    }
  }

  contactSelect.addEventListener('change', syncSelects);
  courseSelect.addEventListener('change', syncSelects);

  // 🚀 SUBMIT
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const contact = contactSelect.value;
    const course = courseSelect.value;

    if (!name || !contact || !course) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
  });
});
