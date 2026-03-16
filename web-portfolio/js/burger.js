const BURGER_OPENED_CLASSNAME = 'burger__open';
const BODY_FIXED_CLASSNAME_2 = 'body_fixed';
const BURGER_BTN_CLASSNAME = 'burger-btn--active';

const bodyNode_2 = document.querySelector('body');
const burgerNode = document.querySelector('.burger');
const burgerBtnNode = document.querySelector('.burger-btn');
const burgerContentNode = document.querySelector('.burger__content')
const burgerNav = document.querySelector(".burger__nav");

burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

burgerNav.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;
  closeBurger();
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode_2.classList.toggle(BODY_FIXED_CLASSNAME_2);
    burgerBtnNode.classList.toggle(BURGER_BTN_CLASSNAME);
}

function closeBurger() {
  burgerNode.classList.remove(BURGER_OPENED_CLASSNAME);
  burgerBtnNode.classList.remove(BURGER_BTN_CLASSNAME);
  bodyNode_2.classList.remove(BODY_FIXED_CLASSNAME_2);
}
