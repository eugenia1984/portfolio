import { Grid, Stack, Typography } from '@mui/material'
import { TITLE, SUBTITLE, EXPERIENCE, BTN_TEXT, GREETING } from './HeroSectionConstants'
import { useLanguageContext } from '../../../context/LanguageContext'
import cvEN from '/costa-maria-eugenia-en.pdf'
import cvES from '/costa-maria-eugenia-es.pdf'
import cvPT from '/costa-maria-eugenia-pt.pdf'
import { HERO_STYLES } from './HeroSectionStyles'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PrimaryButton from '../../atom/PrimaryButton'
import NewWindowButton from '../../atom/NewWindowButton'
import { useTheme } from '../../../context/ThemeContext'
import { ThemeMode } from '../../../utils/constants'

const HeroSection: React.FC = () => {
  const { language } = useLanguageContext()
  const { themeMode } = useTheme()

  const getHref = (language: string): string => {
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
          <Grid sx={ HERO_STYLES.introContainer } className="intro-container">
            <Typography > { GREETING.get(language) }</Typography>
            <Typography variant="h2">  { TITLE.get(language) } </Typography>
            <Typography variant="h3"> { SUBTITLE.get(language) } </Typography>
            <Typography > { EXPERIENCE.get(language) }</Typography>
            <Stack direction="row" spacing={ 1 } sx={ { mt: '12px' } }>
              <PrimaryButton
                ariaLabelText={ BTN_TEXT.get(language)!! }
                handleClick={ handleDownload }
                buttonText={  BTN_TEXT.get(language)!! }
              />
              <NewWindowButton
                ariaLabelText="GitHub profile: eugenia1984"
                urlWindow="https://github.com/eugenia1984"
                icon={ <GitHubIcon /> }
              />
              <NewWindowButton
                ariaLabelText="LinkedIn profile: maria-eugenia-costa"
                urlWindow="https://www.linkedin.com/in/maria-eugenia-costa/"
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