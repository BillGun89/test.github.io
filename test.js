const dagarEl = document.getElementById('dagar');
const timmarEl = document.getElementById('timmar');
const minuterEl = document.getElementById('minuter');
const sekunderEl = document.getElementById('sekunder');

const birthday = "30 oct 2021"

function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    const totalSekunder = (birthdayDate - currentDate) / 1000;

    const dagar = Math.floor(totalSekunder / 3600 / 24);
    const timmar = Math.floor(totalSekunder / 3600) % 24;
    const minuter = Math.floor(totalSekunder / 60) % 60;
    const sekunder = Math.floor(totalSekunder) % 60;

    dagarEl.innerHTML = dagar;
    timmarEl.innerHTML = timmar;
    minuterEl.innerHTML = minuter;
    sekunderEl.innerHTML = sekunder;


}



countdown();

setInterval(countdown, 1000);