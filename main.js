// Program starts when opening browser.
window.onload = start();

function start() {
    startDigitalClock();
}

// Updates browser every second.
function startDigitalClock() {
    setInterval(updateDigitalClock, 1000);

}


function updateDigitalClock() {
    const date = new Date();

    updateDigitalTime(date);
    updateDigitalWeekday(date);
    updateCurrentMonth(date);
}


function updateDigitalTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = formatDateValue(hours);
    minutes = formatDateValue(minutes);
    seconds = formatDateValue(seconds);
    
    // Fetch id from HTML.
    const currentTime = document.getElementById("time");
    currentTime.innerText = hours + ":" + minutes + ":" + seconds;
}

function updateDigitalWeekday(date) {
    const currentWeekday = document.getElementById("weekday");
    currentWeekday.innerText = getCurrentWeekday(date) + ",";
}

function getCurrentWeekday(date) {
    const weekday = date.getDay();
    switch (weekday) {
        case 0: return "Sunday"
        case 1: return "Monday"
        case 2: return "Tuesday"
        case 3: return "Wednesday"
        case 4: return "Thursday"
        case 5: return "Friday"
        case 6: return "Saturday"
    }
}

function updateCurrentMonth(date) {
    const currentMonth = document.getElementById("date");
    currentMonth.innerText = getCurretnMonth(date);
}

function getCurretnMonth(date) {
    const dayOfMonth = date.getDate();
    const monthIndex = date.getMonth();

    const prefix = dayOfMonth + " ";

    switch (monthIndex) {
        case 0: return prefix + 'Januari';
        case 1: return prefix + 'Februari';
        case 2: return prefix + 'Mars';
        case 3: return prefix + 'April';
        case 4: return prefix + 'Maj';
        case 5: return prefix + 'Juni';
        case 6: return prefix + 'Juli';
        case 7: return prefix + 'Augusti';
        case 8: return prefix + 'September';
        case 9: return prefix + 'Oktober';
        case 10: return prefix + 'November';
        case 11: return prefix + 'December';
    }
}

// Adding a zero next to every number between 1 - 9.
function formatDateValue(value) {
    if (value < 10) {
        return '0' + value;
    }
    return value;
}