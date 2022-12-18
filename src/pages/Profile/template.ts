const template = `
    <section class="profile-page">
        <a href="#" class="profile-page__button-back">
            <img src="../../assets/svg/arrow_button.svg" alt="back">
        </a>
        <div class="profile">
            <form id="form" action="#" class="profile-form">
                <div class="profile-form__photo"></div>
                {{{ Input label='Почта' value="pochta@yandex.ru" name="email" type="email" classLabel='profile-form__label' classInput='profile-form__value' }}}
                {{{ Input label='Логин' value="ivanivanov" name="login" type="text" classLabel='profile-form__label' classInput='profile-form__value' }}}
                {{{ Input label='Имя' value="Иван" name="first_name" type="text" classLabel='profile-form__label' classInput='profile-form__value' }}}
                {{{ Input label='Фамилия' value="Иванов" name="second_name" type="text" classLabel='profile-form__label' classInput='profile-form__value' }}}
                {{{ Input label='Имя в чате' value="Иван" name="display_name" type="text" classLabel='profile-form__label' classInput='profile-form__value' }}}
                {{{ Input label='Телефон' value="+7(909)967-30-30" name="phone" type="telephone" classLabel='profile-form__label' classInput='profile-form__value' }}}
                <div class="profile-form__buttons">
                    {{{ Link title='Изменить данные' class="profile-form__button"}}}
                    {{{ Link title='Изменить пароль' class="profile-form__button"}}}
                    {{{ Link title='Выйти' class="profile-form__button profile-form__button-exit"}}}
                </div>
            </form>
        </div>
    </section>
`;

export default template;
