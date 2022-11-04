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

var _left = 0;
var _timer = 0;


const slides = [
    {id: 1, img: "slide1.png", title: "Сведения об образовательной организации"},
    {id: 2, img: "slide2.png", title: "Абитуриенту"},
    {id: 3, img: "slide3.png", title: "Студенту"},
    {id: 4, img: "slide4.png", title: "Преподавателю"},
    {id: 5, img: "slide5.png", title: "Дистанционное обучение"},
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