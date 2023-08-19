import React, { useState } from 'react'
import { TextField, Box, Button, Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import { emailRegex, nameRegex } from '../../../utils/constants'
import { useLanguageContext } from '../../../context/LanguageContext'
import { FORM_MSG } from './ContactFormConstants'

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
        <TextField
          label="Nombre"
          id="nombre"
          variant="outlined"
          fullWidth
          value={ name }
          onChange={ handleNameChange }
          required
          sx={ { marginBottom: '1.25rem' } }
        />
        <TextField
          label="Email"
          id="email"
          variant="outlined"
          fullWidth
          value={ email }
          onChange={ handleEmailChange }
          required
          sx={ { marginBottom: '1.25rem' } }
        />
        <TextField
          id="mensaje"
          rows={ 6 }
          placeholder="Mensaje"
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
          <Button type="submit" variant="contained" color="primary">
            {FORM_MSG[language].sendBtn}
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
