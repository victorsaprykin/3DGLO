const timer = (deadLine) => {
  // const one = 'Я - модуль One!!!!';
  console.log(deadLine);
  // console.log(one);
  const timerHours = document.querySelector('#timer-hours');
  const timerMinutes = document.querySelector('#timer-minutes');
  const timerSeconds = document.querySelector('#timer-seconds');
  const timerAction = document.querySelector('.timer-action');

  const getTimeRemaining = () => {
    let dateStop = new Date(deadLine).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, hours, minutes, seconds };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    timerHours.textContent = ('0' + getTime.hours).slice(-2);
    timerMinutes.textContent = ('0' + getTime.minutes).slice(-2);
    timerSeconds.textContent = ('0' + getTime.seconds).slice(-2);

    if (getTime.timeRemaining > 0) {
      setInterval(updateClock, 1000);
    } else {
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }
  };
  updateClock();
};

export default timer;
