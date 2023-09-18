import { Grid, Stack, Typography } from '@mui/material'
import { TITLE, SUBTITLE, EXPERIENCE, BTN_TEXT, GREETING } from './HeroSectionConstants'
import { useLanguageContext } from '../../../context/LanguageContext'
import cvEN from '/maria-eugenia-costa-en.pdf'
import cvES from '/maria-eugenia-costa-es.pdf'
import cvPT from '/maria-eugenia-costa-pt.pdf'
import TitleH2 from '../../atom/TitleH2'
import { HERO_STYLES } from './HeroSectionStyles'
import { Language } from '../../../utils/types'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PrimaryButton from '../../atom/PrimaryButton'
import NewWindowButton from '../../atom/NewWindowButton'

const HeroSection: React.FC = () => {
  const { language } = useLanguageContext()

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
        <Grid item xs={ 12 } sm={ 6 } sx={{ display: 'flex'}}>
          <Grid sx={ HERO_STYLES.introContainter }>
            <Typography variant="h4" >
              { GREETING[language] }
            </Typography>
            <TitleH2 titleText={ TITLE[language] } />
            <Typography variant="h3" sx={ { paddingBottom: '1rem' } }>
              { SUBTITLE[language] }  { EXPERIENCE[language] }
            </Typography>
            <Stack direction="row" spacing={ 1 }>
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
        <Grid item xs={ 12 } sm={ 6 }>
        </Grid>
      </Grid>
    </main>
  )
}

export default HeroSection