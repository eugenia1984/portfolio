import TitleH2 from "../../atom/TitleH2"

interface ContactSectionProps {}

const ContactSection: React.FC<ContactSectionProps> = ({}) => {
  return (
    <section id="contact">
      <TitleH2 titleText='Contact' />
    </section>
  )
}

export default ContactSection