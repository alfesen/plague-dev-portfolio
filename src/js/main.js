const burgerBtn = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.nav__mobile')
const mobileNavLinks = document.querySelectorAll('.nav__mobile-link')
const accordion = document.getElementsByClassName('label')
const year = document.querySelector('.footer-year')

const DOM = document.body

const classNames = {
  activeSkills: 'active',
  activeBurger: 'is-active',
  showNav: 'show-nav',
  stickyBody: 'sticky-body',
  activeChevron: 'active-chevron',
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

const handleAccorderon = () => {
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
      const boxes = this.nextElementSibling
      const chevron = this.children[0]
      boxes.classList.toggle(classNames.activeSkills)
      chevron.classList.toggle(classNames.activeChevron)
    })
  }
}

new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  focusAt: 'center',
  perView: 3,
  breakpoints: {
    992: {
      perView: 2,
    },
    768: {
      perView: 1,
    },
  },
}).mount()

const handleYear = () => {
  const newYear = new Date().getFullYear();
  year.textContent = newYear;
}

burgerBtn.addEventListener('click', handleNav)
handleAccorderon()
handleYear();