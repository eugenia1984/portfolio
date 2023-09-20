import { Grid, Typography } from '@mui/material'
import { useLanguageContext } from '../../../context/LanguageContext.tsx'
import { TITLE } from './ContactSectionConstants.ts'
import { CONTACT_STYLES } from './ContactSectionStyles.ts'
import ContactForm from '../../molocule/form/ContactForm.tsx'
import ContactLinks from '../../molocule/contact-links/ContactLinks.tsx'

const ContactSection: React.FC = () => {
  const { language } = useLanguageContext()

  return (
    <main id="contact">
      <Grid container sx={ CONTACT_STYLES.container }>
        <Grid item xs={ 12 } sx={ { marginBottom: '12px' } }>
          <Typography variant="h2" textAlign="center" textTransform="uppercase" my="0.5rem">
            { TITLE.get(language) }
          </Typography>
        </Grid>
        <Grid item xs={ 11 } sm={ 5 } md={ 4 } sx={ CONTACT_STYLES.containerForm }>
          <ContactLinks />
        </Grid>
        <Grid item xs={ 11 } sm={ 6 } md={ 7 }>
          <ContactForm />
        </Grid>
      </Grid>
    </main>
  )
}

export default ContactSection