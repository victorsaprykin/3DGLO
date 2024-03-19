const timer = (deadLine) => {
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
  let interval = 0;
  const updateClock = () => {
    let getTime = getTimeRemaining();

    timerHours.textContent = ('0' + getTime.hours).slice(-2);
    timerMinutes.textContent = ('0' + getTime.minutes).slice(-2);
    timerSeconds.textContent = ('0' + getTime.seconds).slice(-2);

    if (getTime.timeRemaining < 0) {
      clearInterval(interval);

      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }
  };

  interval = setInterval(updateClock, 1000);
};

export default timer;
