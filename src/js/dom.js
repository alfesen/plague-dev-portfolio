aboutLabel.textContent = en ? 'About' : 'O nas'

skillsLabel.textContent = en
  ? 'Skills and technologies'
  : 'Umiejętności i technologie'

contactLabel.textContent = en ? 'Contact' : 'Kontakt'

mainSkills.innerHTML = en
  ? 'main technologies <i class="fas fa-chevron-down"></i>'
  : 'główne technologie <i class="fas fa-chevron-down"></i>'
subsidiarySkills.innerHTML = en
  ? 'subsidary skills <i class="fas fa-chevron-down"></i>'
  : 'pomocne umiejętności <i class="fas fa-chevron-down"></i>'
ambitions.innerHTML = en
  ? 'closest ambitions <i class="fas fa-chevron-down"></i>'
  : 'najbliższe ambicje <i class="fas fa-chevron-down"></i>'

contactTitles[0].textContent = en ? 'Send me an email' : 'Napisz do mnie email'
contactTitles[1].textContent = en ? 'Call me' : 'Zadzwoń do mnie'
contactTitles[2].textContent = en
  ? 'Take a look on my other projects'
  : 'Zobacz inne projekty'

const navTemplate = Handlebars.compile(
  document.getElementById('nav-template').innerHTML
)
const navHTML = navTemplate(links)
document.getElementById('nav-links').innerHTML = navHTML
const aboutTemplate = Handlebars.compile(
  document.getElementById('about-template').innerHTML
)
const aboutHTML = aboutTemplate(aboutText)
document.getElementById('about-text').innerHTML = aboutHTML
const portfolioTemplate = Handlebars.compile(
  document.getElementById('portfolio-template').innerHTML
)
const portfolioHTML = portfolioTemplate(portfolioData)
document.getElementById('portfolio-wrapper').innerHTML = portfolioHTML
