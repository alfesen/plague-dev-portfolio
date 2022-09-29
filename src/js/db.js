// selectors
const DOM = document.body

const burgerBtn = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')
const accordion = document.getElementsByClassName('label')

const aboutLabel = document.getElementById('about-label')
const skillsLabel = document.getElementById('main-skills')
const contactLabel = document.getElementById('contact-label')

const contactTitles = document.querySelectorAll('.contact__title')

const mainSkills = document.querySelector('.main-skills')
const subsidiarySkills = document.querySelector('.subsidiary-skills')
const ambitions = document.querySelector('.ambitions')

const selectLang = document.querySelector('.nav__lang-select')
const year = document.querySelector('.footer-year')

const en = selectLang.value === 'en'

// collections of data

const portfolioData = {
  list: [
    {
      title: 'Modern Aesthetics',
      link: 'https://modern-aesthetics-24e49.web.app/home',
      image: './dist/img/modern-aesthetics.jpg',
      description: en
        ? 'The most ambitious project to this point, completely built in React, with a usage of Redux Toolkit, React Router, Material UI and Firebase. Fully functional blog with a protected administrative dashboard.'
        : 'Tutaj znajdzie się link do strony w pełni zbudowanej na bazie Bootstrapa.',
    },
    {
      title: en ? 'Flexbox Project' : 'Projekt oparty o Flexboxa',
      link: '#',
      image: './dist/img/flex-project.jpg',
      description: en
        ? 'The page you are on now is fully built on the basis of Flexbox.Both original animations and borrowed packages were used (GlideJS for portfolio carousel and hamburger button animation, borrowed @jonsuh. I put special emphasis on SEO and user-friendliness.'
        : 'Strona, na której przebywasz teraz, jest w pełni zbudowana na bazie Flexboxa. Użyte zostały tak autorskie animacje, jak i zapożyczone paczki (GlideJS dla karuzeli porfolio oraz animacja przycisku hamburgerowego, pożyczona @jonsuh. Szczególny zaś nacisk kładłem na SEO oraz wygodę użytkowania.',
    },
    {
      title: 'PhilosophyBay',
      link: 'https://alfesen.github.io/pdp-philosophybay/',
      image: './dist/img/grid-project.jpg',
      description: en
        ? 'It is a simple yet creative GRID based project. On this page I included quotes from famous philosophers, from Plato to Heidegger, that highly inspire me not only at work, but also in my everyday life.'
        : 'Tutaj znajdzie się link do strony opartej o GRID',
    },
    {
      title: en ? 'Blog' : 'Blog',
      link: '#',
      image: './dist/img/blog-project.jpg',
      description: en
        ? 'Here you will find a link to the blog page, the main component of  which will be JavaScript code'
        : 'Tutaj znajdzie się link do strony bloga, której główną częścią składową będzie kod JavaScript.',
    },
  ],
  buttonText: en ? 'Download CV' : 'Pobierz CV',
  cvLink: en
    ? 'https://drive.google.com/file/d/1g4SlSmF5UKXRc5fouecUs8jbgLQQF6cn/view?usp=sharing'
    : 'https://drive.google.com/file/d/1pm6om_GUmZgGixuhHmI4ICHgamCGxZ5l/view?usp=sharing',
}

const aboutText = {
  main: en
    ? 'Self-taught programmer looking for the first professional experiences in the IT industry. I am passionate about creating websites and about web-related technologies. I would like to develop further the skills I have learned so far. I have been learning programming on my own for over a year, during which I have mastered listed beside technologies and skills. I am driven by my constant willingness to learn, I own an ability to focus deeply and a great attention to detail.'
    : 'Programista, samouk szukający pierwszych doświadczeń zawodowych w branży IT. Pasjonuję się tworzeniem stron internetowych i związanymi z tym technologiami. Pragnę dalej rozwijać dotychczas poznane, oraz nowe umiejętności. Programowania uczę się samodzielnie od ponad roku, w ciągu którego opanowałem wymienione obok technologie. Cechuje mnie ciągła chęć nauki, umiejętność głębokiego skupienia i uważność na detale.',
  subText: en
    ? 'See my latest React project - Modern Aesthetics'
    : 'Zobacz mój ostatni projekt (React) - Modern Aesthetics',
}

const links = {
  skills: en ? 'skills' : 'umiejętności',
  about: en ? 'about' : 'o nas',
  portfolio: en ? 'portfolio' : 'portfolio',
  contact: en ? 'contact' : 'kontakt',
}
