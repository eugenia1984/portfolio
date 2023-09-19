import { Grid, Stack, Typography } from '@mui/material'
import { TITLE, SUBTITLE, EXPERIENCE, BTN_TEXT, GREETING } from './HeroSectionConstants'
import { useLanguageContext } from '../../../context/LanguageContext'
import cvEN from '/maria-eugenia-costa-en.pdf'
import cvES from '/maria-eugenia-costa-es.pdf'
import cvPT from '/maria-eugenia-costa-pt.pdf'
import { HERO_STYLES } from './HeroSectionStyles'
import { Language } from '../../../utils/types'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PrimaryButton from '../../atom/PrimaryButton'
import NewWindowButton from '../../atom/NewWindowButton'
import { useTheme } from '../../../context/ThemeContext'
import { ThemeMode } from '../../../utils/constants'

const HeroSection: React.FC = () => {
  const { language } = useLanguageContext()
  const { themeMode } = useTheme()

  const getHref = (language: Language): string => {
    if (language === 'es') return cvES
    if (language === 'en') return cvEN
    return cvPT
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = getHref(language)
    link.download = `maria-eugenia-costa-cv-${ language }`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <main id="hero">
      <Grid container sx={ HERO_STYLES.container }>
        <Grid item xs={ 12 } sm={ 6 } sx={ HERO_STYLES.containerPresentation }>
          <Grid sx={ HERO_STYLES.introContainter } className="intro-container">
            <Typography >
              { GREETING[language] }
            </Typography>
            <Typography variant="h2">
              { TITLE[language] }
            </Typography>
            <Typography variant="h3">
              { SUBTITLE[language] }
            </Typography>
            <Typography >
              { EXPERIENCE[language] }
            </Typography>
            <Stack direction="row" spacing={ 1 } sx={{mt: '12px'}}>
              <PrimaryButton
                ariaLabelText={ BTN_TEXT[language].text }
                handleClick={ handleDownload }
                buttonText={ BTN_TEXT[language].text }
              />
              <NewWindowButton
                ariaLabelText="GitHub profile"
                urlWindow="https://github.com/eugenia1984"
                icon={ <GitHubIcon /> }
              />
              <NewWindowButton
                ariaLabelText="GitHub profile"
                urlWindow="https://www.linkedin.com/in/mar%C3%ADaeugeniacosta/"
                icon={ <LinkedInIcon /> }
              />
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 } sx={ HERO_STYLES.gridItemImg }>
          <img
            src="screens/euge.png"
            height="300"
            alt="María Eugenia Costa"
            style={ {
              filter: themeMode === ThemeMode.Light ?
                'drop-shadow(10px 20px 50px rgba(50, 50, 50, 0.7)'
                : 'drop-shadow(10px 20px 30px rgba(255, 255, 255, 0.7)'
            } } />
        </Grid>
      </Grid>
    </main>
  )
}

export default HeroSection