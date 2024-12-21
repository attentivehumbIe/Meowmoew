let currentQuestion = 1;
const totalQuestions = 4;

function checkAnswer(selectedImage, isCorrect) {
  if (isCorrect) {
    alert("Правильно! Переход к следующему вопросу.");
    if (currentQuestion < totalQuestions) {
      currentQuestion++;
      document.getElementById(`question-${currentQuestion - 1}`).style.display = "none";
      document.getElementById(`question-${currentQuestion}`).style.display = "block";
    } else {
      document.getElementById('result').style.display = "block";
    }
  } else {
    alert("Неправильный ответ, попробуй снова.");
  }
}

// Скрываем все вопросы кроме первого
for (let i = 2; i <= totalQuestions; i++) {
  document.getElementById(`question-${i}`).style.display = "none";
}
