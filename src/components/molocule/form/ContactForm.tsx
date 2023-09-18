import React, { useState } from 'react'
import { Box, Button, CircularProgress, InputLabel, TextField } from '@mui/material'
import toast, { Toaster } from 'react-hot-toast'
import { emailRegex, nameRegex } from '../../../utils/constants'
import { useLanguageContext } from '../../../context/LanguageContext'
import { FORM_MSG } from './ContactFormConstants'
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

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.value
    const isValidName = nameRegex.test(inputName)

    if (isValidName) {
      setName(inputName)
      setErrorName(null)
    } else {
      setName(inputName)
      setErrorName(`X - ${ FORM_MSG[language].nameError }`)
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
      setErrorEmail(`X - ${ FORM_MSG[language].eMailError }`)
    }
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputMessage = event.target.value

    if (inputMessage.length > 3) {
      setMessage(inputMessage)
      setErrorMessage(null)
    } else {
      setMessage(inputMessage)
      setErrorMessage(`X - ${ FORM_MSG[language].messageError }`)
    }
  }


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/costamariaeugenia1@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        }
      )

      const data = await response.json()
      if (data.success === 'true') {
        setName('')
        setEmail('')
        setMessage('')
        toast.success(`${ FORM_MSG[language].successSend }`)
      } else {
        toast.error(`${ FORM_MSG[language].sendError }`)
      }
    } catch (error) {
      toast.error(`${ FORM_MSG[language].sendError }`)
    } finally {
      setLoading(false)
    }
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
          { FORM_MSG[language].nameLabel } :
        </InputLabel>
        <TextField
          type="text"
          id="nombre"
          placeholder={ FORM_MSG[language].namePlaceholder }
          variant="filled"
          fullWidth
          value={ name }
          onChange={ handleNameChange }
          error={ Boolean(errorName) }
          helperText={ errorName }
          sx={ { marginBottom: '1.0rem' } }
        />
        <InputLabel htmlFor="email" sx={ FORM_STYLES.label }>
          { FORM_MSG[language].eMailLabel } :
        </InputLabel>
        <TextField
          type="text"
          id="email"
          placeholder={ FORM_MSG[language].eMailPlaceholder }
          variant="filled"
          fullWidth
          value={ email }
          onChange={ handleEmailChange }
          error={ Boolean(errorEmail) }
          helperText={ errorEmail }
          sx={ { marginBottom: '1.0rem' } }
        />
        <InputLabel htmlFor="mensaje" sx={ FORM_STYLES.label }>
          { FORM_MSG[language].messageLabel } :
        </InputLabel>
        <TextField
          id="mensaje"
          placeholder={ FORM_MSG[language].messagePlaceholder }
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
          sx={ {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center'
          } }>
          <Button type="submit" variant="contained" color="primary" sx={ { width: '280px' } }>
            { FORM_MSG[language].sendBtn }
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
