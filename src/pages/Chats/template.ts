const template = `
    <section class="chat-page">
        <div class="chats">
            <a href="#" class="link link-small chats__link">
                Профиль
                <img src="../assets/svg/arrow.svg" alt="arrow">
            </a>
            <input type="text" class="chats__search" placeholder="Поиск">
            <div class="chats__list">
                {{{ Chat name='Илья' date='15:12' message='Друзья, у меня для вас особенный выпуск новостей!' messages='10'}}}
            </div>
        </div>
        <div class="messages">
            <div class="messages-info">
                <div class="messages-info__user">
                    <div class="messages-info__user-image">
                        <img src="https://dummyimage.com/34x34/999999" alt="user">
                    </div>
                    <p class="messages-info__user-name">Илья</p>
                </div>
                <img src="../assets/svg/chat-menu.svg" alt="menu">
            </div>
            <div class="messages-field">
                <p class="messages-field__date">19 июня</p>
                {{!-- {{#> message/message}}
                    <img src='../assets/message.jpg' alt='message'>
                {{/message/message}} --}}
                {{{ Message class='message-text' content="Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой."}}}
                {{{ Message content="Тут картинка"}}}
                {{{ Message class='message-text message_user message-text_user' content="Круто"}}}

            </div>
            <form class="messages-send" id="form" action="#" >
                {{{ ButtonSvg svg="../../../../assets/svg/file.svg" alt='add file' }}} 
                <div class="messages-send__field">
                    <textarea name="message" type="text" class="form-field messages-send__input" placeholder="Сообщение" rows="2" wrap="soft" style="overflow:hidden"></textarea>
                    <span class="error"></span>
                </div>
                {{{ ButtonSvg svg="../../../../assets/svg/arrow_button.svg" alt='send' }}} 
            </form>
        </div>
    </section>
`;

export default template;
