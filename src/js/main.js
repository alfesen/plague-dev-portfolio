const burgerBtn = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.nav__mobile')
const mobileNavLinks = document.querySelectorAll('.nav__mobile-link')
const accordion = document.getElementsByClassName('label')
const year = document.querySelector('.footer-year')
const polish = document.querySelectorAll('.pl')
const english = document.querySelectorAll('.en')
const DOM = document.body
let selectedValue = 'en'

const classNames = {
  activeSkills: 'active',
  activeBurger: 'is-active',
  showNav: 'show-nav',
  stickyBody: 'sticky-body',
  activeChevron: 'active-chevron',
}

const updateLanguage = () => {
  const mobileLang = document.getElementById('mobile-lang')
  let mobileValue = mobileLang.value
  const desktopLang = document.getElementById('desktop-lang')
  let desktopValue = desktopLang.value
  const mainSkills = document.querySelector('.main-skills')
  const subsidarySkills = document.querySelector('.subsidary-skills')
  const ambitions = document.querySelector('.ambitions')

  if (document.body.clientWidth > 768 ) {
    mobileValue = desktopValue
  } else if (document.body.clientWidth <= 768) {
    desktopValue = mobileValue
  }

  if (desktopValue === 'en') {
    polish.forEach(item => {
      item.style.display = 'none'
    })

    english.forEach(item => {
      item.style.display = 'flex'
    })

    mainSkills.innerHTML = 'main technologies <i class="fas fa-chevron-down"></i>'
    subsidarySkills.innerHTML = 'subsidary skills <i class="fas fa-chevron-down"></i>'
    ambitions.innerHTML = 'closest ambitions <i class="fas fa-chevron-down"></i>'
  } else if (desktopValue === 'pl') {
    english.forEach(item => {
      item.style.display = 'none'
    })

    polish.forEach(item => {
      item.style.display = 'flex'
    })

    mainSkills.innerHTML = 'główne technologie <i class="fas fa-chevron-down"></i>'
    subsidarySkills.innerHTML = 'pomocne umiejętności <i class="fas fa-chevron-down"></i>'
    ambitions.innerHTML = 'najbliższe ambicje <i class="fas fa-chevron-down"></i>'
  } 

  hideNav()
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
  const newYear = new Date().getFullYear()
  year.textContent = newYear
}

burgerBtn.addEventListener('click', handleNav)
handleAccorderon()
handleYear()
