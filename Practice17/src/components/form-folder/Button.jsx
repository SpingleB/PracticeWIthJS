const Button = (props) =>{
    const {
        className,
        type,
        name,
        id
    } = props
    return (
      <>
        <button
          type={type}
          className={`body-md-bold ${className}`}
          name={name}
          id={id}
        >
          Submit
        </button>
      </>
    );
}
 
export default Button;