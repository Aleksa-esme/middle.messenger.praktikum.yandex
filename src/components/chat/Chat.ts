import Block from 'utils/block';

interface IChatProps {
  name: String;
  date: String;
  message: String;
  messages: String;
}

class Chat extends Block {
  static componentName = 'Chat';

  constructor(props: IChatProps) {
    super(props);
  }

  render() {
    return `
      <div class="chat">
          <div class="chat__image">
              <img src="https://dummyimage.com/47x47/999999" alt="user">
          </div>
          <div>
              <div class="chat_line">
                  <p class="chat__user">{{name}}</p>
                  <p class="chat__date">{{date}}</p>
              </div>
              <div class="chat_line">
                  <p class="chat__message">{{message}}</p>
                  <div class="chat__indicator"><span>{{messages}}</span></div>
              </div>
          </div>
      </div>
    `;
  }
}

export default Chat;
