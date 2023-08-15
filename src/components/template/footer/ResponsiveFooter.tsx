import { Link, Typography } from '@mui/material'
import { useLanguageContext } from '../../../context/LanguageContext'
import { YEAR } from '../../../utils/constants'
import { allRightsReserved } from './ResponsiveFooterConstants'


interface ResponsiveFooter { }

const ResponsiveFooter: React.FC<ResponsiveFooter> = ({ }) => {
  const { language } = useLanguageContext()
  return (
    <footer>
      <Typography sx={{ padding: '1.5rem 0.75rem', textAlign: 'center'}}>
        Copyright © { YEAR } { allRightsReserved[language] } <Link href="https://www.linkedin.com/in/maríaeugeniacosta/" target="_blank" rel="noopener" underline="hover" aria-label="link al perfil de LinkedIn: maríaeugeniacosta">
          María Eugenia Costa</Link>
      </Typography>
    </footer>
  )
}

export default ResponsiveFooter