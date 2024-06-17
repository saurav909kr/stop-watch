let displayTime = document.querySelector(".displayTime");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let restartBtn = document.getElementById("restartBtn");

let msec = 00;
let secs = 00;
let mins = 00;

let timerId = null;

startBtn.addEventListener('click', function(){
    if(timerId !== null) {
      clearInterval(timerId);
    }
     timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function(){
      clearInterval(timerId);
});

restartBtn.addEventListener('click', function(){
    clearInterval(timerId);
    displayTime.innerHTML = '00 : 00 : 00';
    [msec, secs, mins] = [0, 0, 0];
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;

        }
    }

    let  m = msec < 10 ? "0" + msec : msec;
    let  s= secs < 10 ? "0" + secs : secs;
    let  mi = mins < 10 ? "0" + mins : mins;
   
    displayTime.innerHTML = mi+":"+ s +":"+ m;
}

 
 