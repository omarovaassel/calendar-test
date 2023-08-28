// Calendar
moment.locale('ru'); // Fullcalendar Russian Version

function drawCalendar() {
            const calendarEl = document.getElementById('calendar');
            
            const calendar = new FullCalendar.Calendar(calendarEl, {
                locale: 'ru',
                initialView: 'dayGridMonth',
                fixedWeekCount: false,
                firstDay: 1,
                displayEventTime: false,
                height: 700,
                
                dayMaxEventRows: true,
                    views: {
                        timeGrid: {
                        dayMaxEventRows: 6 // adjust to 6 only for timeGridWeek/timeGridDay
                        }
                    },
                            
                headerToolbar: {
                left: '',
                center: '',
                right: ''
                },

                views: {
                    dayGridMonth: {
                        titleFormat: {
                            month: 'long',
                        },
                        dayHeaderFormat: {
                            weekday: 'long',
                        }
                    }
                },

                events: eventsArray,   
                
                eventClick: function(info) {
                    showEvent(info);
                },

                eventDidMount:
                    function (info) {
                        if (info.event.backgroundColor) {
                            info.el.style.background = info.event.backgroundColor;
                        }
                    },            
            });
            
            const currentMonthEl = document.getElementById('current-month');
            const currentDate = calendar.getDate();
            const currentMonth = calendar.formatDate(currentDate, { month: 'long' });
            currentMonthEl.textContent = currentMonth;

            const currentMoment = moment(currentDate);

            //Prev Month 2
            const prevMonthEl2 = document.getElementById('previous-month-2');
            const prevMonthMoment2 = currentMoment.clone().subtract(2, 'months');
            const prevMonthName2 = prevMonthMoment2.format('MMMM');
            prevMonthEl2.textContent = prevMonthName2;

            //Prev month 1
            const prevMonthEl1 = document.getElementById('previous-month-1');
            const prevMonthMoment1 = currentMoment.clone().subtract(1, 'months');
            const prevMonthName1 = prevMonthMoment1.format('MMMM');
            prevMonthEl1.textContent = prevMonthName1;

            //Next month 1
            const nextMonthEl1 = document.getElementById('next-month-1');
            const nextMonthMoment1 = currentMoment.add(1, 'months');
            const nextMonthName1 = nextMonthMoment1.format('MMMM');
            nextMonthEl1.textContent = nextMonthName1;

            //Next Month 2
            const nextMonthEl2 = document.getElementById('next-month-2');
            const nextMonthMoment2 = currentMoment.add(1, 'months');
            const nextMonthName2 = nextMonthMoment2.format('MMMM');
            nextMonthEl2.textContent = nextMonthName2;

            // Previous month function
            document.getElementById('prevButton').addEventListener('click', function () {
                calendar.prev();
                const currentDate = calendar.getDate();
                const currentMoment = moment(currentDate);

                // Change previous and next months
                const prevMonthMoment1 = currentMoment.clone().subtract(1, 'months');
                const prevMonthName1 = prevMonthMoment1.format('MMMM');
                prevMonthEl1.textContent = prevMonthName1;

                const prevMonthMoment2 = currentMoment.clone().subtract(2, 'months');
                const prevMonthName2 = prevMonthMoment2.format('MMMM');
                prevMonthEl2.textContent = prevMonthName2;

                const nextMonthMoment1 = currentMoment.add(1, 'months');
                const nextMonthName1 = nextMonthMoment1.format('MMMM');
                nextMonthEl1.textContent = nextMonthName1;

                const nextMonthMoment2 = currentMoment.add(1, 'months');
                const nextMonthName2 = nextMonthMoment2.format('MMMM');
                nextMonthEl2.textContent = nextMonthName2;

                const currentMonth = calendar.formatDate(currentDate, { month: 'long' });
                currentMonthEl.textContent = currentMonth;
            });

            // Next month function
            document.getElementById('nextButton').addEventListener('click', function () {
                calendar.next();
                const currentDate = calendar.getDate();
                const currentMoment = moment(currentDate);

                // Change previous and next months
                const prevMonthMoment1 = currentMoment.clone().subtract(1, 'months');
                const prevMonthName1 = prevMonthMoment1.format('MMMM');
                prevMonthEl1.textContent = prevMonthName1;

                const prevMonthMoment2 = currentMoment.clone().subtract(2, 'months');
                const prevMonthName2 = prevMonthMoment2.format('MMMM');
                prevMonthEl2.textContent = prevMonthName2;

                const nextMonthMoment1 = currentMoment.add(1, 'months');
                const nextMonthName1 = nextMonthMoment1.format('MMMM');
                nextMonthEl1.textContent = nextMonthName1;

                const nextMonthMoment2 = currentMoment.add(1, 'months');
                const nextMonthName2 = nextMonthMoment2.format('MMMM');
                nextMonthEl2.textContent = nextMonthName2;

                const currentMonth = calendar.formatDate(currentDate, { month: 'long' });
                currentMonthEl.textContent = currentMonth;
            });

            //Filter category
            const categorySelect = document.getElementById('category-select');

            categorySelect.addEventListener('change', function () {
                const selectedCategory = categorySelect.value;

                const filteredEvents = eventsArray.filter(function (event) {
                    return selectedCategory === '' || event.category === selectedCategory;
                });

                calendar.removeAllEvents();
                calendar.addEventSource(filteredEvents);
            });

            //Filter year
            const yearSelect = document.getElementById('year-select');

            yearSelect.addEventListener('change', function () {
                const selectedYear = parseInt(yearSelect.value);
                const currentDate = calendar.getDate();
                const newDate = moment(currentDate).year(selectedYear);

                calendar.gotoDate(newDate.toDate()); // Refresh date

                calendar.render();
            });
            
            calendar.render();
        };

drawCalendar();


// Modal window event
function showEvent(info) {
    document.getElementById("event__overlay").classList.toggle("slidedIntoView");
    const eventBlock = document.getElementById("event__modal");

    const eventDate = moment(info.event.start);
    const formattedDate = eventDate.format("DD MMMM HH:mm");

    const modalContent = document.createElement("div");
    modalContent.className = "event__modal";

    modalContent.innerHTML = `
        <div class="event__modal__top">
            <div class="event__modal__category" style="background-color: ${info.event.extendedProps.backgroundColor}">${info.event.extendedProps.category}</div>
            <img src="images/close-modal-icon.png" onclick="closeEvent()" alt="Иконка закрытия" class="close__icon">
        </div>
        <div class="event__modal__title">${info.event.title}</div>
        <div class="event__modal__spikers">${info.event.extendedProps.spikers}</div>
        <div class="event__modal__description">${info.event.extendedProps.description}</div>
        <div class="event__modal_bottom">
            <div class="event__modal__time">Состоится ${formattedDate}</div>
            <div class="event__modal__reminder">
                <button class="event__modal__reminder__button">Напомнить</button>
                <img src="images/reminder-icon.png" alt="Иконка напоминания" class="reminder__icon">
            </div>
        </div>
    `;

    modalContent.style.transform = "translate(-50%, -50%)"; // Переместить по центру экрана
    modalContent.style.left = "50%"; // Установить левый край в центре экрана
    modalContent.style.top = "50%"; // Установить верхний край в центре экрана

    eventBlock.innerHTML = ''; // Очищаем содержимое eventBlock
    eventBlock.appendChild(modalContent); // Добавляем модальное окно в eventBlock
}

function closeEvent() {
    const overlay = document.getElementById('event__overlay');
    overlay.classList.remove("slidedIntoView");
}


// Menu Mobile Header
function openHeaderMenuMobile() {
    document.getElementById("myDropdownHeader").classList.toggle("show");
}

window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropbtnheader')) {

        let dropdowns = document.getElementsByClassName("header-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
});


// Menu Mobile Footer
function openFooterMenuMobile1() {
    document.getElementById("myDropdownFooter1").classList.toggle("show");
}

window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropbtnfooter1')) {

        let dropdowns = document.getElementsByClassName("footer-content1");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
});

function openFooterMenuMobile2() {
    document.getElementById("myDropdownFooter2").classList.toggle("show");
}

window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropbtnfooter2')) {

        let dropdowns = document.getElementsByClassName("footer-content2");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
});

function openFooterMenuMobile3() {
    document.getElementById("myDropdownFooter3").classList.toggle("show");
}

window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropbtnfooter3')) {

        let dropdowns = document.getElementsByClassName("footer-content3");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
});


//Change the weekdays in mobile
function changeDayWeek () {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 645) {
        const dayElements = document.querySelectorAll('.fc-col-header-cell');

        const newWeekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

        for (let i = 0; i < dayElements.length; i++) {
            dayElements[i].textContent = newWeekdays[i];
        }
    } else {
        const originalWeekdays = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
        const dayElements = document.querySelectorAll('.fc-col-header-cell');
        
        for (let i = 0; i < dayElements.length; i++) {
            dayElements[i].textContent = originalWeekdays[i];
        }
    }
}
    
window.addEventListener('load', changeDayWeek);
window.addEventListener('resize', changeDayWeek);


//Change the background in tablet
function changeBackground () {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 835) {
        const backgroundBlue = document.querySelectorAll('a[style*="background: rgb(52, 158, 255)"]');
        const backgroundOrange = document.querySelectorAll('a[style*="background: rgb(255, 174, 52)"]');

        backgroundBlue.forEach(function(element) {
            element.classList.add('blue__mobile');
        })
        
        backgroundOrange.forEach(function(element) {
            element.classList.add('orange__mobile');
        })
    }
}

window.addEventListener('load', changeBackground);
window.addEventListener('resize', changeBackground);