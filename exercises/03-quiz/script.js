const questions = [
  {
    question: "2+1=?",
    options: ["1", "2", "3", "4"],
    answer: "3"
  },
  {
    question: "2+3=?",
    options: ["1", "2", "3", "5"],
    answer: "5"
  },
  {
    question: "8+2=?",
    options: ["1", "10", "3", "4"],
    answer: "10"
  },
  {
    question: "2+9=?",
    options: ["11", "2", "3", "4"],
    answer: "11"
  },
  {
    question: "4+9=?",
    options: ["1", "2", "13", "4"],
    answer: "13"
  },
  {
    question: "2-2=?",
    options: ["1", "32", "0", "4"],
    answer: "0"
  },
  {
    question: "10+30=?",
    options: ["12", "24", "35", "40"],
    answer: "40"
  },
  {
    question: "23+27=?",
    options: ["1", "50", "3", "4"],
    answer: "50"
  },
  {
    question: "5-3=?",
    options: ["1", "2", "3", "4"],
    answer: "2"
  },
  {
    question: "6-2=?",
    options: ["9", "12", "3", "4"],
    answer: "4"
  },
];

const quizList = document.getElementById("quizList");
const quizForm = document.getElementById("quizForm");
const quizResult = document.getElementById("quizResult");
const quizProgress = document.getElementById("quizProgress");
const resetButton = document.getElementById("resetQuiz");

function renderQuiz() {
  quizList.innerHTML = questions.map((item, questionIndex) => {
    const options = item.options.map((option, optionIndex) => {
      const id = `q${questionIndex}-option${optionIndex}`;
      return `
        <label class="quiz-option" for="${id}">
          <input type="radio" id="${id}" name="question-${questionIndex}" value="${option}">
          <span>${option}</span>
        </label>
      `;
    }).join("");

    return `
      <article class="quiz-question">
        <h3>${questionIndex + 1}. ${item.question}</h3>
        <div class="quiz-options">${options}</div>
      </article>
    `;
  }).join("");
}

function updateProgress() {
  const answered = questions.filter((_, index) => {
    return quizForm.querySelector(`input[name="question-${index}"]:checked`);
  }).length;

  quizProgress.textContent = `Answered: ${answered}/${questions.length}`;
}

function calculateScore() {
  let score = 0;

  questions.forEach((item, index) => {
    const selected = quizForm.querySelector(`input[name="question-${index}"]:checked`);
    if (selected && selected.value === item.answer) {
      score += 1;
    }
  });

  return score;
}

quizForm.addEventListener("change", updateProgress);

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const unanswered = questions.findIndex((_, index) => {
    return !quizForm.querySelector(`input[name="question-${index}"]:checked`);
  });

  if (unanswered !== -1) {
    quizResult.className = "quiz-result warning";
    quizResult.textContent = `Please answer question ${unanswered + 1} before submitting.`;
    return;
  }

  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);

  quizResult.className = "quiz-result success";
  quizResult.innerHTML = `
    <h2>Your Score: ${score}/${questions.length}</h2>
    <p>You scored ${percentage}%. ${percentage >= 70 ? "Excellent work." : "Revise the basics and try again."}</p>
  `;
});

resetButton.addEventListener("click", () => {
  quizForm.reset();
  quizResult.className = "quiz-result";
  quizResult.textContent = "";
  updateProgress();
});

renderQuiz();
updateProgress();
