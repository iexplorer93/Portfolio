document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Навигация при скролле
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    // 2. Мобильное меню (Гамбургер, Крестик и Блокировка скролла)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const body = document.body;

    // Функция для переключения меню
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
        body.classList.toggle('no-scroll');
    }

    hamburger.addEventListener('click', toggleMenu);

    // Закрытие меню при клике на любую ссылку внутри
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            body.classList.remove('no-scroll');
        });
    });

    // 3. Scroll Reveal (анимация появления блоков при прокрутке)
    const revealOptions = {
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 4. Анимация полосок навыков (Skills)
    const skillOptions = {
        threshold: 0.3
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('lit');
                const fill = entry.target.querySelector('.skill-fill');
                if (fill) {
                    // Используем значение из data-w, которое мы прописали в HTML
                    fill.style.transform = `scaleX(${fill.dataset.w})`;
                }
            }
        });
    }, skillOptions);

    document.querySelectorAll('.skill-item').forEach(el => skillObserver.observe(el));

    // 5. Логика для карточек проектов (клик по всей карточке)
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Если клик был по самой ссылке "Live Demo", не мешаем стандартному переходу
            if (e.target.closest('.project-link')) return;

            const link = card.querySelector('.project-link');
            if (link) {
                window.open(link.href, '_blank', 'noopener');
            }
        });
    });
});