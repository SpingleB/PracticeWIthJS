const Checkbox = (props) => {
    const { 
    className,
    onChange,
    checked
    } = props
    return (
      <input
        type="checkbox"
        className={className}
        checked={checked}
        onChange={onChange}
      />
    );
}

export default Checkbox;