const template = `
    <label class={{ classLabel }}>
        {{ label }}
        <input name={{ name }} value={{ value }} class='input form-field {{ classInput }}' type={{ type }}>
        <span class="error"></span>
    </label>
`;

export default template;
