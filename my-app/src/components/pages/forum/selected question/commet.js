export default () => {
    return(
        <div class='comment'>
            {/* <div>тут надо показать коменнты и обсуждения чет тип</div> */}
            <form>
                <label for="comment">Comment</label>
                <input type="text" name="comm" id="comm"></input>
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
}
