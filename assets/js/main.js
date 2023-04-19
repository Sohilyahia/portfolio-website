/*=============== SHOW MENU ===============*/
const nav_toggle = document.getElementById('nav_toggle')
const nav_close = document.getElementById('nav_close')
const nav_menu = document.getElementById('nav_menu')

if(nav_toggle){
    nav_toggle.addEventListener('click',()=>{
        nav_menu.classList.add('show_menu')
    })
}
if(nav_close){
    nav_close.addEventListener('click',()=>{
        nav_menu.classList.remove('show_menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const nav_link = document.querySelectorAll('.nav_item')

nav_link.forEach(link => {
    link.addEventListener('click',()=>{
        nav_menu.classList.remove('show_menu')
    })
})

/*=============== SWIPER PROJECTS ===============*/
let swiper = new Swiper(".projects_container", {
    loop:true,
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: -30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: -70,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact_form')
const contactName = document.getElementById('contact_name')
const contactEmail = document.getElementById('contact_email')
const contactSubject = document.getElementById('contact_subject')
const contactMassage = document.getElementById('contact_massage')

const sendEmail = (e) =>{
  e.preventDefault()

  if (contactName.value === '' || contactEmail.value === '' || contactSubject.value === '') {
    // Add and remove color
    contactMassage.classList.remove('blue')
    contactMassage.classList.add('red')
    // Show message	
    contactMassage.textContent = 'Write all the input fields 📝'
    // Remove message after five seconds
    setTimeout(()=>{
      contactMassage.textContent = ''
    }, 5000)
  }else{
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm( 'service_wo83wps', 'contact_form11', '#contact_form', 'arIaFeNc8iuAYgPOb' )
      .then(()=>{
        // Show message and remove color
        contactMassage.classList.add('blue')
        contactMassage.textContent = 'Message sent ✅'
        // Remove message after five seconds
        setTimeout(()=>{
          contactMassage.textContent = ''
         
        }, 5000)    
      }, (error)=>{
        alert('OOPS! SOMETHING HAS FAILED...', error)
      })
          contactName.value = ''
          contactEmail.value = ''
          contactSubject.value = ''
  }
}

contactForm.addEventListener('submit', sendEmail)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
//console.log(sections)
const scrollActive = () =>{
  const scrollY = window.pageYOffset;

  sections.forEach((section)=>{
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 200;
    const sectionId = section.getAttribute('id');
    const sectionClass = document.querySelector(".nav_menu a[href*=" + sectionId + ']');
   
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active_link')
    } else{
      sectionClass.classList.remove('active_link')
    }
  })
}

window.addEventListener('scroll', scrollActive)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = document.getElementById('scroll_up')
const scrolltoUp = ()=>{
  const scrollY = window.scrollY;
  if (scrollY >= 1401) {
    scrollup.classList.add('Show_ScrollUp')
  }else{
    scrollup.classList.remove('Show_ScrollUp')
  }
}

scrollup.onclick = ()=>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

window.addEventListener('scroll', scrolltoUp)
/*=============== DARK LIGHT THEME ===============*/ 
const thems = document.getElementById('thems');
const body = document.body;

thems.addEventListener('click', ()=>{
  body.classList.toggle('light-theme')
  thems.classList.toggle("ri-sun-line")

  let mode;
  if (body.classList.contains('light-theme')) {
    mode = 'light'
  }else{
    mode = 'dark'
  }

  localStorage.setItem('them', mode)
})

let getThem = localStorage.getItem('them')

if (getThem === 'light') {
  body.classList = 'light-theme'
}
/*=============== CHANGE BACKGROUND HEADER ===============*/
const changeBg = ()=>{
  const header = document.getElementById('header')
  if (this.scrollY >= 50) {
    header.classList.add('bg_header')
  }else{
    header.classList.remove('bg_header')
  }
}
window.addEventListener('scroll' , changeBg)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  // reset: true,
  origin: 'top',
  distance: '60px',
  delay: 400,
  duration: 2500
})

sr.reveal(`.home_data, .projects_container, .footer_container, .section__title`)
sr.reveal(`.home_info div`, {origin: 'bottom', delay: 600, interval: 100})
sr.reveal(`.skills_info .skills_data:nth-child(1)`, {origin: 'left', delay: 600, interval: 200, distance: '100px',reset: true})
sr.reveal(`.skills_info .skills_data:nth-child(2)`, {origin: 'left', delay: 600, interval: 200, distance: '60px',reset: true})
sr.reveal(`.skills_info .skills_data:nth-child(3)`, {origin: 'top', delay: 600, interval: 200,reset: true})
sr.reveal(`.skills_info .skills_data:nth-child(4)`, {origin: 'right', delay: 600, interval: 200, distance: '60px',reset: true})
sr.reveal(`.skills_info .skills_data:nth-child(5)`, {origin: 'right', delay: 600, interval: 200, distance: '100px',reset: true})

sr.reveal(`.contact_container .contact_content:nth-child(1)`, {origin: 'left', delay: 600, interval: 200, distance: '100px',reset: true})
sr.reveal(`.contact_container .contact_content:nth-child(2)`, {origin: 'right', delay: 600, interval: 200, distance: '100px',reset: true})
