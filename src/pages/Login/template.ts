const template = `
    <section class="login">
        <h6 class="login__title">Вход</h6>
        <form id="form" class="login-form" >
            <ul class="form-list">
                <li>
                    {{{ Input label='Логин' value="ivanivanov" name="login" type="text" classLabel='login-form__label' classInput='login-form__value' }}}
                </li>
                <li>
                    {{{ Input label='Пароль' value="12345" name="password" type="password" classLabel='login-form__label' classInput='login-form__value' }}}
                </li>
            </ul>
            <div class="login-form__buttons login-form__buttons-login">
                {{{ Button title='Войти' class="login-form__button-login" }}}
                {{{ Link title='Нет аккаунта?' class="login-form__link"}}}
            </div>
        </form>
    </section>
`;

export default template;
