import './news-them.css';
import Img11 from './20887278.png';

export default function () {
  return (
    <div className="news_pages">
      <div className="text"><h2>Гильдия Blue Shoe первыми в мире победили эпохального Кривокорня в Амирдрассиле</h2></div>
      <div className="block">
        <div className="news-them">
          <p1>Гильдия Blue Shoe с американского сервера Illidan открыла рейтинговую таблицу эпохального Амирдрассила, первой в мире одолев Кривокорня на данном уровне сложности</p1>
        </div>
        <img className="soobig" src={Img11} />
      </div>
    </div>
  );
}
