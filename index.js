const hourEl = document.getElementById('hours');

const minutesEl = document.getElementById('minutes');

const secondsEl = document.getElementById('seconds');

const ampmEl = document.getElementById('ampm');

function updateTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM';

    if(h>12){
        h = h - 12;
        ampm = 'PM';
    }  
    if(h<10){
        h = '0'+h;
    }
    if(m<10){
        m = '0'+m;
    }
    if(s<10){
        s = '0'+s;
    }
    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;
}
setInterval(()=>{
    updateTime();
},1000)
