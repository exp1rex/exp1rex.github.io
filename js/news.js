const news = ""

const newsView = document.querySelector('.news__view')
const newsPagination = document.querySelector('.news__pagination')

// Пагинация
let newsOnPage = 2
let currentNote = 0
let paginationBtnCount = news.length / newsOnPage

for (var i = 0; i < paginationBtnCount; i++) {
    if (i === 0) {
        newsPagination.innerHTML += `
            <a class="news__pagination__item active">${i + 1}</a>
        ` 
    }
    else {
        newsPagination.innerHTML += `
            <a class="news__pagination__item">${i + 1}</a>
        `
    }
}

const paginationItems = document.querySelectorAll('.news__pagination__item')

news.forEach(newsItem => {
    if (currentNote < newsOnPage) {
        newsView.innerHTML += `
            <div class="news__item">
                <div class="news__item__cover">
                    <img src="img/news/${newsItem.img}" alt="${newsItem.id}" class="news__item__img">
                </div>
                <div class="news__item__content">
                    <h3 class="news__item__content__title">${newsItem.title}</h3>
                    <span class="news__item__content__date">${newsItem.date}</span>
                    <p class="news__item__content__desc">
                        ${newsItem.desc}
                    </p>
                    <a href="#" class="news__item__btn">
                        Подробнее
                    </a>
                </div>
            </div>
        `
    }
    currentNote++
})

paginationItems.forEach(item => {
    item.addEventListener('click', () => {
        

        let pageNum = item.innerHTML
        let startSlice = (pageNum - 1) * newsOnPage
        let endSlice = startSlice + newsOnPage
        let notes = news.slice(startSlice, endSlice)

        for (var i = 0; i < paginationItems.length; i++) {
            if (pageNum - 1 === i) {
                paginationItems[i].classList.add('active')
            }
            else {
                paginationItems[i].classList.remove('active')
            }
        }

        // console.log(notes)
        newsView.innerHTML = ``
        notes.forEach(note => {
            newsView.innerHTML += `
                <div class="news__item">
                    <div class="news__item__cover">
                        <img src="img/news/${note.img}" alt="${note.id}" class="news__item__img">
                    </div>
                    <div class="news__item__content">
                        <h3 class="news__item__content__title">${note.title}</h3>
                        <span class="news__item__content__date">${note.date}</span>
                        <p class="news__item__content__desc">
                            ${note.desc}
                        </p>
                        <a href="#" class="news__item__btn">
                            Подробнее
                        </a>
                    </div>
                </div>
            `
        })
    })
})