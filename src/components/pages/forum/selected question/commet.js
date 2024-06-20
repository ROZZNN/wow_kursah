export default function () {
  return (
    <div className="comment">
      {/* <div>тут надо показать коменнты и обсуждения чет тип</div> */}
      <form>
        <label htmlFor="comment">Comment</label>
        <input type="text" name="comm" id="comm" />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
