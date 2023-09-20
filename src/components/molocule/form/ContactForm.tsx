import React, { useState } from 'react'
import { Box, Button, CircularProgress, InputLabel, TextField } from '@mui/material'
import toast, { Toaster } from 'react-hot-toast'
import { emailRegex, nameRegex } from '../../../utils/constants'
import { useLanguageContext } from '../../../context/LanguageContext'
import { EMAIL_ERROR, EMAIL_LABEL, EMAIL_PLACEHOLDER, MESSAGE_ERROR, MESSAGE_LABEL, MESSAGE_PLACEHOLDER, NAME_ERROR, NAME_LABEL, NAME_PLACEHOLDER, SEND_BTN_TEXT, SEND_EMPTY, SEND_ERROR, SUCCESS_SEND } from './ContactFormConstants'
import { FORM_STYLES } from './ContactFormStyles'

const ContactForm: React.FC = () => {
  const { language } = useLanguageContext()
  const [name, setName] = useState('')
  const [errorName, setErrorName] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState<string | null>(null)
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const URL_SEND_MAIL = 'https://formsubmit.co/ajax/costamariaeugenia1@gmail.com'

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.value
    const isValidName = nameRegex.test(inputName)

    if (isValidName) {
      setName(inputName)
      setErrorName(null)
    } else {
      setName(inputName)
      setErrorName(`X - ${ NAME_ERROR.get(language) }`)
    }
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = event.target.value
    const isValidEmail = emailRegex.test(inputEmail)

    if (isValidEmail) {
      setEmail(inputEmail)
      setErrorEmail(null)
    } else {
      setEmail(inputEmail)
      setErrorEmail(`X - ${ EMAIL_ERROR.get(language) }`)
    }
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputMessage = event.target.value

    if (inputMessage.length > 3) {
      setMessage(inputMessage)
      setErrorMessage(null)
    } else {
      setMessage(inputMessage)
      setErrorMessage(`X - ${ MESSAGE_ERROR.get(language) }`)
    }
  }


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    if (name && email && message) {
      try {
        const response = await fetch(URL_SEND_MAIL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', },
          body: JSON.stringify({ name, email, message }),
        }
        )

        const data = await response.json()
        if (data.success === 'true') {
          setName('')
          setEmail('')
          setMessage('')
          toast.success(`${ SUCCESS_SEND.get(language) }`)
        } else {
          toast.error(`${ SEND_ERROR.get(language) }`)
        }
      } catch (error) {
        toast.error(`${ SEND_ERROR.get(language) }`)
      }
    } else {
      toast.error(`${ SEND_EMPTY.get(language) }`)
    }
    setLoading(false)
  }

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={ { duration: 3000 } }
        reverseOrder={ false }
      />
      <form onSubmit={ handleSubmit }>
        <InputLabel htmlFor="nombre" sx={ FORM_STYLES.label }>
          { NAME_LABEL.get(language) } :
        </InputLabel>
        <TextField
          type="text"
          id="nombre"
          placeholder={ NAME_PLACEHOLDER.get(language) }
          variant="filled"
          fullWidth
          value={ name }
          onChange={ handleNameChange }
          error={ Boolean(errorName) }
          helperText={ errorName }
          sx={ { marginBottom: '1.0rem' } }
        />
        <InputLabel htmlFor="email" sx={ FORM_STYLES.label }>
          { EMAIL_LABEL.get(language) } :
        </InputLabel>
        <TextField
          type="text"
          id="email"
          placeholder={ EMAIL_PLACEHOLDER.get(language) }
          variant="filled"
          fullWidth
          value={ email }
          onChange={ handleEmailChange }
          error={ Boolean(errorEmail) }
          helperText={ errorEmail }
          sx={ { marginBottom: '1.0rem' } }
        />
        <InputLabel htmlFor="mensaje" sx={ FORM_STYLES.label }>
          { MESSAGE_LABEL.get(language) } :
        </InputLabel>
        <TextField
          id="mensaje"
          placeholder={ MESSAGE_PLACEHOLDER.get(language) }
          variant="filled"
          rows={ 6 }
          value={ message }
          onChange={ handleMessageChange }
          error={ Boolean(errorMessage) }
          helperText={ errorMessage }
          multiline
          sx={ { marginBottom: '1.25rem', width: '100%' } }
        />
        <Box
          sx={ FORM_STYLES.btn }>
          <Button type="submit" variant="contained" color="primary" sx={ { width: '280px' } }>
            { SEND_BTN_TEXT.get(language) }
          </Button>
        </Box>
      </form>
      { loading &&
        <Box sx={ FORM_STYLES.boxLoader }>
          <CircularProgress color="success" />
        </Box> }
    </>
  )
}

export default ContactForm
