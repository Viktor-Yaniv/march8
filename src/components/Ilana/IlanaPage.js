import React, { useState } from 'react';
import './Ilana.css'; // Подключаем файл стилей

function IlanaPage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [greeting, setGreeting] = useState('');

  const questions = [
    {
      question: "מה גיסך אוהב כשאמא שלך מבשלת ביום שישי?",
      answer: "גוז'דיז'דה"
    },
    {
      question: "מעניין איזו מכונית מתאימה לך?",
      answer: "מזדה"
    }
    // Добавьте здесь любые другие вопросы и ответы
  ];

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    const currentQuestion = questions[questionIndex];
    if (answer === currentQuestion.answer) {
      if (questionIndex === questions.length - 1) {
        // Последний вопрос
        setGreeting('כל הכבוד! עכשיו אנחנו מועברים לדף הבא.');
        setTimeout(() => {
          // Перенаправление на следующую страницу
          window.location.href = '/ilanaprice'; // Замените '/ilanaprice' на ваш путь
        }, 2000); // Задержка в 2 секунды перед перенаправлением
      } else {
        // Следующий вопрос
        setQuestionIndex(questionIndex + 1);
        setGreeting('');
      }
    } else {
      // Неправильный ответ
      setGreeting('מצטער, אבל את לא הכלה שלי.');
    }
  };

  return (
    <div className="ilana-page">
      <div className="content">
        <h1>שלום גיסתי</h1>
        <p>{questions[questionIndex].question}</p>
        <input
          type="text"
          value={answer}
          onChange={handleInputChange}
          placeholder="הכנס תשובה"
        />
        <button onClick={handleSubmit}>שלח</button>
        <p>{greeting}</p>
      </div>
    </div>
  );
}

export default IlanaPage;
