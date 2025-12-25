const Message = (props) => {
    const {
        textareaName,
        className,
        textareaId,
        titleText,
        errorText,
        onChange,
        value,
        errorClass
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
          className={`${className} ${errorClass}`}
          value={value}
          onChange={onChange}
        ></textarea>
        <span className="body-sm-regular error">{errorText}</span>
      </div>
    );
}

export default Message;