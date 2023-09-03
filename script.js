const menuBtn=document.querySelector('.menuBtn')
const navlinks=document.querySelector('.nav-links')

menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('active')
})