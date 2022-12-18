const template = `
    <section class="login">
        <h6 class="login__title">Регистрация</h6>
        <form id="form" action="#" class="login-form" method="POST">
            <ul class="form-list">
                <li>
                    {{{ Input label='Почта' value="pochta@yandex.ru" name="email" type="email" classLabel='login-form__label' classInput='login-form__value' }}}
                </li>
                <li>
                    {{{ Input label='Логин' value="ivanivanov" name="login" type="text" classLabel='login-form__label' classInput='login-form__value' }}}
                </li>
                <li>
                    {{{ Input label='Имя' value="Иван" name="first_name" type="text" classLabel='login-form__label' classInput='login-form__value' }}}
                </li>
                <li>
                    {{{ Input label='Фамилия' value="Иванов" name="second_name" type="text" classLabel='login-form__label' classInput='login-form__value' }}}
                </li>
                <li>
                    {{{ Input label='Имя в чате' value="Иван" name="display_name" type="text" classLabel='login-form__label' classInput='login-form__value' }}}
                </li>
                <li>
                    {{{ Input label='Телефон' value="+7(909)967-30-30" name="phone" type="telephone" classLabel='login-form__label' classInput='login-form__value' }}}
                </li>
                <li>
                    {{{ Input label='Пароль' value="12345" name="password" type="password" classLabel='login-form__label' classInput='login-form__value' }}}
                </li>
                <li>
                    {{{ Input label='Пароль (ещё раз)' value="12345" name="password" type="password" classLabel='login-form__label' classInput='login-form__value' }}}
                </li>
            </ul>
            <div class="login-form__buttons login-form__buttons-register">  
                {{{ Button title='Зарегистрироваться' class="login-form__button-register" }}}
                {{{ Link title='Войти' class="login-form__link"}}}
            </div>
        </form>
    </section>
`;

export default template;
