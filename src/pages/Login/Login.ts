import Block from 'utils/block';
import logData from 'utils/logData';
import { validateForm, validBlurField, validFocusField } from 'utils/ValidForm';
import fields from './data';

interface ILoginProps {
  onClick?: () => void;
  onSubmit?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

class Login extends Block {
  static componentName = 'Login';

  constructor(props: ILoginProps) {
    super({
      ...props,
      onClick: (event: Event) => logData(event),
      onSubmit: (event: Event) => validateForm(event),
      onBlur: (event: Event) => validBlurField(event),
      onFocus: (event: Event) => validFocusField(event),
    });
  }

  render() {
    return `
    <section class="login">
      <h6 class="login__title">Вход</h6>
      <form id="form" class="login-form" >
          <ul class="form-list">
              ${fields.map(el => `
                    <li>
                      {{{ Input 
                        label="${el.label}" 
                        value="${el.value}" 
                        name="${el.name}" 
                        type="${el.type}" 
                        onBlur=onBlur
                        onFocus=onFocus
                        classLabel='login-form__label' 
                        classInput='login-form__value' 
                      }}}
                    </li>`).join(' ')}
          </ul>
          <div class="login-form__buttons login-form__buttons-login">
              {{{ Button 
                title='Войти' 
                classes="login-form__button-login" 
                onClick=onClick 
                onSubmit=onSubmit 
              }}}
              {{{ Link title='Нет аккаунта?' classes="login-form__link" }}}
          </div>
      </form>
    </section>
    `;
  }
}

export default Login;
