import { useLanguageContext } from "../../../context/LanguageContext"
import { idioma } from "./ResponsiveFooterConstants"

interface ResponsiveFooter { }

const ResponsiveFooter: React.FC<ResponsiveFooter> = ({}) => {
  const { language } = useLanguageContext()
  return (
    <footer>
      {idioma[language]}
    </footer>
  )
}

export default ResponsiveFooter