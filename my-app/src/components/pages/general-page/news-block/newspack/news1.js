import './news-them.css';
import Img12 from './s02614511.jpg';

function NEWS1() {
  return (
    <div className="news_pages">
      <div className="text"><h2>Гильдия Blue Shoe первая в мире одолела героического Фиракка Пылающего в Амирдрассиле Надежде Сна</h2></div>
      <div className="block">
        <div className="news-them">
          <p1>
            Гильдия Blue Shoe с американского сервера Illidan совместно с другими игроками первыми в мире победила героического Фиракка Пылающего днем 15 ноября. На полное прохождение рейда у коллектива ушло приблизительно 7 часов.
            Средний уровень экипировки игроков составил около 450.
          </p1>
        </div>
        <img src={Img12} />
      </div>
    </div>
  );
}
export default NEWS1;
