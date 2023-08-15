
import { useLanguageContext } from '../../../context/LanguageContext.tsx'
import TitleH2 from '../../atom/TitleH2'
import { TITLE } from './ContactSectionConstants.ts'

interface ContactSectionProps {}

const ContactSection: React.FC<ContactSectionProps> = ({}) => {
  const { language } = useLanguageContext()

  return (
    <section id="contact">
      <TitleH2 titleText={TITLE[language]} />
    </section>
  )
}

export default ContactSection