const Input = (props) => {
    const {
        className,
        title,
        inputName,
        type,
        autocomplete
    } = props
    return (
      <input
        type={type}
        title={title}
        className={className}
        name={inputName}
        autoComplete={autocomplete}
      />
    );
}

export default Input