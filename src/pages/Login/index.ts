import Button from 'components/button/Button';
import Input from 'components/input/Input';
import Link from 'components/link/Link';
import renderDOM from 'utils/renderDOM';
import registerComponent from 'utils/registerComponent';
import ValidForm from 'utils/ValidForm';
import LoginPage from './Login';

document.addEventListener('DOMContentLoaded', () => {
  registerComponent(Button);
  registerComponent(Input);
  registerComponent(Link);

  const page = new LoginPage({});

  renderDOM('#app', page);
  const form = document.querySelector('[id=form]') as HTMLFormElement | null;
  if (form) new ValidForm(form);
});
