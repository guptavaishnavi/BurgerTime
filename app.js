const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')
AOS.init();

burger.addEventListener('click', () => {
    
    burger.classList.toggle('toggle')
    navLinks.classList.toggle('show-nav')
})

const tl = gsap.timeline({defaults:{ease: 'power4'}})
const tl2 = gsap.timeline({ default: { duration:1.5, delay:1}})

tl.to('.navbar', {opacity:0, duration:0})
tl.to('.text', {y:'-10%', duration: 2, delay:1})
tl.to('.intro', {y:'-100%', duration:2,delay:2})
tl.to('.navbar', {opacity:1, duration:2})
tl.to('.hero-heading', {opacity:'100%', duration:1})
tl.from('.hero-img', {y:"100%", opacity:0, duration:2.5})
tl.to('.arrow', { opacity: '100%', y:5, repeat:-1, yoyo:true, duration:1})

tl2.to('.hero-img img', {y:15, repeat:-1, yoyo:true, duration:2})
