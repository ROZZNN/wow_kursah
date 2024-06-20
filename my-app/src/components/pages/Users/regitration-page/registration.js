import './registration.css'

export default () => {
    return(
        <div class="userreg">
            <div class='text'><h2>Регистрация</h2></div>
            <div class="block">
                <div class="datauser">
                    <form action="" method="get">
                        <p>
                            <label for="name">NickName:</label>
                            <input type="text" name="name" id="name" required/>
                        </p>
                        <p>
                            <label for="email">Email:</label>
                            <input type="email" name="email" id="email" required/>
                        </p>
                        <p>
                            <label for="password">Password:</label>
                            <input type="password" name="password" id="password" required/>
                        </p>
                        <button type="submit" onclick="registration('Name')" >Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
