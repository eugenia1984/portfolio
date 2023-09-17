import React, { useState } from 'react'
import { Box, Button, InputLabel, TextField, Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import { emailRegex, nameRegex } from '../../../utils/constants'
import { useLanguageContext } from '../../../context/LanguageContext'
import { FORM_MSG } from './ContactFormConstants'
import { FORM_STYLES } from './ContactFormStyles'

const ContactForm: React.FC = () => {
  const { language } = useLanguageContext()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }

  const handleCloseSnackbar = () => {
    setError('')
    setSuccess(false)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!nameRegex.test(name)) {
      setError(FORM_MSG[language].nameError)
      return
    }

    if (!emailRegex.test(email)) {
      setError(FORM_MSG[language].eMailError)
      return
    }

    if (!message) {
      setError(FORM_MSG[language].requiredError)
      return
    }

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
        setSuccess(true)
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setError(FORM_MSG[language].sendError)
      }
    } catch (error) {
      setError(FORM_MSG[language].sendError)
    }
  };

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <InputLabel htmlFor="nombre" sx={ FORM_STYLES.label  }>
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
          required
          sx={ { marginBottom: '1.25rem' } }
        />
        <InputLabel htmlFor="email" sx={ FORM_STYLES.label   }>
          { FORM_MSG[language].eMailLabel } :
        </InputLabel>
        <TextField
          type="text"
          id="email"
          placeholder={FORM_MSG[language].eMailPlaceholder}
          variant="filled"
          fullWidth
          value={ email }
          onChange={ handleEmailChange }
          required
          sx={ { marginBottom: '1.25rem' } }
        />
        <InputLabel htmlFor="mensaje" sx={ FORM_STYLES.label  }>
          { FORM_MSG[language].messageLabel } :
        </InputLabel>
        <TextField
          id="mensaje"
          placeholder={ FORM_MSG[language].messagePlaceholder }
          variant="filled"
          rows={ 6 }
          value={ message }
          onChange={ handleMessageChange }
          required
          multiline
          sx={ { marginBottom: '1.25rem', width: '100%' } }
        />
        { error && <p>{ error }</p> }
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
      <Snackbar
        open={ error !== '' || success }
        autoHideDuration={ 6000 }
        onClose={ handleCloseSnackbar }
      >
        { success ? (
          <MuiAlert elevation={ 6 } variant="filled" severity="success">
            { FORM_MSG[language].successSend }
          </MuiAlert>
        ) : (
          <MuiAlert elevation={ 6 } variant="filled" severity="error">
            { error }
          </MuiAlert>
        ) }
      </Snackbar>
    </>
  )
}

export default ContactForm
