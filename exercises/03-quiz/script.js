const questionsPerTest = 10;

const questionBank = [
  { question: "2 + 1 = ?", options: ["1", "2", "3", "4"], answer: "3" },
  { question: "2 + 3 = ?", options: ["1", "2", "3", "5"], answer: "5" },
  { question: "8 + 2 = ?", options: ["1", "10", "3", "4"], answer: "10" },
  { question: "2 + 9 = ?", options: ["11", "2", "3", "4"], answer: "11" },
  { question: "4 + 9 = ?", options: ["1", "2", "13", "4"], answer: "13" },
  { question: "2 - 2 = ?", options: ["1", "32", "0", "4"], answer: "0" },
  { question: "10 + 30 = ?", options: ["12", "24", "35", "40"], answer: "40" },
  { question: "23 + 27 = ?", options: ["1", "50", "3", "4"], answer: "50" },
  { question: "5 - 3 = ?", options: ["1", "2", "3", "4"], answer: "2" },
  { question: "6 - 2 = ?", options: ["9", "12", "3", "4"], answer: "4" },
  { question: "12 + 8 = ?", options: ["18", "19", "20", "21"], answer: "20" },
  { question: "15 - 7 = ?", options: ["6", "7", "8", "9"], answer: "8" },
  { question: "9 + 6 = ?", options: ["14", "15", "16", "17"], answer: "15" },
  { question: "20 - 5 = ?", options: ["10", "15", "20", "25"], answer: "15" },
  { question: "7 + 8 = ?", options: ["13", "14", "15", "16"], answer: "15" },
  { question: "30 - 12 = ?", options: ["16", "18", "20", "22"], answer: "18" },
  { question: "11 + 11 = ?", options: ["20", "21", "22", "23"], answer: "22" },
  { question: "18 - 9 = ?", options: ["7", "8", "9", "10"], answer: "9" },
  { question: "14 + 6 = ?", options: ["18", "20", "22", "24"], answer: "20" },
  { question: "25 - 10 = ?", options: ["5", "10", "15", "20"], answer: "15" },
  { question: "3 x 4 = ?", options: ["7", "10", "12", "14"], answer: "12" },
  { question: "5 x 6 = ?", options: ["25", "30", "35", "40"], answer: "30" },
  { question: "7 x 3 = ?", options: ["18", "20", "21", "24"], answer: "21" },
  { question: "8 x 2 = ?", options: ["12", "14", "16", "18"], answer: "16" },
  { question: "9 x 5 = ?", options: ["40", "45", "50", "55"], answer: "45" },
  { question: "6 x 6 = ?", options: ["30", "36", "42", "48"], answer: "36" },
  { question: "4 x 8 = ?", options: ["24", "28", "32", "36"], answer: "32" },
  { question: "10 x 7 = ?", options: ["60", "70", "80", "90"], answer: "70" },
  { question: "12 x 2 = ?", options: ["20", "22", "24", "26"], answer: "24" },
  { question: "11 x 3 = ?", options: ["30", "31", "32", "33"], answer: "33" },
  { question: "20 / 4 = ?", options: ["4", "5", "6", "7"], answer: "5" },
  { question: "18 / 3 = ?", options: ["5", "6", "7", "8"], answer: "6" },
  { question: "36 / 6 = ?", options: ["4", "5", "6", "7"], answer: "6" },
  { question: "45 / 5 = ?", options: ["7", "8", "9", "10"], answer: "9" },
  { question: "64 / 8 = ?", options: ["6", "7", "8", "9"], answer: "8" },
  { question: "81 / 9 = ?", options: ["8", "9", "10", "11"], answer: "9" },
  { question: "100 / 10 = ?", options: ["5", "10", "15", "20"], answer: "10" },
  { question: "72 / 8 = ?", options: ["7", "8", "9", "10"], answer: "9" },
  { question: "56 / 7 = ?", options: ["6", "7", "8", "9"], answer: "8" },
  { question: "48 / 6 = ?", options: ["6", "7", "8", "9"], answer: "8" },
  { question: "HTML stands for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language", "Home Text Markup Language"], answer: "Hyper Text Markup Language" },
  { question: "What is the SI unit of force?", options: ["Joule", "Newton", "Pascal", "Watt"], answer: "Newton" },
  { question: "Which planet has the strongest gravitational pull in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
  { question: "Who discovered the law of gravitation?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], answer: "Isaac Newton" },
  { question: "Speed is defined as:", options: ["Distance × Time", "Distance / Time", "Time / Distance", "Mass × Velocity"], answer: "Distance / Time" },
  { question: "Which type of mirror is used in vehicle rear-view mirrors?", options: ["Plane mirror", "Convex mirror", "Concave mirror", "Parabolic mirror"], answer: "Convex mirror" },
  { question: "The SI unit of electric current is:", options: ["Volt", "Ohm", "Ampere", "Watt"], answer: "Ampere" },
  { question: "Which color of light has the longest wavelength?", options: ["Blue", "Green", "Red", "Violet"], answer: "Red" },
  { question: "What is the acceleration due to gravity on Earth?", options: ["9.8 m/s²", "8.9 m/s²", "10.5 m/s²", "7.2 m/s²"], answer: "9.8 m/s²" },
  { question: "Energy cannot be created or destroyed. This is known as:", options: ["Newton's Law", "Law of Conservation of Energy", "Ohm's Law", "Hooke's Law"], answer: "Law of Conservation of Energy" },
  { question: "The SI unit of power is:", options: ["Joule", "Newton", "Watt", "Volt"], answer: "Watt" },

  // ===================== CHEMISTRY =====================
  { question: "What is the chemical symbol for Gold?", options: ["Ag", "Au", "Gd", "Go"], answer: "Au" },
  { question: "Water is made up of which elements?", options: ["Hydrogen and Oxygen", "Hydrogen and Nitrogen", "Oxygen and Carbon", "Carbon and Hydrogen"], answer: "Hydrogen and Oxygen" },
  { question: "What is the pH value of pure water?", options: ["5", "6", "7", "8"], answer: "7" },
  { question: "Which gas is released during photosynthesis?", options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"], answer: "Oxygen" },
  { question: "Which acid is present in lemons?", options: ["Acetic Acid", "Citric Acid", "Sulfuric Acid", "Hydrochloric Acid"], answer: "Citric Acid" },
  { question: "The atomic number of Carbon is:", options: ["4", "6", "8", "12"], answer: "6" },
  { question: "NaCl is commonly known as:", options: ["Sugar", "Salt", "Baking Soda", "Lime"], answer: "Salt" },
  { question: "Which element is needed for breathing?", options: ["Nitrogen", "Oxygen", "Helium", "Hydrogen"], answer: "Oxygen" },
  { question: "Which gas turns lime water milky?", options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"], answer: "Carbon Dioxide" },
  { question: "The lightest element in the periodic table is:", options: ["Helium", "Hydrogen", "Lithium", "Carbon"], answer: "Hydrogen" },

  // ===================== BIOLOGY =====================
  { question: "What is the largest organ in the human body?", options: ["Heart", "Skin", "Liver", "Brain"], answer: "Skin" },
  { question: "Which part of the plant performs photosynthesis?", options: ["Root", "Stem", "Leaf", "Flower"], answer: "Leaf" },
  { question: "How many chambers does a human heart have?", options: ["2", "3", "4", "5"], answer: "4" },
  { question: "Which blood cells help fight infections?", options: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"], answer: "White Blood Cells" },
  { question: "Which vitamin is produced when skin is exposed to sunlight?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], answer: "Vitamin D" },
  { question: "What is the basic unit of life?", options: ["Organ", "Cell", "Tissue", "Organism"], answer: "Cell" },
  { question: "Which organ pumps blood throughout the body?", options: ["Lungs", "Brain", "Heart", "Kidney"], answer: "Heart" },
  { question: "Humans have how many pairs of chromosomes?", options: ["21", "22", "23", "24"], answer: "23" },
  { question: "Which gas do humans breathe in?", options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"], answer: "Oxygen" },
  { question: "Which organ filters blood to produce urine?", options: ["Liver", "Heart", "Kidney", "Lungs"], answer: "Kidney" },

  // ===================== GENERAL KNOWLEDGE =====================
  { question: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Chennai", "Kolkata"], answer: "New Delhi" },
  { question: "Which is the largest ocean in the world?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
  { question: "Who is known as the Father of the Nation in India?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "B. R. Ambedkar"], answer: "Mahatma Gandhi" },
  { question: "Which is the tallest mountain in the world?", options: ["K2", "Kanchenjunga", "Mount Everest", "Makalu"], answer: "Mount Everest" },
  { question: "Which continent is known as the 'Dark Continent'?", options: ["Asia", "Europe", "Africa", "Australia"], answer: "Africa" },
  { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
  { question: "Which is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Leopard"], answer: "Tiger" },
  { question: "Which is the largest desert in the world?", options: ["Sahara", "Gobi", "Kalahari", "Thar"], answer: "Sahara" },
  { question: "What is the currency of Japan?", options: ["Won", "Yuan", "Yen", "Ringgit"], answer: "Yen" },
  { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Mercury", "Jupiter"], answer: "Mars" },

  // ===================== MATHEMATICS =====================
  { question: "15 + 18 = ?", options: ["31", "32", "33", "34"], answer: "33" },
  { question: "12 × 8 = ?", options: ["84", "96", "88", "92"], answer: "96" },
  { question: "81 ÷ 9 = ?", options: ["8", "9", "10", "11"], answer: "9" },
  { question: "7² = ?", options: ["42", "47", "49", "56"], answer: "49" },
  { question: "√144 = ?", options: ["10", "11", "12", "13"], answer: "12" },
  { question: "25% of 200 = ?", options: ["25", "40", "50", "75"], answer: "50" },
  { question: "9 × 9 = ?", options: ["72", "81", "90", "99"], answer: "81" },
  { question: "100 - 37 = ?", options: ["61", "62", "63", "64"], answer: "63" },
  { question: "18 × 5 = ?", options: ["80", "85", "90", "95"], answer: "90" },
  { question: "144 ÷ 12 = ?", options: ["10", "11", "12", "13"], answer: "12" },

  // ===================== POLITICAL SCIENCE =====================
  { question: "How many fundamental rights are guaranteed by the Constitution of India?", options: ["5", "6", "7", "8"], answer: "6" },
  { question: "Who is the head of the Indian Government?", options: ["President", "Prime Minister", "Chief Justice", "Governor"], answer: "Prime Minister" },
  { question: "The Constitution of India came into effect on:", options: ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1950"], answer: "26 January 1950" },
  { question: "India is a:", options: ["Monarchy", "Republic", "Dictatorship", "Empire"], answer: "Republic" },
  { question: "Who appoints the Prime Minister of India?", options: ["Chief Justice", "President", "Vice President", "Governor"], answer: "President" },
  { question: "The Indian Parliament consists of:", options: ["One House", "Two Houses", "Three Houses", "Four Houses"], answer: "Two Houses" },
  { question: "Which body conducts elections in India?", options: ["Supreme Court", "Election Commission", "Parliament", "Finance Commission"], answer: "Election Commission" },
  { question: "The lower house of Parliament is called:", options: ["Rajya Sabha", "Lok Sabha", "Vidhan Sabha", "Legislative Council"], answer: "Lok Sabha" },
  { question: "Who is known as the Father of the Indian Constitution?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Sardar Patel"], answer: "B. R. Ambedkar" },
  { question: "India is a federal country with:", options: ["Unitary Government", "Federal System", "Military Rule", "Absolute Monarchy"], answer: "Federal System" },

  // ===================== HISTORY =====================
  { question: "Who was the first Prime Minister of independent India?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad"], answer: "Jawaharlal Nehru" },
  { question: "The Battle of Plassey was fought in:", options: ["1757", "1761", "1857", "1947"], answer: "1757" },
  { question: "Who discovered the sea route to India?", options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Marco Polo"], answer: "Vasco da Gama" },
  { question: "Who built the Taj Mahal?", options: ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"], answer: "Shah Jahan" },
  { question: "India became independent in:", options: ["1945", "1946", "1947", "1950"], answer: "1947" },
  { question: "Who was known as the Iron Man of India?", options: ["Subhas Chandra Bose", "Bhagat Singh", "Sardar Vallabhbhai Patel", "Rajendra Prasad"], answer: "Sardar Vallabhbhai Patel" },
  { question: "The Quit India Movement was launched in:", options: ["1930", "1942", "1947", "1950"], answer: "1942" },
  { question: "Which civilization was famous for Mohenjo-daro and Harappa?", options: ["Roman", "Egyptian", "Indus Valley", "Greek"], answer: "Indus Valley" },
  { question: "Who was the founder of the Maurya Empire?", options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Samudragupta"], answer: "Chandragupta Maurya" },
  { question: "Who gave the slogan 'Jai Hind'?", options: ["Mahatma Gandhi", "Subhas Chandra Bose", "Bhagat Singh", "Bal Gangadhar Tilak"], answer: "Subhas Chandra Bose" },

  { question: "CSS stands for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Sheet System", "Color Style Script"], answer: "Cascading Style Sheets" },
  { question: "Which CSS property changes text color?", options: ["font-size", "color", "background", "border"], answer: "color" },
  { question: "Which CSS property changes background color?", options: ["background-color", "text-color", "font-color", "box-color"], answer: "background-color" },
  { question: "Which CSS property changes font size?", options: ["font-weight", "font-style", "font-size", "text-size"], answer: "font-size" },
  { question: "Which CSS property adds space inside an element?", options: ["margin", "padding", "border", "gap"], answer: "padding" },
  { question: "Which CSS property adds space outside an element?", options: ["margin", "padding", "outline", "display"], answer: "margin" },
  { question: "Which CSS value makes a flex container?", options: ["display: grid", "display: flex", "position: flex", "float: flex"], answer: "display: flex" },
  { question: "Which CSS property controls rounded corners?", options: ["corner", "border-radius", "radius", "round"], answer: "border-radius" },
  { question: "Which CSS selector targets an id?", options: [".box", "#box", "box", "*box"], answer: "#box" },
  { question: "Which CSS selector targets a class?", options: [".menu", "#menu", "menu", "@menu"], answer: ".menu" },
  { question: "JavaScript is mainly used to add what to webpages?", options: ["Interactivity", "Only images", "Only database tables", "Only fonts"], answer: "Interactivity" },
  { question: "Which keyword declares a constant in JavaScript?", options: ["let", "var", "const", "fixed"], answer: "const" },
  { question: "Which method selects an element by id?", options: ["getElementById", "queryId", "selectId", "findById"], answer: "getElementById" },
  { question: "Which method prints output in browser console?", options: ["console.log", "print.log", "document.print", "log.console"], answer: "console.log" },
  { question: "Which event happens when a button is clicked?", options: ["change", "submit", "click", "load"], answer: "click" },
  { question: "Which symbol is used for strict equality in JavaScript?", options: ["=", "==", "===", "!="], answer: "===" },
  { question: "Which JavaScript type stores true or false?", options: ["String", "Number", "Boolean", "Array"], answer: "Boolean" },
  { question: "Which JavaScript structure stores multiple values?", options: ["Array", "Style", "Tag", "Selector"], answer: "Array" },
  { question: "Which method adds an item to the end of an array?", options: ["push", "pop", "shift", "slice"], answer: "push" },
  { question: "Which method removes the last item from an array?", options: ["push", "pop", "unshift", "map"], answer: "pop" },
  { question: "PHP code usually starts with?", options: ["<php>", "<?php", "<script>", "<?js"], answer: "<?php" },
  { question: "Which PHP variable prefix is correct?", options: ["@", "#", "$", "&"], answer: "$" },
  { question: "Which database is commonly used with PHP?", options: ["MySQL", "Photoshop", "Excel", "PowerPoint"], answer: "MySQL" },
  { question: "Which SQL command gets records from a table?", options: ["SELECT", "GET", "READ", "SHOWALL"], answer: "SELECT" },
  { question: "Which SQL command adds a new record?", options: ["ADD", "INSERT", "PUSH", "CREATE ROW"], answer: "INSERT" },
  { question: "Which SQL command changes existing records?", options: ["CHANGE", "ALTER", "UPDATE", "MODIFY ROW"], answer: "UPDATE" },
  { question: "Which SQL command removes records?", options: ["DELETE", "REMOVE", "DROP ROW", "CLEAR"], answer: "DELETE" },
  { question: "Which SQL clause filters records?", options: ["WHERE", "ORDER", "GROUP", "LIMIT"], answer: "WHERE" },
  { question: "Which SQL command creates a table?", options: ["MAKE TABLE", "CREATE TABLE", "NEW TABLE", "BUILD TABLE"], answer: "CREATE TABLE" },
  { question: "Which SQL clause sorts records?", options: ["WHERE", "ORDER BY", "SORT WITH", "FILTER BY"], answer: "ORDER BY" },
  { question: "HTTP is used for?", options: ["Web communication", "Image editing", "Typing documents", "Playing audio only"], answer: "Web communication" },
  { question: "Which protocol is the secure version of HTTP?", options: ["FTP", "SMTP", "HTTPS", "SSH"], answer: "HTTPS" },
  { question: "What does URL stand for?", options: ["Uniform Resource Locator", "User Record Link", "Universal Router Line", "Uniform Result Label"], answer: "Uniform Resource Locator" },
  { question: "Which file is commonly the homepage?", options: ["home.css", "index.html", "main.js", "style.php"], answer: "index.html" },
  { question: "Which file extension is used for CSS?", options: [".html", ".css", ".js", ".php"], answer: ".css" },
  { question: "Which file extension is used for JavaScript?", options: [".java", ".js", ".script", ".jsx"], answer: ".js" },
  { question: "Which file extension is used for PHP?", options: [".php", ".html", ".sql", ".css"], answer: ".php" },
  { question: "Which file extension is used for SQL scripts?", options: [".db", ".mysql", ".sql", ".table"], answer: ".sql" },
  { question: "Which browser tool helps inspect HTML and CSS?", options: ["Developer Tools", "Calculator", "Paint", "Terminal only"], answer: "Developer Tools" },
  { question: "Which HTML attribute gives alternative image text?", options: ["src", "alt", "href", "name"], answer: "alt" },
  { question: "Which form method sends data in the URL?", options: ["GET", "POST", "SEND", "PUSH"], answer: "GET" },
  { question: "Which form method sends data in the request body?", options: ["GET", "POST", "VIEW", "LINK"], answer: "POST" },
  { question: "Which tag is used for a form?", options: ["<input>", "<label>", "<form>", "<button>"], answer: "<form>" },
  { question: "Which element creates a clickable form button?", options: ["<button>", "<click>", "<submit>", "<press>"], answer: "<button>" },
  { question: "Which CSS layout is good for rows and columns?", options: ["grid", "shadow", "font", "color"], answer: "grid" },
  { question: "Which JavaScript method listens for events?", options: ["addEventListener", "listenEvent", "onEventAdd", "eventClick"], answer: "addEventListener" },
  { question: "Which value hides an element in CSS?", options: ["display: none", "display: show", "visible: yes", "hide: true"], answer: "display: none" },
  { question: "Which tag contains visible page content?", options: ["<head>", "<body>", "<meta>", "<title>"], answer: "<body>" },
  { question: "Which HTML tag sets the page title in the browser tab?", options: ["<title>", "<h1>", "<header>", "<meta>"], answer: "<title>" },
  { question: "Which attribute is used to uniquely identify an HTML element?", options: ["class", "id", "style", "name"], answer: "id" }
];

const quizList = document.getElementById("quizList");
const quizForm = document.getElementById("quizForm");
const quizResult = document.getElementById("quizResult");
const quizProgress = document.getElementById("quizProgress");
const resetButton = document.getElementById("resetQuiz");

let currentQuestions = [];
let previousQuestionIds = [];

function shuffleQuestions(items) {
  return [...items]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function questionIdsMatch(firstSet, secondSet) {
  const firstIds = firstSet.map((item) => item.id).sort().join(",");
  const secondIds = secondSet.map((item) => item.id).sort().join(",");
  return firstIds === secondIds;
}

function pickQuestions() {
  const bankWithIds = questionBank.map((item, index) => ({ ...item, id: index }));
  let nextQuestions = shuffleQuestions(bankWithIds).slice(0, questionsPerTest);
  let attempts = 0;

  while (questionIdsMatch(nextQuestions, previousQuestionIds) && attempts < 5) {
    nextQuestions = shuffleQuestions(bankWithIds).slice(0, questionsPerTest);
    attempts += 1;
  }

  previousQuestionIds = nextQuestions;
  currentQuestions = nextQuestions;
}

function renderQuiz() {
  quizList.innerHTML = currentQuestions.map((item, questionIndex) => {
    const options = item.options.map((option, optionIndex) => {
      const id = `q${questionIndex}-option${optionIndex}`;
      return `
        <label class="quiz-option" for="${id}">
          <input type="radio" id="${id}" name="question-${questionIndex}" value="${optionIndex}">
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
  const answered = currentQuestions.filter((_, index) => {
    return quizForm.querySelector(`input[name="question-${index}"]:checked`);
  }).length;

  quizProgress.textContent = `Answered: ${answered}/${currentQuestions.length}`;
}

function calculateScore() {
  let score = 0;

  currentQuestions.forEach((item, index) => {
    const selected = quizForm.querySelector(`input[name="question-${index}"]:checked`);
    if (selected && item.options[Number(selected.value)] === item.answer) {
      score += 1;
    }
  });

  return score;
}

function showAnswerHighlights() {
  currentQuestions.forEach((item, questionIndex) => {
    const selected = quizForm.querySelector(`input[name="question-${questionIndex}"]:checked`);
    const correctIndex = item.options.indexOf(item.answer);
    const options = quizForm.querySelectorAll(`input[name="question-${questionIndex}"]`);

    options.forEach((option) => {
      const optionLabel = option.closest(".quiz-option");
      const optionIndex = Number(option.value);

      if (optionIndex === correctIndex) {
        optionLabel.classList.add("correct-option");
      }

      if (selected && option === selected && optionIndex !== correctIndex) {
        optionLabel.classList.add("wrong-option");
      }

      option.disabled = true;
    });
  });
}

function startNewTest() {
  quizForm.reset();
  quizResult.className = "quiz-result";
  quizResult.textContent = "";
  pickQuestions();
  renderQuiz();
  updateProgress();
}

quizForm.addEventListener("change", updateProgress);

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const unanswered = currentQuestions.findIndex((_, index) => {
    return !quizForm.querySelector(`input[name="question-${index}"]:checked`);
  });

  if (unanswered !== -1) {
    quizResult.className = "quiz-result warning";
    quizResult.textContent = `Please answer question ${unanswered + 1} before submitting.`;
    return;
  }

  const score = calculateScore();
  const percentage = Math.round((score / currentQuestions.length) * 100);

  quizResult.className = "quiz-result success";
  quizResult.innerHTML = `
    <h2>Your Score: ${score}/${currentQuestions.length}</h2>
    <p>You scored ${percentage}%. ${percentage >= 70 ? "Excellent work." : "Revise the basics and try again."}</p>
  `;
  showAnswerHighlights();
});

resetButton.addEventListener("click", startNewTest);

startNewTest();
