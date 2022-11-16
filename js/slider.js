// const slides = document.querySelectorAll('.slider__item')

// var _timer
// var _left = 0
// var sliderCount = 0

// let sliderBtns = document.querySelector('.slider__btns')

// for (var i = 0; i < slides.length; i++) {
//     if (i === 0) {
//         sliderBtns.innerHTML += `
//             <div class="slider__btn selected"></div>
//         `
//     }
//     else {
//         sliderBtns.innerHTML += `
//             <div class="slider__btn"></div>
//         `
//     }
// }

// const slidesBtns = document.querySelectorAll('.slider__btn')

// function autoSlide() {
//     _timer = setTimeout(nextSlide, 5000)
// }

// function nextSlide() {
//     let sliderView = document.querySelector('.slider__view')
//     _left = _left - 100
//     slidesBtns[sliderCount].classList.remove('selected')
//     sliderCount++
//     if (_left <= -100 * slides.length) {
//         _left = 0
//         clearTimeout(_timer)
//         sliderCount = 0
//     }
//     slidesBtns[sliderCount].classList.add('selected')
//     sliderView.style.transform = `translate(${_left}vw, 0)`
//     //console.log(sliderCount)
//     autoSlide()
// }

// autoSlide()

// // for (let i = 0; i < slidesBtns.length; i++) {
// //     document.querySelectorAll('.slider__btn')[i].onclick = nextSlide
// //     clearTimeout(_timer)
// // }

var _left = 0
var _timer = 0
var currentSlide = 1


const slides = [
    {id: 1, img: "slide1.png", title: "08.02.01 Строительство и эксплуатация зданий и сооружений"},
    {id: 2, img: "slide2.png", title: "08.02.11 Управление, эксплуатация и обслуживание многоквартирного дома"},
    {id: 3, img: "slide3.png", title: "09.02.06 Сетевое и системное администрирование"},
    {id: 4, img: "slide4.png", title: "09.02.07 Информационные системы и программирование"},
    {id: 5, img: "slide5.png", title: "13.02.07 Электроснабжение"},
    {id: 6, img: "slide6.png", title: "15.01.05 Сварщик ручной и частично механизированной сварки (наплавки)"},
    {id: 7, img: "slide7.png", title: "15.02.12 Монтаж, техническое обслуживание и ремонт промышленного оборудования"},
    {id: 8, img: "slide8.png", title: "23.02.07 Техническое обслуживание и ремонт двигателей, систем и агрегатов автомобилей"},
    {id: 9, img: "slide9.png", title: "35.02.04 Технология комплексной переработки древесины"},
    {id: 10, img: "slide10.png", title: "44.02.01 Дошкольное образование"},
]

const sliderView = document.querySelector('.slider__view')
const sliderBtns = document.querySelector('.slider__btns')

slides.forEach(slide => {
    sliderView.innerHTML += `
        <div class="slider__item">
            <img src="img/slider/${slide.img}" alt="${slide.id}" class="slider__img">
            <div class="slider__block">
                <h1>${slide.title}</h1>
            </div>
        </div>
    `
    if (slides.length > 1) {
        if (slide.id === 1) {
            sliderBtns.innerHTML += `
                <div class="slider__btn selected" onclick="toSlide(${slide.id})"></div>
            `
        }
        else {
            sliderBtns.innerHTML += `
                <div class="slider__btn" onclick="toSlide(${slide.id})"></div>
            `
        }
    }    
})

function toSlide(n) {
    let slideBtns = document.querySelectorAll('.slider__btn')
    currentSlide = n
    for (var i = 0; i < slideBtns.length; i++) {
        if (i == n - 1) {
            slideBtns[i].classList.add('selected')
        }
        else {
            slideBtns[i].classList.remove('selected')
        }
    }
    // console.log(n)

    _left = -100 * (n - 1)
    sliderView.style.transform = `translate(${_left}vw, 0)`
}

function prevSlide() {
    if (currentSlide > 1) {
        toSlide(currentSlide - 1)
    }
    else {
        toSlide(slides.length)
    }
}

function nextSlide() {
    if (currentSlide < slides.length) {
        toSlide(currentSlide + 1)
    }
    else {
        toSlide(1)
    }
}