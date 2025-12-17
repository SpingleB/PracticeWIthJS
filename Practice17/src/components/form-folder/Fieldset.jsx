import Input from './Input'

const Fieldset = (props) => {
    const {
      title,
      className,
      label,
      inputName,
      labelClassName,
      inputType,
      inputClassName,
      autocomplete,
      errorText
    } = props;

    return (
      <fieldset className={className}>
        <label
          htmlFor={inputName}
          className={`body-sm-regular ${labelClassName}`}
        >
          {label}
          <span className="required-star">*</span>
        </label>
        <Input
          className={inputClassName}
          type={inputType}
          title={title}
          inputName={inputName}
          autocomplete={autocomplete}
        />
        <span className="body-sm-regular error">{errorText}</span>
      </fieldset>
    );
}

export default Fieldset;