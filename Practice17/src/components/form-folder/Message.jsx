const Message = (props) => {
    const {
        textareaName,
        className,
        textareaId,
        titleText,
        errorText
    } = props
    return (
      <div className="message-div">
        <span className="body-sm-regular">
          {titleText}
          <span className="required-star">*</span>
        </span>
        <textarea
          name={textareaName}
          id={textareaId}
          className={className}
        ></textarea>
        <span className="body-sm-regular error">{errorText}</span>
      </div>
    );
}

export default Message;