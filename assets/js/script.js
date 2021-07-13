var startButton = document.getElementById("start");
var timer = document.querySelector("timer");
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
        currentTime.textContent = "Time's Up!";
      }
    }, 1000);
  }
  render(questionsIndex);
});

function render(questionsIndex) {
  questionsDiv.innerHTML = "";
  createUl.innerHTML = "";

  for (i = 0; i < questions.length; i++) {
    var userQuestion = questions[questionsIndex].title;
    var userChoices = questions[questionsIndex].choices;
    questionsDiv.textContent = userQuestion;
  }
  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsDiv.appendChild(createUl);
    createUl.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
}

function compare(event) {
  var element = event.target;

  if (element.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    //this calls back the answer in the array to distinguish right answers out of the text content
    if (element.textContent === questions[questionsIndex].answer) {
      score++;
      createDiv.textContent = "Correct Answer!";
    } else {
      timeLeft = timeLeft - penalty;
      createDiv.textContent = "Incorrect, the answer is " + questions[questionsIndex].answer;
    }
  }
  questionsIndex++;

  if (questionsIndex >= questions.length) {
    quizOver();
    createDiv.textContent = "You got right:" + score + "/" + questions.length;
  } else {
    render(questionsIndex);
  }
  questionsDiv.appendChild(createDiv);
}