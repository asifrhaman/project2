function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let apmElement = document.querySelector('.apm');
    apmElement.textContent = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    let hrText = hours < 10 ? '0' + hours : hours;
    let minText = minutes < 10 ? '0' + minutes : minutes;
    let secText = seconds < 10 ? '0' + seconds : seconds;

    document.querySelector('.hr').textContent = `${hrText} hr`;
    document.querySelector('.min').textContent = `${minText} min`;
    document.querySelector('.sec').textContent = `${secText} sec`;

    let hourPercent = (hours % 12) / 12 * 100;
    let minutePercent = minutes / 60 * 100;
    let secondPercent = seconds / 60 * 100;

    document.getElementById('hr').style.background =
        `conic-gradient(#ff2972 ${hourPercent}%, #000 ${hourPercent}%)`;

    document.getElementById('min').style.background =
        `conic-gradient(#fee800 ${minutePercent}%, #000 ${minutePercent}%)`;

    document.getElementById('sec').style.background =
        `conic-gradient(#04fc43 ${secondPercent}%, #000 ${secondPercent}%)`;
}

updateClock();
setInterval(updateClock, 1000);