import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './GreetingsPage.css'; // Подключаем файл стилей
import gif1 from '../../gifs/1.gif';
import gif2 from '../../gifs/2.gif';
import gif3 from '../../gifs/3.gif';

import gif4 from '../../gifs/4.gif';
import gif5 from '../../gifs/5.gif';
import gif6 from '../../gifs/6.gif';
import gif7 from '../../gifs/7.gif';
import gif8 from '../../gifs/8.gif';
import gif9 from '../../gifs/9.gif';
import gif10 from '../../gifs/10.gif';
import gif11 from '../../gifs/11.gif';
import gif12 from '../../gifs/12.gif';



function GreetingsPage() {
  const { name } = useParams();
  const [randomGif, setRandomGif] = useState(null);
  const [nameColor, setNameColor] = useState('#000');
  const [greetings, setGreetings] = useState([
    "ביום האישה, ביום הנפלא, אני שולח ברכה מקרב לב, שתמשיכי לפרח ולהאיר כשמש, כי את כוכב ברקע הלב.",
    "נשים יקרות, ביום האישה, נשארתן נצח וכוח גדול, כשחוגגות חיים ואהבה רבה, מעניקות צבע וגוון מיוחד.",
    "ביום האישה, כשאת פורחת כנצח, אני מביע לך אהבה וכבוד, תמשיכי להאיר כמו כוכב זוהר, בכל צעד בדרכך, בלב שלך ובעולם.",
    "נשים יקרות, ביום האישה, אתן הקסם בלילות ובימים, תמשיכו להבריק כמו יהלומים, ולפרוח כמו פרחים גבוהים.",
    "ביום האישה, יום הכבוד, אני מביע לך כל הערכה, שתמשיכי להתגבר כמו אריה, ולשפע כמו ים בכל נקודה.",
    "נשים נפלאות, ביום האישה, אתן המלאכות בחיינו, כשאתן עושות ניסים בלי גבול, ומשרים אהבה בלי סוף.",
    "ביום האישה, ביום הקסום, אני מביע אהבה עמוקה וכבוד, שתמשיכי להתגבר ולפרוח, ולהישאר נשים יפות ומיוחדות.",
    "נשים יקרות, ביום האישה, אתן האור שבאוויר, תמשיכו להנחיל חיוך ושמחה, ולהאיר כמו כוכבים בשמיים.",
    "ביום האישה, ביום המיוחד, אני מביע אהבה ותקווה, שתמשיכי להפוך חלומות למציאות, ולפרוח כמו פרחים בכל עת.",
    "נשים חזקות, ביום האישה, תמשיכן להיאבק ולהתגבר, כי אתן הבנות של העתיד, והעולם בשבילכן מחכה."
  ]);
  
  const [currentGreeting, setCurrentGreeting] = useState('');

  useEffect(() => {
    const gifs = [gif1, gif2,gif3,gif4,gif5,gif6,gif7,gif8,gif9,gif10,gif11,gif12]; // Добавьте остальные гифки в этот массив
    const randomIndex = Math.floor(Math.random() * gifs.length);
    const randomGifPath = gifs[randomIndex];

    setRandomGif(randomGifPath);
  }, [name]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor = getRandomColor();
      setNameColor(randomColor);
    }, 200);

    return () => clearInterval(intervalId);
  }, [name]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    setCurrentGreeting(greetings[randomIndex]);
  }, [name, greetings]);

  // Функция для генерации случайного цвета
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="greetings-page mobile">
      <div className="gif-background" style={{ backgroundImage: `url(${randomGif})` }} />
      <div className="content">
        <h1 style={{ color: nameColor }}>{name}</h1>
        <br/>
        <br/>
        <h2 className='h3colors'>{currentGreeting}</h2>
       
      </div>
    </div>
  );
}

export default GreetingsPage;
