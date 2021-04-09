var startButton = document.querySelector(".start-button");
var timer = document.querySelector(".timer-count");


function startGame() {
    isWin = false;
    timerCount = 10;
    startButton.disabled = true;
    renderBlanks()
    startTimer()
  }


function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        if (isWin && timerCount > 0) {
          clearInterval(timer);
          winGame();
        }
      }
      if (timerCount === 0) {
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }