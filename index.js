let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = false;

function setTimer() {
  const daysInput = parseInt(document.getElementById("daysIn").value);
  const hoursInput = parseInt(document.getElementById("hoursIn").value);
  const minutesInput = parseInt(document.getElementById("minsIn").value);
  const secondsInput = parseInt(document.getElementById("secsIn").value);

  days = Math.max(0, daysInput);
  hours = Math.max(0, hoursInput);
  minutes = Math.max(0, minutesInput);
  seconds = Math.max(0, secondsInput);

  minutes += Math.floor(seconds / 60);
  seconds = seconds % 60;

  hours += Math.floor(minutes / 60);
  minutes = minutes % 60;

  days += Math.floor(hours / 24);
  hours = hours % 24;
 

  updateDisplay();
}

function updateDisplay() {
  const daysString = days.toString().padStart(2, "0");
  const hoursString = hours.toString().padStart(2, "0");
  const minutesString = minutes.toString().padStart(2, "0");
  const secondsString = seconds.toString().padStart(2, "0");

  document.getElementById('days').innerHTML = daysString;
  document.getElementById('hours').innerHTML = hoursString;
  document.getElementById('mins').innerHTML = minutesString;
  document.getElementById('secs').innerHTML = secondsString;
}

function start() {
  if (!timer) {
    timer = true;
    downTimer();
}
  
}

function stop() {
  timer = false;
}

function reset() {
  timer = false;
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
  document.getElementById("daysIn").value = 0;
  document.getElementById("hoursIn").value = 0;
  document.getElementById("minsIn").value = 0;
  document.getElementById("secsIn").value = 0;
}


function downTimer() {
  if (timer) {
    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            } else {
                if (days > 0) {
                    days--;
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                } else {
                    reset();
                    return;
                }
            }
        }
    }

    updateDisplay();
    setTimeout(downTimer, 1000);
}}