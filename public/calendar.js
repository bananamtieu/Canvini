const year = new Date().getFullYear();

function blankCalendar(calendar) {
    let x = calendar.rows.length;
    for (let i = 0; i < x; i++) {
        const currentrow = calendar.rows[i].cells;
        for (let j = 0; j < currentrow.length; j++) {
            let currentcell = currentrow[j];
            currentcell.innerHTML = '';
        }
    }
}

function updateCalendar(calendar, month, events) {
    let x = calendar.rows.length;
    let daysInMonth = new Date(year, parseInt(month), 0).getDate();
    let firstDayOfMonth = new Date(`${month}-01-${year}`).getDay();
    for (let i = 0; i < x; i++) {
        const currentrow = calendar.rows[i].cells;
        for (let j = 0; j < currentrow.length; j++) {
            let currentcell = currentrow[j];
            let currentday = i*7 + j;
            if (currentday >= firstDayOfMonth && currentday <= (firstDayOfMonth + daysInMonth - 1)) {
                let span = document.createElement('span');

                let d = document.createElement('p');
                d.innerHTML = `${currentday - firstDayOfMonth + 1}`;
                span.appendChild(d);

                let event = events[currentday - firstDayOfMonth + 1];
                if (typeof event != "undefined") {
                    let d_event = document.createElement('p');
                    d_event.className = `${event.type}`;
                    if (typeof event.description != "undefined") {
                        d_event.innerHTML = `${event.description}`;
                    }
                    else {
                        d_event.innerHTML = "Office hour";
                    }
                    span.appendChild(d_event);
                }
                currentcell.appendChild(span);
            }
        }
    }
}

function main() {
    const calendar = document.querySelector('.calendar-wrapper tbody');
    let month = document.querySelector('input[name="month"]:checked').value;
    let caption = document.querySelector('.calendar caption');

    let stringMonth = '';
    switch(month) {
        case '9':
            stringMonth = 'september';
            caption.textContent = `September ${year}`;
            break;
        case '10':
            stringMonth = 'october';
            caption.textContent = `October ${year}`;
            break;
        case '11':
            stringMonth = 'november';
            caption.textContent = `November ${year}`;
            break;
        case '12':
            stringMonth = 'december';
            caption.textContent = `December ${year}`;
            break;
        default:
    }
    fetch(`/api/events/${stringMonth}`).then((response) => response.json()).then((eventData) => {
        blankCalendar(calendar);
        updateCalendar(calendar, month, eventData);
    })
}

window.addEventListener('load', main);
const selector = document.querySelector('.month-selector');
selector.addEventListener('click', main);