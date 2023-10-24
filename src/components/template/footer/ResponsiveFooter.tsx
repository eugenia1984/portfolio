import { useEffect } from 'react'
import { Link, Typography } from '@mui/material'
import { useLanguageContext } from '../../../context/LanguageContext'
import { Colors, ThemeMode, YEAR } from '../../../utils/constants'
import { allRightsReserved } from './ResponsiveFooterConstants'
import { FOOTER } from './ResponsiveFooterStyles'
import { useTheme } from '../../../context/ThemeContext'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const ResponsiveFooter: React.FC = () => {
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
        Copyright © { YEAR } { allRightsReserved.get(language) } María Eugenia Costa
        <Link
          href="https://www.linkedin.com/in/maria-eugenia-costa/"
          target="_blank"
          rel="noopener"
          underline="hover"
          aria-label="Linked In: maria-eugenia-costa"
          sx={ { color: 'inherit', marginLeft: '12px' } }
        >
          <LinkedInIcon fontSize="small" />
        </Link>
        <Link
          href="https://github.com/eugenia1984"
          target="_blank"
          rel="noopener"
          underline="hover"
          aria-label="GitHub: eugenia1984"
          sx={ { color: 'inherit', marginLeft: '12px' } }
        >
          <GitHubIcon fontSize="small" />
        </Link>
      </Typography>
    </footer>
  )
}

export default ResponsiveFooter