import Title from './Title'
import Fieldset from './Fieldset'
import ContactMethod from './ContactMethod'
import Message from './Message'
import Button from './Button'

const Form = (props) => {
    const {
        className
    } = props;

    return (
      <>
        <form className={className}>
          <Title className="title" content="Contact Us" />
          <Fieldset
            label="First Name"
            inputName="first-name"
            className="fieldset"
            title="First Name"
            labelClassName="label"
            inputType="text"
            inputClassName="input"
            autocomplete="name"
            errorText=""
          />
          <Fieldset
            label="Last Name"
            inputName="last-name"
            className="fieldset"
            title="Last Name"
            inputType="text"
            labelClassName="label"
            inputClassName="input"
            autocomplete="name"
            errorText=""
          />
          <Fieldset
            label="Email Adress"
            inputName="email-adress"
            className="fieldset"
            title="Email Adress"
            inputType="email"
            labelClassName="label"
            inputClassName="input"
            autocomplete="email"
            errorText=""
          />
          <ContactMethod errorText="" />
          <Message
            titleText="Message"
            textareaName="message"
            className="area-message"
            textareaId="message"
            errorText=""
          />
          <Fieldset
            label="I consent to being contacted by the team"
            inputName="email-adress"
            className="checkbox-fieldset"
            title="agreement"
            inputType="checkbox"
            labelClassName="label"
            inputClassName="checkbox"
          />
          <span className='error checkbox-error-span'></span>
          <Button className="submit-btn" name="submit" type="submit" />
        </form>
      </>
    );
}

export default Form;