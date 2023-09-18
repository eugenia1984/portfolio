import { Grid } from '@mui/material'
import { useLanguageContext } from '../../../context/LanguageContext.tsx'
import TitleH2 from '../../atom/TitleH2'
import { TITLE } from './ContactSectionConstants.ts'
import { CONTACT_STYLES } from './ContactSectionStyles.ts'
import ContactForm from '../../molocule/form/ContactForm.tsx'

const ContactSection: React.FC = () => {
  const { language } = useLanguageContext()

  return (
    <section id="contact">
      <Grid container sx={ CONTACT_STYLES.container }>
        <TitleH2 titleText={ TITLE[language] } titleAlign="center" />
        <Grid item xs={ 12 } sm={ 10 } md={ 8 } sx={ { padding: '0.5rem 1rem 1.50rem', width: '100%'} }>
          <ContactForm />
        </Grid>
      </Grid>
    </section>
  )
}

export default ContactSection