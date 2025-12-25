import { useState } from "react";
import RadioFieldset from "./RadioFieldset";
import Radio from './Radio'

const ContactMethod = (props) => {
  const { errorText, selected, onChange } = props;
 
    return (
      <div className="contact-method">
        <span className="body-sm-regular">
          Query Type <span className="required-star">*</span>
        </span>
        <div className="radio-div">
          <RadioFieldset
            value="general"
            selected={selected}
            onChange={onChange}
            className="radio-fieldset"
            label="General Enquiry"
            labelClassName="radio-label"
            radioClassName="input-radio"
            radioName="choice"
            checkedClass="fieldset-when-checked"
          />
          <RadioFieldset
            value="support"
            selected={selected}
            onChange={onChange}
            className="radio-fieldset"
            label="Support Request"
            labelClassName="radio-label"
            radioClassName="input-radio"
            radioName="choice"
            checkedClass="fieldset-when-checked"
          />
        </div>
        <span className="body-sm-regular error">{errorText}</span>
      </div>
    );
}

export default ContactMethod;