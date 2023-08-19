import { Grid } from '@mui/material'
import { useLanguageContext } from '../../../context/LanguageContext.tsx'
import TitleH2 from '../../atom/TitleH2'
import { TITLE } from './ContactSectionConstants.ts'
import { CONTACT_STYLES } from './ContactSectionStyles.ts'
import ContactForm from '../../molocule/form/ContactForm.tsx'

interface ContactSectionProps { }

const ContactSection: React.FC<ContactSectionProps> = ({ }) => {
  const { language } = useLanguageContext()

  return (
    <section id="contact">
      <Grid container sx={ CONTACT_STYLES.container }>
        <TitleH2 titleText={ TITLE[language] } titleAlign="center" />
        <Grid item xs={12} md={10} sx={{ padding: '1rem 1rem 2rem 1rem'}}>
          <ContactForm />
        </Grid>
      </Grid>
    </section>
  )
}

export default ContactSection