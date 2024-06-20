import './style-css.css'
import ava from './ava.jpeg';

export default () => {
    return(
        <div class="profile">
            <img class='ava' src={ava}></img>
            <h2 class="name"></h2>
            <div class="about_profil">
                <p>bla bla bla</p>
                <div class='comment'>
                    <div></div>
                    <form>
                        <label for="comment">Comment</label>
                        <input type="text" name="comm" id="comm"></input>
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    );
}