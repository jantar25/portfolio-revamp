import React, { useState, useRef  } from 'react'
import emailjs from '@emailjs/browser';
import { IoIosSend } from "react-icons/io";

import { emailServiceId, emailTemplateId, emailPublicKey } from '../Utils/Formatting/Constants'
import { validateEmail, validateName } from '../Utils/Validations/FieldsValidations';
import { useNotificationHelpers } from "../Components/NotificationProvider";
import ReusableInputs from '../Utils/Fields/ReusableInputs'
import ReusableTextArea from '../Utils/Fields/ReusableTextArea'
import Spinner from '../Components/Spinner'

const Contact: React.FC = () => {
  const id = 'contact-form'
  const { success, error } = useNotificationHelpers();
  const formRef = useRef<HTMLFormElement | null>(null)
  const [isFetching, setIsFetching] = useState(false)
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const textArray = ['firstName', 'lastName', 'message']
  const isAnyError = Object.keys(validationErrors).some(
    (key) => validationErrors[key],
  )
  const isAnyFieldEmpty = Object.keys(inputs)
    .some((key) => !inputs[key as keyof typeof inputs])

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (value.length >= 60) return
    setInputs(prev => ({ ...prev, [name]: value }))
  }

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (value.length >= 100) return
    setInputs(prev => ({ ...prev, [name]: value }))
  }

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (value.length >= 1000) return
    setInputs(prev => ({ ...prev, [name]: value }))
  }

  const validateNameFields = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    let fieldName = ''
    if (name === 'firstName') fieldName = 'First Name'
    else if (name === 'lastName') fieldName = 'Last Name'
    else if (name === 'message') fieldName = 'Message'

    validateName({
      id,
      value,
      fieldName,
      setValidationErrors
    })
  }

  const validateEmailField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    validateEmail({
      id,
      value,
      fieldName: 'Email',
      setValidationErrors
    })
  }

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setValidationErrors({})
    if (!formRef.current) return;

    Object.entries(inputs).forEach(([key, value]) => {
      const fakeEvent = {
        target: { name: key, value: value ?? '' },
      } as React.ChangeEvent<HTMLInputElement>

      if (textArray.includes(key)) {
        validateNameFields(fakeEvent)
      } else {
        validateEmailField(fakeEvent)
      } 
    })

    if (isAnyError || isAnyFieldEmpty) {
      error('Please correct the errors and fill in all required fields.', {
        title: 'Validation Error',
      });
      return;
    }

    setIsFetching(true)
    try {
      const response = await emailjs.sendForm(emailServiceId, emailTemplateId, formRef.current, {
        publicKey: emailPublicKey,
      })
      if (response.status === 200) {
        success('Your message has been sent successfully.', {
          title: 'Message Sent',
        });
        setInputs({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        })
      } else {
        error('There was an issue sending your message. Please try again later.', {
          title: 'Message Failed',
        });
      }
    } catch (err) {
      error('There was an issue sending your message. Please try again later.', {
        title: 'Message Failed',
      });
    } finally {
      setIsFetching(false)
    }
  }

  return (
    <div>
      <div className="flex flex-col justify-center mt-20 md:mt-32 mb-12">
        <h1 className="text-6xl md:text-8xl 2xl:text-9xl font-bold">
          Contact Me
        </h1>
        <p className="w-full lg:w-1/2 text-lg md:text-2xl mt-4 text-text-light_extension dark:text-text-dark_extension">
          If you have any questions, feedback, or just want to say hello, feel free to reach out!
        </p>
      </div>
        <form ref={formRef} className="flex flex-col items-center w-full space-y-3 md:space-y-4 mb-12 lg:mb-24" onSubmit={sendMessage}>
          <div className="w-full flex flex-col md:flex-row gap-4">
            <ReusableInputs
              id={id}
              label="First Name"
              type="text"
              name="firstName"
              value={inputs.firstName}
              placeholder="Enter your First Name"
              validationErrors={validationErrors}
              onBlur={validateNameFields}
              handleChange={handleChangeName}
            />
            <ReusableInputs
              id={id}
              label="Last Name"
              type="text"
              name="lastName"
              value={inputs.lastName}
              placeholder="Enter your Last Name"
              validationErrors={validationErrors}
              onBlur={validateNameFields}
              handleChange={handleChangeName}
            />
          </div>
          <ReusableInputs
            id={id}
            label="Email"
            type="email"
            name="email"
            value={inputs.email}
            placeholder="Enter your Email"
            validationErrors={validationErrors}
            onBlur={validateEmailField}
            handleChange={handleChangeEmail}
          />
          <ReusableTextArea
            id={id}
            label="Message"
            rows={5}
            value={inputs.message}
            name="message"
            maxLength={1000}
            placeholder={"Type your message here..."}
            validationErrors={validationErrors}
            onBlur={validateNameFields}
            handleChange={handleChangeTextArea}
          />
          <button
            type="submit"
            className={`w-full md:w-1/2 py-4 flex items-center justify-center gap-2 rounded-full text-2xl md:text-4xl font-bold 
              bg-primary-default text-text-light dark:text-text-light ${isFetching ? `cursor-not-allowed 
                text-text-light dark:text-text-dark` : '' }`}
            disabled={isFetching}
          >
            {isFetching && (
              <div className="loading-spinner mr-2">
                <Spinner />
              </div>
            )}
            {isFetching ? "Submitting..." : "Submit"}
            {!isFetching && <IoIosSend />}
          </button>
        </form>
    </div>
  )
}

export default Contact