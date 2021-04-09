var startButton = document.querySelector(".start-button");
var timer = document.querySelector(".timer-count");
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

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
    }
  }
];



function startQuiz() {
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


  //Question 1: If/else is a:
    //a. compairson statement  b. conditional statement  c. boolean  d. function
  //Question 2: Which Math.method rounds up?
    //a. math.floor  b. math.ceiling  c. math.round  d. math.random
  //Question 3: Function parameters are placed in:
    //a. ()  b. {}  c. []  d. " "
  //Question 4: Arrays can store:
    //a. numbers  b. strings  c. booleans  d. all of the above  
  //Question 5: What does '=' mean in Javascript?
    //a. equal to operator  b. declaring operator  c. assignment operator  d. undefined
