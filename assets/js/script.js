var startButton = document.getElementById("start");
var timer = document.querySelector(".timer-count");
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

var timerInterval;
var timeLeft = 100;
var wrongAnswer = -10;
var score = 0;

var myQuestions = [
  {
    question: "If/else is a",
    answers: {
      a: 'comparison statement',
      b: 'conditional statement',
      c: 'boolean',
      d: 'function'
    },
    correctAnswer: 'b'
  },
  {
    question: "Which Math.method rounds up?",
    answers: {
      a: 'math.floor',
      b: 'math.ceiling',
      c: 'math.round',
      d: 'math.random'
    },
    correctAnswer: 'b'
  },
  {
    question: "Function parameters are placed in:",
    answers: {
      a: '()',
      b: '{}',
      c: '[]',
      d: '" "'
    },
    correctAnswer: 'a'
  },
  {
    question: "Arrays can store:",
    answers: {
      a: 'numbers',
      b: 'strings',
      c: 'boolean',
      d: 'all of the above'
    },
    correctAnswer: 'd'
  },
  {
    question: "What does '=' mean in Javascript?",
    answers: {
      a: 'equal to operator',
      b: 'declaring operator',
      c: 'assignment operator',
      d: 'undefined'
    },
    correctAnswer: 'c'
  }
];

timer.addEventListener("click", function () {
  if (defaultTime === 0) {
    defaultTime = setInterval(function () {
      timeLeft--;
      currentTime.textContent = "Time: " + timeLeft;

      if (timeLeft <= 0) {
        clearTimeout(defaultTime);
        currentTime.textContent = "Time Over!";
      }
    }, 1000);
  }
  render(questionsIndex);
});

