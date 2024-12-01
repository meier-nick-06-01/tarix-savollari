const questions = [
    { question: "O‘rta asrlarning boshlanishi qaysi yilga to‘g‘ri keladi?", answer: "476" },
    { question: "Buyuk Ipak yo‘li qaysi hududlarni bog‘lagan?", answer: "Sharq va G‘arb" },
    { question: "Amir Temur qaysi davlatning asoschisi edi?", answer: "Temuriylar" },
    { question: "Fransuz inqilobi qaysi yillarda sodir bo‘lgan?", answer: "1789-1799" },
    { question: "Uyg‘onish davri qaysi qit'ada boshlangan?", answer: "Yevropa" },
    { question: "Ikkinchi jahon urushi qachon tugagan?", answer: "1945" },
    { question: "G‘arbiy Rim imperiyasi qachon qulagan?", answer: "476" },
    { question: "O‘zbekiston mustaqillikka qachon erishgan?", answer: "1991" },
    { question: "Muhammad ibn Muso al-Xorazmiy qaysi fanlarning asoschisi hisoblanadi?", answer: "Algebra va algoritm" },
    { question: "Birinchi jahon urushi qaysi yillarda sodir bo‘lgan?", answer: "1914-1918" },
    { question: "O‘zbekistonning birinchi prezidenti kim edi?", answer: "Islom Karimov" },
    { question: "Rim imperiyasining poytaxti qaysi shahar edi?", answer: "Rim" },
    { question: "Fransuz inqilobida kim hukmron edi?", answer: "Napoleon Bonapart" },
    { question: "Egey dengizi qaysi ikki qit'a orasida joylashgan?", answer: "Yevropa va Osiyo" },
    { question: "Birinchi jahon urushida eng ko‘p jang qilgan davlatlardan biri kim edi?", answer: "Rossiya" },
    { question: "Chingizxon qaysi xalqning hukmdori edi?", answer: "Mo‘g‘ullar" },
    { question: "Yunoniston qaysi madaniyatni rivojlantirdi?", answer: "Antik yunon madaniyati" },
    { question: "Rim imperiyasining qulashi kimning hukmronligidan so‘ng sodir bo‘ldi?", answer: " Romulus Augustulus" },
    { question: "Qaysi inqilobdan so‘ng Sovet Ittifoqi tashkil topdi?", answer: "1917 " },
    { question: "Amerika Qo‘shma Shtatlari qaysi inqilobdan so‘ng mustaqil bo‘ldi?", answer: "1775-1783" }
];

// Tasodifiy tartibga solish (shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Savollarni aralashtirish
shuffleArray(questions);

// HTML elementlarini olish
const questionBox = document.getElementById("question-box");
const inputField = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-btn");
const resultBox = document.getElementById("result");
const scoreBox = document.getElementById("score-box");

// To'g'ri va noto'g'ri javoblarni hisoblash uchun o'zgaruvchilar
let correctCount = 0;
let incorrectCount = 0;
let currentQuestionIndex = 0;

// Savolni yangilash funksiyasi
function updateQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionBox.textContent = questions[currentQuestionIndex].question;
        inputField.value = "";
        resultBox.textContent = "";
    } else {
        // O'yin tugadi
        questionBox.textContent = "O'yin tugadi! Natijalaringiz:";
        resultBox.innerHTML = `
            <span class="correct">To'g'ri javoblar: ${correctCount}</span><br>
            <span class="incorrect">Noto'g'ri javoblar: ${incorrectCount}</span>
        `;
        inputField.style.display = "none";
        submitButton.style.display = "none";
    }
}

// Javobni tekshirish funksiyasi
function checkAnswer() {
    const userAnswer = inputField.value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        correctCount++;
        resultBox.textContent = "To'g'ri javob!";
        resultBox.className = "correct";
    } else {
        incorrectCount++;
        resultBox.textContent = `Noto'g'ri javob! To'g'ri javob: ${correctAnswer}`;
        resultBox.className = "incorrect";
    }

    currentQuestionIndex++;
    updateScore();
    updateQuestion();
}

// Natijalarni yangilash funksiyasi
function updateScore() {
    scoreBox.textContent = `To'g'ri: ${correctCount} | Noto'g'ri: ${incorrectCount}`;
}

// Dastur ishlashini boshlash
submitButton.addEventListener("click", checkAnswer);
updateQuestion();