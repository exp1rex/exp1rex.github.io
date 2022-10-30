const upBtn = document.querySelector('.up')

document.addEventListener('scroll', () => {
    var value = window.scrollY
    // console.log(value)

    if (value >= 700) {
        upBtn.classList.add('show')
    }
    else {
        upBtn.classList.remove('show')
    }
})

upBtn.onclick = () => {
    window.scrollTo(0, 0)
}