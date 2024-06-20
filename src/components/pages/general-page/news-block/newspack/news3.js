import './news-them.css';
import Img13 from './fokp57kl.png';

export default function () {
  return (
    <div className="news_pages">
      <div className="text"><h2>Камень возвращения в обновлении 10.2</h2></div>
      <div className="block">
        <div className="news-them">
          <p1>
            В новом рейде обновления 10.2 Амирдрассил: Надежда мечты с босса «Хранитель пламени Лародара» в качестве дополнительной добычи можно будет получить новую игрушку –
            <a href="https://www.wowhead.com/ptr-2/item=209035/hearthstone-of-the-flame">Hearthstone of the Flame</a>
            {' '}
            с необычным визуальным эффектом
          </p1>
        </div>
        <img className="soobig2" src={Img13} />
      </div>
    </div>
  );
}
