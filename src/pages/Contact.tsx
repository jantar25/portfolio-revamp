import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";

import ReusableInputs from '../Utils/Fields/ReusableInputs'
import ReusableTextArea from '../Utils/Fields/ReusableTextArea'
import Spinner from '../Components/Spinner'

const Contact: React.FC = () => {
  const id = 'contact-form'
  const [isFetching, setIsFetching] = useState(false)
  const [isAnyError, setIsAnyError] = useState(false)
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setInputs(prev => ({ ...prev, [name]: value }))
    setValidationErrors(prev => ({ ...prev, [`${name}_${id}`]: '' }))
  }

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsFetching(true)
    setIsAnyError(false)
    setTimeout(() => {
      setInputs({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      })
      setIsFetching(false)
      alert('Message sent successfully!')
    }, 2000)
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
        <form className="flex flex-col items-center w-full space-y-3 md:space-y-4 mb-12 lg:mb-24" onSubmit={sendMessage}>
          <div className="w-full flex flex-col md:flex-row gap-4">
            <ReusableInputs
              id={id}
              label="First Name"
              type="text"
              name="firstName"
              value={inputs.firstName}
              placeholder="Enter your First Name"
              validationErrors={validationErrors}
              handleChange={handleChange}
            />
            <ReusableInputs
              id={id}
              label="Last Name"
              type="text"
              name="lastName"
              value={inputs.lastName}
              placeholder="Enter your Last Name"
              validationErrors={validationErrors}
              handleChange={handleChange}
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
            handleChange={handleChange}
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
            handleChange={handleChange}
          />
          <button
            type="submit"
            className={`w-full md:w-1/2 py-4 flex items-center justify-center gap-2 rounded-full text-2xl md:text-4xl font-bold 
              bg-primary-default text-text-light dark:text-text-light ${isFetching || isAnyError ? `cursor-not-allowed 
                bg-accent-second text-primary` : '' }`}
            disabled={isFetching || isAnyError}
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