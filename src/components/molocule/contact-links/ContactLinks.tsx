import { Box, Link } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import { CONTACT_LINK } from './ContactLinksStyles'

const ContactLinks = () => {
  return (
    <>
      <Link
        href="https://github.com/eugenia1984"
        target="_blank"
        rel="noopener"
        aria-label="GitHub: eugenia1984"
        sx={ CONTACT_LINK.link }
      >
        <GitHubIcon fontSize="large" />
        <Box component="span" sx={CONTACT_LINK.linkText }>
          eugenia1984
        </Box>
      </Link>
      <Link
        href="https://www.linkedin.com/in/maria-eugenia-costa/"
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn: maria-eugenia-costa"
        sx={ CONTACT_LINK.link}
      >
        <LinkedInIcon fontSize="large" />
        <Box component="span" sx={CONTACT_LINK.linkText }>
          maríaeugeniacosta
        </Box>
      </Link>
      <Link
        href="mailto:costamariaeugenia1@gmail.com"
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn: maríaeugeniacosta"
        sx={ CONTACT_LINK.link }
      >
        <EmailIcon fontSize="large" />
        <Box component="span" sx={CONTACT_LINK.linkText }>
          costamariaeugenia1@gmail.com
        </Box>
      </Link>
    </>
  )
}

export default ContactLinks