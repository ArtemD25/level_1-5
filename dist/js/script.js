let userTime = moment.duration(2, 'minutes');
let timeOutput = document.getElementById('taks1__time');
let timePassed = 0;

let g = moment('2016-01-01T00:59:00+02:00');
console.log(g.format('mm:ss'));
g = g.subtract(1, 'seconds');
console.log(g.format('mm:ss'));

let userTimer = setInterval(() => {
  if (userTime == '00:00') {
    clearInterval(userTimer);
    return;
  } else {
    g = g.subtract(1, 'seconds');
    timeOutput.innerHTML = g.format('mm:ss');
  }
}, 1000);
