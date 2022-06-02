const burgerBtn = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.nav__mobile')
const mobileNavLinks = document.querySelectorAll('.nav__mobile-link')
const year = document.querySelector('.footer-year')

const DOM = document.body

const classNames = {
  activeBurger: 'is-active',
  showNav: 'show-nav',
  stickyBody: 'sticky-body',
}

const handleNav = () => {
  burgerBtn.classList.toggle(classNames.activeBurger)
  mobileNav.classList.toggle(classNames.showNav)
  DOM.classList.toggle(classNames.stickyBody)

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', hideNav)
  })
}

const hideNav = () => {
  burgerBtn.classList.remove(classNames.activeBurger)
  mobileNav.classList.remove(classNames.showNav)
  DOM.classList.remove(classNames.stickyBody)
}

const handleYear = () => {
  const newYear = new Date().getFullYear()
  year.textContent = newYear
}

burgerBtn.addEventListener('click', handleNav)
handleYear()
