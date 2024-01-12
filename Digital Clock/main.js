const hourEl = document.getElementById("hour");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

setInterval(() =>{
    updateClock();
}, 1000);

function updateClock(){
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let ampm = "PM"; 

    

    hour = newTime(hour);
    minute = newTime(minute);
    second = newTime(second);

    if(hour >= 12){
        ampm = "PM";
    }

    hourEl.textContent = hour;
    minEl.textContent = minute;
    secEl.textContent = second;
    ampmEl.textContent = ampm;



}

function newTime(unit){
    return (("0") + unit).length > 2 ? unit : "0" + unit;
}