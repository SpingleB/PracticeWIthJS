import Form from './form-folder/Form'
const Card = (props) =>{
    const {
        className
    } = props

    return (
      <>
        <section className={className}>
          <Form className="form"/>
        </section>
      </>
    );
}

export default Card;