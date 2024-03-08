import React, { useState, useEffect } from 'react';
import './Ilana.css'; // Подключаем файл стилей

function IlanaPage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [greeting, setGreeting] = useState('');
  const [showFeedback, setShowFeedback] = useState(false); // Состояние для отображения обратной связи
  const [isDisabled, setIsDisabled] = useState(false); // Состояние для блокировки кнопки после ответа

  const questions = [
    {
      question: "יש לך צבע עיניים של קאקי?",
      correctAnswer: "כן",
      incorrectAnswer: "לא",
      feedback: "זה לא כחול! אם היו לי עיניים כחולות, היה קל יותר לנסח את השאלות."
    },
    {
      question: "כמה ילדים יש לך?",
      correctAnswer: "2",
      feedback: "מי סיפר לך שיש 3? יכול להיות 3 גם."
    },
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
    setIsDisabled(true); // Блокируем кнопку после ответа
    if (currentQuestion.correctAnswer && answer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
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
        setShowFeedback(false);
        setIsDisabled(false); // Разблокируем кнопку перед следующим вопросом
      }
    } else {
      // Неправильный ответ
      setGreeting('מצטער, אבל את לא גיסתי שלי.');
      setShowFeedback(true);
      setIsDisabled(false); // Разблокируем кнопку после неправильного ответа
      setTimeout(() => {
        setShowFeedback(false);
      }, 3000);
    }
  };

  useEffect(() => {
    if (questionIndex === 1) {
      setIsDisabled(true); // Блокируем кнопку после ответа на второй вопрос
      setTimeout(() => {
        setIsDisabled(false); // Разблокируем кнопку после 3 секунд
      }, 1000);
    }
  }, [questionIndex]);

  return (
    <div className="ilana-page">
      <div className="content">
        <h1>שלום גיסתי</h1>
        <p>{questions[questionIndex].question}</p>
        {/* Проверяем, есть ли у вопроса варианты ответа "כן" или "לא" */}
        {questions[questionIndex].correctAnswer && questions[questionIndex].incorrectAnswer && (
          <div>
            <button onClick={() => setAnswer("כן")} disabled={isDisabled}>כן</button>
            <button onClick={() => setAnswer("לא")} disabled={isDisabled}>לא</button>
          </div>
        )}
        <input
          type="text"
          value={answer}
          onChange={handleInputChange}
          placeholder="הכנס תשובה"
          disabled={isDisabled}
        />
        <button onClick={handleSubmit} disabled={isDisabled}>שלח</button>
        {/* Показываем обратную связь, если она есть */}
        {showFeedback && <p>{greeting}</p>}
      </div>
    </div>
  );
}

export default IlanaPage;
