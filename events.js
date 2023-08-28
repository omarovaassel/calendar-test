moment.locale('ru'); // Fullcalendar Russian Version

let eventsArray = [
    {
        id: 1,
        title: 'Стало известно, почему некоторые классы антибиотиков снижают слух',
        start: '2023-08-01T16:00:00',
        img: "events/event__image__14.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Презентация",
        className: 'presentation',
        color: "#349EFF",
        backgroundColor: "#349EFF",
        display: "auto"
    },
    {
        id: 2,
        title: 'Не только алкоголь: какие продукты и привычки влияют на здоровье печени',
        start: '2023-08-25T16:00:00',
        img: "events/event__image__1.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Презентация",
        className: 'presentation',
        color: "#349EFF",
        backgroundColor: "#349EFF",
        display: "auto"
    },
    {
        id: 3,
        title: 'Одно лечим, другое калечим: как и какие лекарства могут повредить печени',
        start: '2023-08-26T17:00:00',
        img: "events/event__image__2.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Вебинар",
        className: 'webinar',
        color: "#FFAE34",
        backgroundColor: "#FFAE34",
        display: "list-item"
    },
    {
        id: 4,
        title: 'Топ вредных привычек, которые пагубно влияют на фигуру',
        start: '2023-08-27T16:00:00',
        img: "events/event__image__3.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Презентация",
        color: "#349EFF",
        backgroundColor: "#349EFF",
        display: "list-item"
    },
    {
        id: 5,
        title: 'Опасная красота: о чём нужно знать, прежде чем делать татуировку',
        start: '2023-08-28T16:00:00',
        img: "events/event__image__4.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Вебинар",
        color: "#FFAE34",
        backgroundColor: "#FFAE34",
        display: "list-item"
    },
    {
        id: 6,
        title: 'Остановить пандемию: какие препараты могут спасти от коронавируса',
        start: '2023-08-29T16:00:00',
        img: "events/event__image__5.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Презентация",
        color: "#349EFF",
        backgroundColor: "#349EFF",
        display: "list-item"
    },
    {
        id: 7,
        title: 'Новое исследование: 98% случаев оспы обезьян связаны с незащищенным сексом между мужчинами',
        start: '2023-08-30T16:00:00',
        img: "events/event__image__6.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Презентация",
        color: "#349EFF",
        backgroundColor: "#349EFF",
        display: "list-item"
    },
    {
        id: 8,
        title: 'Скрытое ожирение: как лишний вес сказывается на печени?',
        start: '2023-09-01T16:00:00',
        img: "events/event__image__7.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Презентация",
        color: "#349EFF",
        backgroundColor: "#349EFF",
        display: "list-item"
    },
    {
        id: 9,
        title: 'Успешные путешествия для пациентов с гемофилией А: советы и рекомендации',
        start: '2023-09-05T16:00:00',
        img: "events/event__image__8.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Вебинар",
        color: "#FFAE34",
        backgroundColor: "#FFAE34",
        display: "list-item"
    },
    {
        id: 10,
        title: 'Психологическая поддержка и улучшение качества жизни пациентов с тяжелой гемофилией А',
        start: '2023-09-10T16:00:00',
        img: "events/event__image__9.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Презентация",
        color: "#349EFF",
        backgroundColor: "#349EFF",
        display: "list-item"
    },
    {
        id: 11,
        title: 'Поражения суставов у пациентов с тяжелой гемофилией А: причины и профилактика',
        start: '2023-09-10T16:00:00',
        img: "events/event__image__10.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Презентация",
        color: "#349EFF",
        backgroundColor: "#349EFF",
        display: "list-item"
    },
    {
        id: 12,
        title: 'Утро вечера не мудренее: в какие часы тренировки наиболее продуктивны?',
        start: '2023-09-24T16:00:00',
        img: "events/event__image__11.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Вебинар",
        color: "#FFAE34",
        backgroundColor: "#FFAE34",
        display: "list-item"
    },
    {
        id: 13,
        title: 'Деликатная проблема: гиперактивный мочевой пузырь, и что с ним делать?',
        start: '2023-09-25T16:00:00',
        img: "events/event__image__12.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Вебинар",
        color: "#FFAE34",
        textColor: "white",
        backgroundColor: "#FFAE34",
        display: "list-item"
    },
    {
        id: 14,
        title: 'Нобелевская премия по медицине 2022: за какое открытие её присудили в этом году?',
        start: '2023-09-26T16:00:00',
        img: "events/event__image__13.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Презентация",
        color: "#349EFF",
        backgroundColor: "#349EFF",
        display: "list-item"
    },
    {
        id: 15,
        title: 'Стало известно, почему некоторые классы антибиотиков снижают слух',
        start: '2023-09-27T16:00:00',
        img: "events/event__image__14.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Вебинар",
        color: "#FFAE34",
        backgroundColor: "#FFAE34",
        display: "list-item"
    },
    {
        id: 15,
        title: 'Стало известно, почему некоторые классы антибиотиков снижают слух',
        start: '2022-08-03T16:00:00',
        img: "events/event__image__14.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Вебинар",
        color: "#FFAE34",
        backgroundColor: "#FFAE34",
        display: "list-item"
    },
    {
        id: 15,
        title: 'Стало известно, почему некоторые классы антибиотиков снижают слух',
        start: '2022-08-07T16:00:00',
        img: "events/event__image__14.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Вебинар",
        color: "#FFAE34",
        backgroundColor: "#FFAE34",
        display: "list-item"
    },
    {
        id: 15,
        title: 'Стало известно, почему некоторые классы антибиотиков снижают слух',
        start: '2022-09-21T16:00:00',
        img: "events/event__image__14.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Вебинар",
        color: "#FFAE34",
        backgroundColor: "#FFAE34",
        display: "list-item"
    },
    {
        id: 15,
        title: 'Стало известно, почему некоторые классы антибиотиков снижают слух',
        start: '2022-09-17T16:00:00',
        img: "events/event__image__14.png",
        description: "Некоторые жизненно важные антибиотики способны вызывать потерю слуха, и теперь специалисты могут объяснить, почему так происходит.",
        spikers: "Спикеры: Антонина Цой, Леонид Ярмольник, Владислав Сухоручко.",
        category: "Вебинар",
        color: "#FFAE34",
        backgroundColor: "#FFAE34",
        display: "list-item"
    },
]

let eventsBlock = document.querySelector(".events");


function drawEventsArray(array){
    eventsBlock.innerHTML = "";

    for(let event of array){
        const formattedDate = moment(event.start).format("DD MMMM HH:mm");

        if (event.category == 'Презентация') {            
            eventsBlock.innerHTML += `
                <div class="event">
                    <div>
                        <div class="event__sticker__blue">${event.category}</div>
                    </div>
                    <div class="event__description">
                        <div class="event__h2">${event.title}</div>
                        <div class="event__text">${event.description}</div>
                        <div class="event__spikers">${event.spikers}</div>
                    </div>
                    <div class="event__image">
                        <div class="event__date">${formattedDate}</div>
                        <img src="${event.img}" alt="Фото события" class="event__img">
                    </div>
                </div>
            `;
        }

        else {
            eventsBlock.innerHTML += `
                <div class="event">
                    <div>
                        <div class="event__sticker__orange">${event.category}</div>
                    </div>
                    <div class="event__description">
                        <div class="event__h2">${event.title}</div>
                        <div class="event__text">${event.description}</div>
                        <div class="event__spikers">${event.spikers}</div>
                    </div>
                    <div class="event__image">
                        <div class="event__date">${formattedDate}</div>
                        <img src="${event.img}" alt="Фото события" class="event__img">
                    </div>
                </div>
            `;
        }
    }
};

drawEventsArray(eventsArray);

// Render First 6 Events
window.onload = function () {
    let event = document.getElementsByClassName('event');
    for (let i = 6; i <= event.length; i++) {
        event[i].classList.add('hidden');
    }
}

// Show Next 6 Events
let more = document.querySelectorAll('.show__more');

for (let i = 0; i < more.length; i++) {
    more[i].addEventListener('click', function() {
      let showPerClick = 6;
      
      let hidden = this.parentNode.querySelectorAll('div.hidden');
      for (let i = 0; i < showPerClick; i++) {
        if (!hidden[i]) return this.outerHTML = "";
  
        hidden[i].classList.remove('hidden');
      }
    });
}