import { Box, Link } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

const ContactLinks = () => {
  return (
    <>
      <Link
        href="https://github.com/eugenia1984"
        target="_blank"
        rel="noopener"
        underline="hover"
        aria-label="GitHub: eugenia1984"
        sx={ { color: 'inherit' } }
      >
        <GitHubIcon fontSize="large" />
        <Box component="span" sx={ { display: { xs: 'none', sm: 'inline-block' } } }>
          eugenia1984
        </Box>
      </Link>
      <Link
        href="https://www.linkedin.com/in/maríaeugeniacosta/"
        target="_blank"
        rel="noopener"
        underline="hover"
        aria-label="LinkedIn: maríaeugeniacosta"
        sx={ { color: 'inherit' } }
      >
        <LinkedInIcon fontSize="large" />
        <Box component="span" sx={ { display: { xs: 'none', sm: 'inline-block' } } }>
          maríaeugeniacosta
        </Box>
      </Link>
      <Link
        href="mailto:costamariaeugenia1@gmail.com"
        target="_blank"
        rel="noopener"
        underline="hover"
        aria-label="LinkedIn: maríaeugeniacosta"
        sx={ { color: 'inherit' } }
      >
        <EmailIcon fontSize="large" />
        <Box component="span" sx={ { display: { xs: 'none', sm: 'inline-block' } } }>
          costamariaeugenia1@gmail.com
        </Box>
      </Link>
    </>
  )
}

export default ContactLinks