const Fieldset = (props) => {
    const {
      className,
      label,
      inputName,
      labelClassName,
      errorText,
      children,
      errorClass,
      id
    } = props;

    return (
      <fieldset id={id} className={`${className}`}>
        <label
          htmlFor={inputName}
          className={`body-sm-regular ${labelClassName}`}
        >
          {label}
          <span className="required-star">*</span>
        </label>
        {children}
        <span className="body-sm-regular error">{errorText}</span>
      </fieldset>
    );
}

export default Fieldset;