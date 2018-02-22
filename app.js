function timeNow() {
  const time = new Date();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondsEl = document.querySelector('.seconds');
  const minutesEl = document.querySelector('.minutes');
  const hoursEl = document.querySelector('.hour');
  const hands = document.querySelector('.hand');

  const secondsDegree = ((seconds / 60) * 360) + 90;
  const minutesDegree = ((minutes / 60) * 360) + 90;
  const hoursDegree = ((hours / 12) * 360) + 90;


  secondsEl.style.transform = `rotate(${secondsDegree}deg)`;
  minutesEl.style.transform = `rotate(${minutesDegree}deg)`;
  hoursEl.style.transform = `rotate(${hoursDegree}deg)`;

  if (seconds === 0) {
    secondsEl.style.transitionProperty = 'none';
  } else {
     secondsEl.style.transition = '';
  }
}

setInterval(timeNow, 1000);