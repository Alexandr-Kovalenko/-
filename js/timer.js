const timer = document.querySelector("#timer-start-btn");

const updateTimer = (timeLeft) => {
  const timer = document.querySelector("#timer");
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  timer.innerHTML = `${minutes}:${seconds}`;
};

const startTimer = () => {
  const input = document.querySelector("#minutes");
  const minutes = parseInt(input.value);

  if (isNaN(minutes) || minutes < 1) {
    alert("Введіть коректне значення");
  } else {
    let timeLeft = minutes * 60;
    const timerId = setInterval(() => {
      timeLeft--;
      updateTimer(timeLeft);

      if (timeLeft === 0) {
        clearInterval(timerId);
      }
    }, 1000);
  }
};

timer.addEventListener("click", startTimer);
