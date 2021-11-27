// Abrir e Fechar: Menu hamburguer

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// Fechar aou clicar em um item do menu

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// Mudar o header da pagina quando der scroll

function changeHeaderPage() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// Feedbacks slider de comentarios

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// Scrollreveal - Surgimento de itens da pagina

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duraction: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#feedbacks header, #feedbacks .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
)

// Voltar para o topo

const backToTopButton = document.querySelector('.back-to-top')
const animationClass = 'show'

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  const animationClass = 'show'

  if (scrollY >= 1000) {
    backToTopButton.classList.add(animationClass)
  } else {
    backToTopButton.classList.remove(animationClass)
  }
}

// Scroll Events

window.addEventListener('scroll', function () {
  backToTop(), changeHeaderPage()
})
