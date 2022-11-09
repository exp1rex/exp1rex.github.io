const sections = [
    {
        id: 1,
        img: `<i class="fa-solid fa-list"></i>`,
        title: `Основные сведения`,
        link: `#`
    },
    {
        id: 2,
        img: `<i class="fa-solid fa-shapes"></i>`,
        title: `Структура и органы управления`,
        link: `#`
    },
    {
        id: 3,
        img: `<i class="fa-solid fa-file"></i>`,
        title: `Документы`,
        link: `#`
    },
    {
        id: 4,
        img: `<i class="fa-solid fa-graduation-cap"></i>`,
        title: `Образование`,
        link: `#`
    },
    {
        id: 5,
        img: `<i class="fa-solid fa-school"></i>`,
        title: `Образовательные стандарты`,
        link: `#`
    },
    {
        id: 6,
        img: `<i class="fa-solid fa-users"></i>`,
        title: `Руководство. Педагогический состав`,
        link: `#`
    },
    {
        id: 7,
        img: `<i class="fa-solid fa-gift"></i>`,
        title: `Стипендии и меры поддержки обучающихся`,
        link: `#`
    },
    {
        id: 8,
        img: `<i class="fa-solid fa-handshake"></i>`,
        title: `Платные образовательные услуги`,
        link: `#`
    },
    {
        id: 9,
        img: `<i class="fa-solid fa-landmark"></i>`,
        title: `Финансово-хозяйственная деятельность`,
        link: `#`
    },
    {
        id: 10,
        img: `<i class="fa-solid fa-table"></i>`,
        title: `Вакантные места для приема (перевода) обучающихся`,
        link: `#`
    },
]

const blockView = document.querySelector('.blocks__view')

sections.forEach(section => {
    blockView.innerHTML += `
        <a class="blocks__item" href="${section.link}">
            <div class="blocks__item__cover">
                ${section.img}
            </div>
            <h3 class="blocks__item__link">${section.title}</h3>
        </a>
    `
})