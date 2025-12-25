const SuccessMessage = (props) => {
    const {
        className,
    } = props
    return (
      <div className={className}>
        <div>
          <img src="/src/assets/images/icon-success-check.svg" alt="" />
          <h2 className="body-md-bold">Message Sent!</h2>
        </div>
        <p className="body-sm-regular">
          Thanks for completing the form. We’ll be in touch soon!
        </p>
      </div>
    );
}

export default SuccessMessage;