const quizDB = [
  {
    question: "Q1: What is the full form of HTML?",
    a: "Hello to my Land",
    b: "Hey text Markup Language",
    c: "Hypertext Makeup Language",
    d: "Hypertext Markup Language",
    ans: "ans4",
  },
  {
    question: "Q2: What is the full form of CSS?",
    a: "Cascading Style sheet",
    b: "Cascading Style sheep",
    c: "Cartoon Style sheets",
    d: "Cascading Super sheet",
    ans: "ans1",
  },
  {
    question: "Q3: What is the full form of HTTP?",
    a: "HyperText tranfer product",
    b: "HyperText text protocol",
    c: "Hey transfer protocol",
    d: "Hypertext transfer protocol",
    ans: "ans4",
  },
  {
    question: "Q4: What is the full form of JS?",
    a: "Jamaica Language",
    b: "Jamanast Script",
    c: "Junior Language",
    d: "JavaScript",
    ans: "ans4",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submitBtn = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerHTML = questionList.question;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};

loadQuestion();

const getCheckvalue = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deSelect = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submitBtn.addEventListener("click", () => {
  let answerChecked = getCheckvalue();
  console.log(answerChecked);

  if (answerChecked === quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;

  deSelect();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
    <h3>You scored ${score}/${quizDB.length} </h3>
    <button class="btn" onclick="location.reload()">Play Again</button>

    `;
    showScore.classList.remove("scoreArea");
    submitBtn.classList.add("active");
  }
});
