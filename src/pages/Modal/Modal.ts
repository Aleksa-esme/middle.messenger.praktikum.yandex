import Block from 'utils/block';

class Modal extends Block {
  static componentName = 'Modal';

  render() {
    return `
      <section class="modal-wrapper">
          <div class="modal">
              <h6 class="modal__heading">Файл загружен</h6>
              <p>pic.jpg</p>
              {{{ Button title='Поменять' classes='modal__button' }}}
          </div>
      </section>
    `;
  }
}

export default Modal;
