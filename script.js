let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timer;
let questions = [];
let highScore = localStorage.getItem("highScore") || 0;
let startButton;
let quizBox;
let resultBox;
let questionElement;
let answersElement;
let timerElement;
let scoreElement;
let correctSound = new Audio("sounds/correct.mp3");
let incorrectSound = new Audio("sounds/incorrect.wav");

document.addEventListener("DOMContentLoaded", () => {
  quizBox = document.getElementById("quiz-box");
  resultBox = document.getElementById("result-box");
  questionElement = document.getElementById("question");
  answersElement = document.getElementById("answers");
  timerElement = document.getElementById("time");
  scoreElement = document.getElementById("score");
  startButton = document.getElementById("start-btn");



  async function fetchQuestions() {
    try {
      const res = await fetch("https://opentdb.com/api.php?amount=5&category=15&type=multiple");
      if (!res.ok) throw new Error("Too many requests");
      const data = await res.json();
      questions = data.results.map(q => ({
        question: q.question,
        answers: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
        correct: q.correct_answer
      }));
      loadQuestion();
    } catch (error) {
      console.warn("API limit reached. Using local questions.");
      questions = [
        {
          question: "Which game features a character named Master Chief?",
          answers: ["Halo", "Call of Duty", "Doom", "Gears of War"],
          correct: "Halo"
        },
        {
          question: "Which company developed the game 'The Witcher 3'?",
          answers: ["CD Projekt Red", "Ubisoft", "Bethesda", "Bioware"],
          correct: "CD Projekt Red"
        },
        {
          question: "In which game do you play as Geralt of Rivia?",
          answers: ["The Witcher", "Dark Souls", "Skyrim", "Cyberpunk 2077"],
          correct: "The Witcher"
        },
        {
          question: "Which game features the phrase 'Do a barrel roll'?",
          answers: ["Star Fox", "F-Zero", "Metroid", "Mario Kart"],
          correct: "Star Fox"
        },
        {
          question: "What is the name of the main character in The Legend of Zelda?",
          answers: ["Link", "Zelda", "Ganondorf", "Epona"],
          correct: "Link"
        }
      ];
      loadQuestion();
    }
  }

  startButton.addEventListener("click", startQuiz);
  fetchQuestions();
});

function startQuiz() {
  startButton.classList.add("hidden");
  currentQuestionIndex = 0;
  score = 0;
  resultBox.classList.add("hidden");
  quizBox.classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  resetState();
  if (currentQuestionIndex >= questions.length) {
    return endQuiz();
  }
  const questionData = questions[currentQuestionIndex];
  questionElement.innerHTML = questionData.question;
  questionData.answers.forEach(answer => {
    const li = document.createElement("li");
    li.textContent = answer;
    li.addEventListener("click", () => selectAnswer(li, answer === questionData.correct));
    answersElement.appendChild(li);
  });
  gsap.from("#quiz-box", { autoalpha: 0, y: 50, duration: 0.5 });
  startTimer();
}

function resetState() {
  answersElement.innerHTML = "";
  clearInterval(timer);
  timeLeft = 10;
  timerElement.textContent = timeLeft;
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function selectAnswer(element, isCorrect) {
  clearInterval(timer);
  if (isCorrect) {
    score++;
    element.style.backgroundColor = "green";
    correctSound.play();
  } else {
    element.style.backgroundColor = "red";
    incorrectSound.play();
  }
  gsap.to(element, { scale: 1.1, duration: 0.2, yoyo: true, repeat: 1 });
  setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion();
}

function endQuiz() {
  quizBox.classList.add("hidden");
  startButton.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreElement.textContent = `Your score: ${score} / ${questions.length}`;

  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
  }

  gsap.from("#result-box", { autoalpha: 0, scale: 0.5, duration: 0.5 });
}
