import './style-css.css';
import ava from './ava.jpeg';

export default function () {
  return (
    <div className="profile">
      <img className="ava" src={ava} />
      <h2 className="name" />
      <div className="about_profil">
        <p>bla bla bla</p>
        <div className="comment">
          <div />
          <form>
            <label htmlFor="comment">Comment</label>
            <input type="text" name="comm" id="comm" />
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}
