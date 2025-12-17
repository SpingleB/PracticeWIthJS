const Title = ( props ) => {
    const {
        content,
        className
    } = props

    return (
      <>
        <h1 
        className={`heading ${className}`}>
            {content}
        </h1>
      </>
    );
}

export default Title;