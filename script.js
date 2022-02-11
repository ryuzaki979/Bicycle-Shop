
const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector('.menu')
const header = document.querySelector('.header__container')

const cycleTypeBlue = document.querySelector('.cycle__type-blue')
const cycleTypeWhite = document.querySelector('.cycle__type-white')

hamburger.addEventListener('click',(e)=>{
    header.classList.toggle('deactive')
    hamburger.classList.toggle('active')
    menu.classList.toggle('active')
    if(menu.classList.contains("active")){
        gsap.to(".menu__links", { scale: 1, opacity: 1, duration: .5});
        gsap.to(".menu__modal-socials", { scale: 1, opacity: 1, duration: .5});
    }
    else if(!menu.classList.contains("active")){
        gsap.to(".menu__links", { scale: .8, opacity: 0, duration: .5});
        gsap.to(".menu__modal-socials", { scale: .8, opacity: 0, duration: .5});
    }
    
    
})

const interval = setInterval(displayHello, 5000);

function displayHello() {
    if(cycleTypeBlue.classList.contains('active')){
        cycleTypeBlue.classList.remove('active')
        cycleTypeWhite.classList.add('active')
        gsap.to(".hero__banner-white", { opacity: 1, duration: 1});
        gsap.to(".hero__banner-blue", { opacity: 0,duration: 1});
    }
    else if(!cycleTypeBlue.classList.contains('active')){
        cycleTypeBlue.classList.add('active')
        cycleTypeWhite.classList.remove('active')
        gsap.to(".hero__banner-blue", { opacity: 1, duration: 1});
        gsap.to(".hero__banner-white", { opacity: 0,duration: 1});
    }
}

