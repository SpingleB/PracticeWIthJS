import Radio from "./Radio";

const RadioFieldset = (props) => {
  const {
    className,
    label,
    inputName,
    labelClassName,
    errorText,
    onChange,
    value,
    selected,
    radioName,
    radioClassName,
    checkedClass,
  } = props;

  let isChange = selected === value;
  return (
    <fieldset className={`${className} ${isChange ? `${checkedClass}` : ``}`}>
      <label
        htmlFor={inputName}
        className={`body-sm-regular ${labelClassName}`}
      >
        {label}
        <span className="required-star">*</span>
      </label>
      <Radio
        className={radioClassName}
        name={radioName}
        onChange={() => onChange(value)}
      />
      <span className="body-sm-regular error">{errorText}</span>
    </fieldset>
  );
};

export default RadioFieldset;
