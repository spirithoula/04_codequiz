
var timer = document.querySelector("#startTimer");
var questionsDiv = document.querySelector("#questions");
var currentTime = document.querySelector("#currentTime");
var createUl = document.createElement("ul");

var questionsIndex = 0;
var defaultTime = 0;
var timeLeft = 100;
var wrongAnswer = -10;
var score = 0;

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
    if (element.textContent === questions[questionsIndex].answer) {
      score++;
      createDiv.textContent = "Good Job!";
    } else {
      timeLeft = timeLeft - penalty;
      createDiv.textContent = "Incorrect! The answer is " + questions[questionsIndex].answer;
    }
  }
  questionsIndex++;
}

function quizOver() {
  questionsDiv.innerHTML = "";
  currentTime.innerHTML = "";

  var createP = document.createElement("p");
  createP.setAttribute("id", "createP");

  questionsDiv.appendChild(createP);

  if (timeLeft >= 0) {
    var scoreInSeconds = timeLeft;
    var createP1 = document.createElement("p");
    createP.textContant = "Score: " + scoreInSeconds;

    questionsDiv.appendChild(createP1);
  }

  var createLabel = document.createElement("label");
  createLabel.setAttribute("id", "createLabel");
  createLabel.textContent = "Your name: ";

  questionsDiv.appendChild(createLabel);

  var createInput = document.createElement("input");
  createInput.setAttribute("type", "text");
  createInput.setAttribute("id", "name");
  createInput.textContent = "";

  questionsDiv.appendChild(createInput);

  var createSubmit = document.createElement("button");
  createSubmit.setAttribute("type", "submit");
  createSubmit.setAttribute("id", "Submit");
  createSubmit.textContent = "Submit";

  questionsDiv.appendChild(createSubmit);

  createSubmit.addEventListener("click", function () {
    var name = createInput.value;

    if (name === null) {
      console.log("Please enter a name");
    } else { 
      var finalScore = {
        name: name,
        score: score,
      };
      console.log(finalScore);
    }
  });
}