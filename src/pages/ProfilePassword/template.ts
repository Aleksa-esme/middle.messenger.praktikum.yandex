const template = `
    <section class="profile-page">
        <a href="#" class="profile-page__button-back">
            <img src="../assets/svg/arrow_button.svg" alt="back">
        </a>
        <div class="profile">
            <form id="form" action="#" method="POST" class="profile-form">
                <div class="profile-form__photo"></div>
                <ul class="form-list">
                    <li>
                        {{{ Input label='Старый пароль' value="1234567" name="oldPassword" type="password" classLabel='profile-form__label' classInput='profile-form__value' }}}
                    </li>
                    <li>
                        {{{ Input label='Новый пароль' value="12345" name="newPassword" type="password" classLabel='profile-form__label' classInput='profile-form__value' }}}
                    </li>
                    <li>
                        {{{ Input label='Повторите новый пароль' value="12345" name="newPassword" type="password" classLabel='profile-form__label' classInput='profile-form__value' }}}
                    </li>
                </ul>
                
                {{{ Button title='Сохранить' class="profile-form__button-submit" }}}
            </form>
        </div>
    </section>
`;

export default template;
