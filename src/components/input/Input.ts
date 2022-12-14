import Block from 'utils/block';

interface IInputProps {
  label: String;
  name: String;
  value: String;
  type: String;
  onBlur?: () => void;
  onFocus?: () => void;
  classLabel: String;
  classInput: String;
}

class Input extends Block {
  static componentName = 'Input';

  constructor({ label, name, value, type, classInput, classLabel, onBlur, onFocus }: IInputProps) {
    super({
      label,
      name,
      value,
      type,
      classInput,
      classLabel,
      events: {
        focusout: onBlur,
        focusin: onFocus,
      },
    });
  }

  render() {
    return `
      <label class={{ classLabel }}>
          {{ label }}
          <input name={{ name }} value={{ value }} class='input form-field {{ classInput }}' type={{ type }}>
          <span class="error"></span>
      </label>
    `;
  }
}

export default Input;
