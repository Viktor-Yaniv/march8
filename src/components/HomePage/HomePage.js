import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Подключаем файл стилей

function HomePage() {
  const [name, setName] = useState('');
  const [currentColor, setCurrentColor] = useState('#000');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    const colors = ['#FF5733', '#33FF63', '#3363FF', '#FFE433', '#33FFE4', '#E433FF'];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setCurrentColor(colors[currentIndex]);
      currentIndex = (currentIndex + 1) % colors.length;
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home-page">
      <div className="background-image" /> {/* Фоновое изображение */}
      <div className="content" style={{ color: currentColor }}>
        <h1>Введите ваше имя</h1>
        <div className="input-container">
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Введите ваше имя"
          />
          <Link to={`/greetings/${name}`} className="heart-button"></Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
