let timeOutput = document.getElementById('taks1__time');
let downBtn = document.querySelector('#task1__downBtn');
let upBtn = document.querySelector('#task1__upBtn');
let startBtn = document.querySelector('#task1__startBtn');
let sec15Btn = document.querySelector('#task1__15Sec');
let stopBtn = document.querySelector('#task1__stopBtn');
let lastTenSec = moment(`2016-01-01T00:00:10+02:00`);
const minTime = moment(`2016-01-01T00:00:00+02:00`);
const maxTime = moment(`2016-01-01T00:59:59+02:00`);
let sec15 = moment(`2016-01-01T00:00:15+02:00`);
let userTime = moment(`2016-01-01T00:00:00+02:00`); // .add(13, 'seconds')

let userTimer;

downBtn.addEventListener('click', () => {
  if (userTime.clone().subtract(1, 'minutes') >= minTime) {
    userTime = userTime.subtract(1, 'minutes');
    timeOutput.innerHTML = userTime.format('mm:ss');
    console.log(userTime.format('hh:mm:ss'));
  }
});

upBtn.addEventListener('click', () => {
  if (userTime.clone().add(1, 'minutes') < maxTime) {
    userTime = userTime.add(1, 'minutes');
    timeOutput.innerHTML = userTime.format('mm:ss');
    console.log(userTime.format('hh:mm:ss'));
  }
});

startBtn.addEventListener('click', () => {
  if (userTime.format('mm:ss') > '00:00') {
    startTimer();
    userTimer = setInterval(startTimer, 1000);
    startBtn.setAttribute('hidden', 'hidden');
    sec15Btn.setAttribute('hidden', 'hidden');
    stopBtn.removeAttribute('hidden');
  }
  
});

sec15Btn.addEventListener('click', () => {
  userTime = sec15.clone();
  timeOutput.innerHTML = userTime.format('mm:ss');
});

stopBtn.addEventListener('click', () => {
  userTime = minTime.clone();
  timeOutput.innerHTML = userTime.format('mm:ss');
  showStartAnd15Btn();
})

function startTimer() {
  if (lastTenSec >= userTime) {
    timeOutput.style.color = 'red';
  }
  if (userTime.format('mm:ss') == '00:00') {
    timeOutput.innerHTML = userTime.format('mm:ss');
    clearInterval(userTimer);
    timeOutput.style.color = 'black';
    showStartAnd15Btn();
    return;
  } else {
    timeOutput.innerHTML = userTime.format('mm:ss');
    userTime = userTime.subtract(1, 'seconds');
  }
}

function showStartAnd15Btn() {
  startBtn.removeAttribute('hidden');
  sec15Btn.removeAttribute('hidden');
  stopBtn.setAttribute('hidden', 'hidden');
}