const nav = document.querySelector('nav')
const navBtn = document.querySelector('.header__nav__btn')

navBtn.onclick = () => {
    nav.classList.toggle('active')
    navBtn.classList.toggle('active')
}