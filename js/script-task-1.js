// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. 
// Такой плагин может использоваться в блогах и интернет - магазинах, страницах регистрации событий, во время технического обслуживания и т.д.

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 19, 2021'),
});

function CountdownTimer({targetDate}) {
    setInterval(() => {
        const curuntDate = Date.now();
        let deltaTime = targetDate - curuntDate;
        const { days, hours, mins, secs } = getTimeComponents(deltaTime);
        console.log(`${days}:${hours}:${mins}:${secs}`)
    }, 1000)
}

function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    changeValue('days', days);
    changeValue('hours', hours);
    changeValue('mins', mins);
    changeValue('secs', secs);
    return { days, hours, mins, secs };
}

function pad(value) {
    return String(value).padStart(2, '0')
}

function changeValue(name, count) {
    const value = document.querySelector(`[data-value=${name}]`);
    value.textContent = count;
}

const timerDisplay = document.querySelector("#timer-1");
timerDisplay.style.display = "flex"

const valueDays = document.querySelector('[data-value="days"]');
valueDays.style.display = "block";
valueDays.style.fontSize = "50px";
valueDays.style.marginRight = "25px"

const valueHours = document.querySelector('[data-value="hours"]');
valueHours.style.display = "block";
valueHours.style.fontSize = "50px";
valueHours.style.marginRight = "25px"

const valueMins = document.querySelector('[data-value="mins"]');
valueMins.style.display = "block";
valueMins.style.fontSize = "50px";
valueMins.style.marginRight = "25px"

const valueSecs = document.querySelector('[data-value="secs"]');
valueSecs.style.display = "block";
valueSecs.style.fontSize = "50px";
valueSecs.style.marginRight = "25px"

