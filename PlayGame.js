// 1-я игра Случайное число

function startGame1() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Загаданное число:", randomNumber);

  alert("Угадай число от 1 до 100\nНажмите 'Отмена' для выхода из игры");

  while (true) {
    const input = prompt(`Введите число от 1 до 100`);

    // Обработка отмены
    if (input === null) {
      alert("Игра окончена! Загаданное число было: " + randomNumber);
      return;
    }

    // Проверка на пустую строку
    if (input.trim() === "") {
      alert("Вы ничего не ввели! Попробуйте снова.");
      continue;
    }

    const userNumber = Number(input);

    // Проверка на число
    if (isNaN(userNumber)) {
      alert("Пожалуйста, введите число!");
      continue;
    }

    // Проверка диапазона
    if (userNumber < 1 || userNumber > 100) {
      alert("Число должно быть от 1 до 100!");
      continue;
    }

    // Проверка угадывания
    if (userNumber === randomNumber) {
      alert(`🎉 Поздравляем!!! Вы угадали число ${randomNumber}!`);
      break;
    } else if (userNumber > randomNumber) {
      alert("⬇️ Твое число больше загаданного, попробуй еще!");
    } else {
      alert("⬆️ Твое число меньше загаданного, попробуй еще!");
    }
  }

  // Предложение сыграть еще раз
  if (confirm("Хотите сыграть еще раз?")) {
    startGame1();
  }
}

// 2-я игра Простая арифметика
function Game2task() {
  const operations = ["+", "-", "*", "/"];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  let num1, num2, answer;

  switch (operation) {
    case "+":
      num1 = Math.floor(Math.random() * 20) + 1;
      num2 = Math.floor(Math.random() * 20) + 1;
      answer = num1 + num2;
      break;

    case "-":
      num1 = Math.floor(Math.random() * 20) + 10;
      num2 = Math.floor(Math.random() * num1) + 1;
      answer = num1 - num2;
      break;

    case "*":
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      answer = num1 * num2;
      break;

    case "/":
      num2 = Math.floor(Math.random() * 10) + 1;
      answer = Math.floor(Math.random() * 10) + 1;
      num1 = num2 * answer;
      break;
  }

  return {
    question: `${num1} ${operation} ${num2}`,
    answer: answer,
  };
}

function startGame2() {
  const problem = Game2task();
  const userAnswer = prompt(`Решите пример: ${problem.question}`);

  if (userAnswer === null) {
    alert("Игра окончена!");
    return;
  }

  const numericAnswer = parseFloat(userAnswer);

  if (isNaN(numericAnswer)) {
    alert("Пожалуйста, введите число!");
  } else if (Math.abs(numericAnswer - problem.answer) < 0.001) {
    alert("Правильно! Молодец!");
  } else {
    alert(`Неправильно. Правильный ответ: ${problem.answer}`);
  }

  if (confirm("Хотите сыграть еще раз?")) {
    startGame2();
  } else {
    alert("Спасибо за игру!");
  }
}

// 3-я игра Переверни текст

function startGame3() {
  const userText = prompt("Введите текст, который нужно перевернуть:");

  if (userText === null) {
    return;
  }

  if (userText.trim() === "") {
    alert("Вы не ввели текст! Попробуйте снова.");
    return;
  }

  const reversedText = userText.split("").reverse().join("");

  alert(`Оригинальный текст: ${userText}\nПеревернутый текст: ${reversedText}`);
}

// 4-я игра Камень, ножницы, бумага

function startGame4() {
  let playAgain = true;

  while (playAgain) {
    const choices = ["камень", "ножницы", "бумага"];

    let userChoice;
    while (true) {
      userChoice = prompt("Выберите: камень, ножницы или бумага");
      if (userChoice === null) {
        alert("Игра прервана");
        return;
      }
      userChoice = userChoice.toLowerCase().trim();
      if (choices.includes(userChoice)) break;
      alert(
        "Некорректный выбор! Пожалуйста, выберите: камень, ножницы или бумага"
      );
    }

    // Выбор компьютера
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Определение победителя
    let result;

    if (userChoice === computerChoice) {
      result = "Ничья!";
    } else if (
      (userChoice === "камень" && computerChoice === "ножницы") ||
      (userChoice === "ножницы" && computerChoice === "бумага") ||
      (userChoice === "бумага" && computerChoice === "камень")
    ) {
      result = "Вы победили!";
    } else {
      result = "Компьютер победил!";
    }

    // Вывод результата
    alert(
      `
РЕЗУЛЬТАТ ИГРЫ

 Вы: ${userChoice}
Компьютер: ${computerChoice}

 ${result}

Хотите сыграть еще раз?
        `.trim()
    );

    playAgain = confirm("Сыграем еще раз?");
  }

  alert("Спасибо за игру! ");
}

// 5 -я игра
const quiz = [
  {
    question: "Какой цвет неба?",
    options: ["1. Красный", "2. Синий", "3. Зеленый"],
    correctAnswer: 2, // номер правильного ответа
  },
  {
    question: "Сколько дней в неделе?",
    options: ["1. Шесть", "2. Семь", "3. Восемь"],
    correctAnswer: 2,
  },
  {
    question: "Сколько у человека пальцев на одной руке?",
    options: ["1. Четыре", "2. Пять", "3. Шесть"],
    correctAnswer: 2,
  },
];

function startGame5() {
  let correctAnswers = 0;

  for (let i = 0; i < quiz.length; i++) {
    const currentQuestion = quiz[i];

    let questionText = `Вопрос ${i + 1}/${quiz.length}:\n${
      currentQuestion.question
    }\n\n`;
    questionText += currentQuestion.options.join("\n");
    questionText += "\n\nВведите номер правильного ответа:";

    const userAnswer = parseInt(prompt(questionText));

    if (userAnswer === currentQuestion.correctAnswer) {
      correctAnswers++;
      alert("Правильно!");
    } else {
      alert(`Неправильно. Правильный ответ: ${currentQuestion.correctAnswer}`);
    }
  }

  showQuizResult(correctAnswers);
}

function showQuizResult(correctAnswers) {
  const totalQuestions = quiz.length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  let resultMessage = `ВИКТОРИНА ЗАВЕРШЕНА!\n\n`;
  resultMessage += `Правильных ответов: ${correctAnswers} из ${totalQuestions}\n`;
  resultMessage += `Процент правильных ответов: ${percentage}%\n\n`;

  // Добавляем оценку в зависимости от результата
  if (correctAnswers === totalQuestions) {
    resultMessage += " Отлично! Вы отлично ответили на все вопросы!";
  } else if (correctAnswers >= totalQuestions / 2) {
    resultMessage += "Хороший результат!";
  } else {
    resultMessage += " Попробуйте еще раз!";
  }

  alert(resultMessage);
}

// 6-я игра

// Функция для генерации случайного цвета в формате HEX
function getRandomColor() {
  const hexChars  = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexChars [Math.floor(Math.random() * 16)];
  }
  return color;
}


// Основная функция игры
const backgroundColorEL = document.querySelector("body");
function startGame6() {
  alert(
    " Добро пожаловать в Генератор случайных цветов!\n\nНажимайте OK для смены цвета фона.\nНажмите Отмена для выхода."
  );

  let continueGame = true;

  while (continueGame) {
    // Спрашиваем пользователя, хочет ли он сменить цвет
    const userResponse = confirm("Хотите сменить цвет фона?");

    if (userResponse) {
      // Генерируем случайный цвет
      const randomColor = getRandomColor();

      // Меняем цвет фона страницы
      backgroundColorEL.style.backgroundColor = randomColor;

      // Показываем информацию о цвете
      alert(` Новый цвет фона: ${randomColor}\n\nHEX: ${randomColor}`);
    } else {
      continueGame = false;
      alert("Спасибо за игру! \nПоследний цвет остался на фоне.");
    }
  }
}

// Анимация полосы
function duplicateStripeContent() {
  const stripe = document.querySelector(".stripe");
  if (stripe) {
    // Сохраняем оригинальный HTML
    const originalContent = stripe.innerHTML;
    // Дублируем содержимое
    stripe.innerHTML += originalContent;
    // Устанавливаем ширину равную двум оригиналам
    stripe.style.width = 3220 * 2 + "px";
  }
}






const goBtnEl = document.querySelector(".main__button");
function scrollToTarget() {
    // Определяем ширину экрана
    const isMobile = window.innerWidth <= 1402; // 768px - обычный брейкпоинт для мобильных
    
    const targetId = isMobile ? 'mobile-target' : 'desktop-target';
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        // Плавный скролл с учетом header'а (если есть)
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const offset = headerHeight + 20; // Дополнительный отступ 20px
        
        const targetPosition = targetElement.offsetTop - offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }}
    goBtnEl.addEventListener('click', scrollToTarget);