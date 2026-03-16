document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger')
  const menuOverlay = document.querySelector('.menu-overlay')
  const links = document.querySelectorAll('.mobile-menu a')

  if (!burger || !menuOverlay) {
    console.error('Burger or overlay not found')
    return
  }

  burger.addEventListener('click', () => {
    const isOpen = burger.classList.toggle('active')
    menuOverlay.classList.toggle('active')
    document.body.classList.toggle('lock')
    burger.setAttribute('aria-expanded', String(isOpen))
    menuOverlay.setAttribute('aria-hidden', String(!isOpen))
    if (isOpen) {
      const firstLink = menuOverlay.querySelector('.mobile-menu a')
      if (firstLink) firstLink.focus()
    } else {
      burger.focus()
    }
  })

  menuOverlay.addEventListener('click', e => {
    if (!e.target.closest('.mobile-menu')) closeMenu()
  })

  links.forEach(link => {
    link.addEventListener('click', closeMenu)
  })

  function closeMenu() {
    burger.classList.remove('active')
    menuOverlay.classList.remove('active')
    document.body.classList.remove('lock')
    burger.setAttribute('aria-expanded', 'false')
    menuOverlay.setAttribute('aria-hidden', 'true')
    burger.focus()
  }

  let startY = 0

  menuOverlay.addEventListener('touchstart', e => {
    startY = e.touches[0].clientY
  })

  menuOverlay.addEventListener('touchend', e => {
    const endY = e.changedTouches[0].clientY
    if (endY - startY > 80) closeMenu()
  })

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && burger.classList.contains('active')) {
      closeMenu()
    }
  })

})
