const Radio = (props) => {
    const {
        className,
        name,
        value,
        onChange
    } = props
    return (
      <input type="radio" className={className} name={name} value={value} onChange={onChange}/>
    );
}

export default Radio;