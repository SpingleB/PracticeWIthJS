import Fieldset from "./Fieldset";

const ContactMethod = (props) => {
  const { errorText } = props;
    return (
      <div className="contact-method">
        <span className="body-sm-regular">
          Query Type <span className="required-star">*</span>
        </span>
        <div className="radio-div">
          <Fieldset
            className="radio-fieldset"
            title="General Enquiry"
            inputName="choice"
            label="General Enquiry"
            labelClassName="radio-label"
            inputType="radio"
            inputClassName="input-radio"
          />
          <Fieldset
            className="radio-fieldset"
            title="Support Request"
            inputName="choice"
            label="Support Request"
            labelClassName="radio-label"
            inputType="radio"
            inputClassName="input-radio"
          />
        </div>
        <span className="body-sm-regular error">{errorText}</span>
      </div>
    );
}

export default ContactMethod;