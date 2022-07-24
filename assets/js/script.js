const relógio = document.getElementById('relógio');
const cronómetro = document.getElementById('cronómetro');
const timer = document.getElementById('timer');

const main_relógio = document.getElementById('rolex');
const main_another = document.getElementById('another');

const nav_options = document.getElementById('options');


const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const button_start = document.getElementById('start');

let application = 'relógio';

const formatTime = (time) =>{
  if (time <= 9){
    time = '0'+ time;
  }
  return time;
}
const setTime = () =>{
  let date = new Date;
  if (application == 'relógio'){
    hour.textContent = formatTime(date.getHours());
    minute.textContent = formatTime(date.getMinutes());
    second.textContent = formatTime(date.getSeconds());
  }
}

const setLauncher = () =>{
  hour.textContent = '00';
  minute.textContent = '00';
  second.textContent = '00';
}

const setLaucherNow = () =>{
  second.textContent = formatTime(Number(second.textContent) + 1);
  if (second.textContent == 60){
    minute.textContent = formatTime(Number(minute.textContent) + 1);
    second.textContent = 0
  }
  if (minute.textContent == 60){
    hour.textContent = formatTime(Number(hour.textContent) + 1);
    minute.textContent = 0
  }
  if (hour.textContent == 24){
    hour.textContent = 0
    minute.textContent = 0
    second.textContent = 0
  }
  setTimeout(setLaucherNow, 1000);
}
relógio.addEventListener('click', () =>{
  //Style
  relógio.style.background = 'black';
  relógio.style.color = 'white';

  cronómetro.style.background = 'white';
  cronómetro.style.color = 'black';

  timer.style.background = 'white';
  timer.style.color = 'black';

  // 
  nav_options.style.display = 'none';
  main_relógio.style.display = 'flex'
  main_another.style.display = 'none'
  application = 'relógio'
  setTime();
  setInterval(setTime, 1000);
});

cronómetro.addEventListener('click', () =>{
  //Style
  cronómetro.style.background = 'black';
  cronómetro.style.color = 'white';

  timer.style.background = 'white';
  timer.style.color = 'black';

  relógio.style.background = 'white';
  relógio.style.color = 'black';

  //
  nav_options.style.display = 'flex';
  main_relógio.style.display = 'flex'
  main_another.style.display = 'none'
  application = 'cronómetro'
  setLauncher()
});

timer.addEventListener('click', () =>{
  //Style
  timer.style.background = 'black';
  timer.style.color = 'white';

  cronómetro.style.background = 'white';
  cronómetro.style.color = 'black';

  relógio.style.background = 'white';
  relógio.style.color = 'black';

  //
  nav_options.style.display = 'flex';
  main_relógio.style.display = 'none'
  main_another.style.display = 'flex'
  application = 'timer'
});

button_start.addEventListener('click', () =>{
  if (application == 'cronómetro'){
    setLaucherNow()
  }
  else{

  }
});