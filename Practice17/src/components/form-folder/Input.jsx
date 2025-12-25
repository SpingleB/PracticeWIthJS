const Input = (props) => {
    const {
      className,
      title,
      inputName,
      type,
      autocomplete,
      value,
      onChange,
      id,
      errorClass,
    } = props;

    return (
      <>
        <input
          type={type}
          title={title}
          className={`${className} ${errorClass}`}
          name={inputName}
          value={value}
          autoComplete={autocomplete}
          onChange={onChange}
          id={id}
        />
      </>
    );

}

export default Input