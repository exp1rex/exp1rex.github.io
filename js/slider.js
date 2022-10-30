const slides = document.querySelectorAll('.slider__item')

var _timer
var _left = 0
var sliderCount = 0

let sliderBtns = document.querySelector('.slider__btns')

for (var i = 0; i < slides.length; i++) {
    if (i === 0) {
        sliderBtns.innerHTML += `
            <div class="slider__btn selected"></div>
        `
    }
    else {
        sliderBtns.innerHTML += `
            <div class="slider__btn"></div>
        `
    }
}

const slidesBtns = document.querySelectorAll('.slider__btn')

function autoSlide() {
    _timer = setTimeout(nextSlide, 5000)
}

function nextSlide() {
    let sliderView = document.querySelector('.slider__view')
    _left = _left - 100
    slidesBtns[sliderCount].classList.remove('selected')
    sliderCount++
    if (_left <= -100 * slides.length) {
        _left = 0
        clearTimeout(_timer)
        sliderCount = 0
    }
    slidesBtns[sliderCount].classList.add('selected')
    sliderView.style.transform = `translate(${_left}vw, 0)`
    //console.log(sliderCount)
    autoSlide()
}

autoSlide()

// for (let i = 0; i < slidesBtns.length; i++) {
//     document.querySelectorAll('.slider__btn')[i].onclick = nextSlide
//     clearTimeout(_timer)
// }