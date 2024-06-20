import './registration.css';

export default function () {
  return (
    <div className="userreg">
      <div className="text"><h2>Регистрация</h2></div>
      <div className="block">
        <div className="datauser">
          <form action="" method="get">
            <p>
              <label htmlFor="name">NickName:</label>
              <input type="text" name="name" id="name" required />
            </p>
            <p>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" required />
            </p>
            <p>
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password" required />
            </p>
            <button type="submit" onClick="registration('Name')">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}
