import { Link, Typography } from '@mui/material'
import { useLanguageContext } from '../../../context/LanguageContext'
import { Colors, ThemeMode, YEAR } from '../../../utils/constants'
import { allRightsReserved } from './ResponsiveFooterConstants'
import { FOOTER } from './ResponsiveFooterStyles'
import { useTheme } from '../../../context/ThemeContext'


interface ResponsiveFooter { }

const ResponsiveFooter: React.FC<ResponsiveFooter> = ({ }) => {
  const { language } = useLanguageContext()
  const { themeMode } = useTheme()

  return (
    <footer
      style={ {
        color: themeMode === ThemeMode.Light ? Colors.PrimaryLightText : Colors.PrimaryDarkText,
        background: themeMode === ThemeMode.Light ? Colors.PrimaryLight : Colors.PrimaryDark
      } }
    >
      <Typography sx={ FOOTER.text }>
        Copyright © { YEAR } { allRightsReserved[language] }
        <Link
          href="https://www.linkedin.com/in/maríaeugeniacosta/"
          target="_blank"
          rel="noopener"
          underline="hover"
          aria-label="LinkedIn: maríaeugeniacosta"
          sx={{ color: 'inherit', fontWeight: '700'}}
        >
          María Eugenia Costa</Link>
      </Typography>
    </footer>
  )
}

export default ResponsiveFooter