console.log('Reach me by phone at 954.707.9653 or via email at bunth667@gmail.com');

document.getElementById('lock').addEventListener('click', open);    
const lock = document.getElementById('lock');
const ring1 = document.getElementById('ring1');
const ring2 = document.getElementById('ring2');
const ring3 = document.getElementById('ring3');
const doorL = document.getElementById('door-left');
const doorR = document.getElementById('door-right');

function open() {
    lock.classList.remove('lock');
    lock.classList.add('unlock');
    ring1.classList.remove('ring1');
    ring1.classList.add('green1');
    ring2.classList.remove('ring2');
    ring2.classList.add('green2');
    ring3.classList.remove('ring3');
    ring3.classList.add('green3');
    setTimeout(slideDoor, 2000);
    setTimeout(remove, 2500);
}   

function slideDoor() {
    lock.classList.add('hidden');
}

function remove() {
    doorL.classList.add('open-left');
    doorR.classList.add('open-right');
    lock.classList.add('remove');
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function getDate() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  const month = today.getMonth();
  const day = today.getDay();
  const year = today.getFullYear();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'];
  let meridiem = 'AM';
  
  m = checkTime(m);
  s = checkTime(s);
  if(h > 12) {
    h = h - 12;
    meridiem = 'PM';
  }
  if(h === 0) {
    h = 12;
  }
  document.getElementById('date').innerHTML = `${months[month].toUpperCase()} ${today.getDate()} ${year}`;
  document.getElementById('day').innerHTML = `${days[day].toUpperCase()}`;
  document.getElementById('time').innerHTML = `${h}:${m}:${s} ${meridiem}`;
  t = setTimeout(function() {
    getDate()
  }, 500);
}
getDate();
