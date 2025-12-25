import Title from './Title'
import Fieldset from './Fieldset'
import ContactMethod from './ContactMethod'
import Message from './Message'
import Button from './Button'
import Input from './Input'
import Checkbox from './Checkbox'
import SuccessMessage from './SuccessMessage'
import { useState } from 'react'

const Form = (props) => {
    const {
        className
    } = props;

    const [ firstName, setFirstName ] = useState(``)
    const [ lastName, setLastName ] = useState(``)
    const [ email, setEmail ] = useState(``)
    const [ message, setMessage ] = useState(``)
    const [ checked, setChecked ] = useState(false)
    const [ errors, setErrors ] = useState(
      {
      firstname: ``,
      lastname: ``,
      email: ``,
      contactMethod: ``,
      message: ``,
      checkbox: ``,
    }
    ) 
    const [ selected, setSelected ] = useState(``)
    const [ showMessage, setShowMessage ] = useState(false)

    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email);
    };


    let errorClass = `error-fieldset`;
    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors({
        firstname: firstName ? `` : `This field is required`,
        lastname: lastName ? `` : `This field is required`,
        email: !email ? `This field is required` : !isValidEmail(email) ? `Please enter a valid email address` : ``,
        contactMethod: selected ? `` : `Please seclect a query type`,
        message: message ? `` : `This field is required`,
        checkbox: checked
          ? ``
          : `To submit this form, please consent to being contacted`,
      }); 

    if (firstName && lastName && email && message && checked && selected) setShowMessage(true);
    
    }

    return (
      <>
        <form className={className} onSubmit={handleSubmit} noValidate>
          {showMessage && <SuccessMessage className="success-message" />}
          <Title className="title" content="Contact Us" />
          <Fieldset
            id="firstname-fieldset"
            label="First Name"
            className="fieldset"
            labelClassName="label"
            errorText={errors.firstname}
          >
            <Input
              className="input"
              title="First name"
              inputName="firstname"
              type="text"
              id="firstname"
              autocomplete="given-name"
              errorClass={errors.firstname ? errorClass : ``}
              onChange={(e) => {
                setFirstName(!!e.target.value);
              }}
            />
          </Fieldset>
          <Fieldset
            label="Last Name"
            id="lastname-fieldset"
            className="fieldset"
            labelClassName="label"
            errorText={errors.lastname}
          >
            <Input
              className="input"
              title="Last name"
              inputName="lastnamename"
              type="text"
              id="lastname"
              autocomplete="given-lastname"
              errorClass={errors.lastname ? errorClass : ``}
              onChange={(e) => {
                setLastName(!!e.target.value);
              }}
            />
          </Fieldset>
          <Fieldset
            label="Email Adress"
            className="fieldset"
            id="email-fieldset"
            labelClassName="label"
            errorText={errors.email}
          >
            <Input
              className="input"
              title="Email"
              inputName="email"
              type="email"
              id="email"
              value={email}
              autocomplete="given-email"
              errorClass={errors.email ? errorClass : ``}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Fieldset>
          <ContactMethod
            errorText={errors.contactMethod}
            selected={selected}
            onChange={setSelected}
          />
          <Message
            titleText="Message"
            textareaName="message"
            className="area-message"
            textareaId="message"
            errorText={errors.message}
            errorClass={errors.firstname ? errorClass : ``}
            onChange={(e) => {
              setMessage(!!e.target.value);
            }}
          />
          <Fieldset
            label="I consent to being contacted by the team"
            className="checkbox-fieldset"
            labelClassName="label"
            id="checkbox-fieldset"
          >
            <Checkbox
              className="checkbox"
              checked={checked}
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
            />
          </Fieldset>
          <span className="error checkbox-error-span body-sm-regular">
            {errors.checkbox}
          </span>
          <Button className="submit-btn" name="submit" type="submit" />
        </form>
      </>
    );
}

export default Form;