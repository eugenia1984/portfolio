import { Grid, Link, Typography } from '@mui/material'
import { TITLE, SUBTITLE, EXPERIENCE, BTN_TEXT, GREETING } from './HeroSectionConstants'
import { useLanguageContext } from '../../../context/LanguageContext'
import cvEN from '/maria-eugenia-costa-en.pdf'
import cvES from '/maria-eugenia-costa-es.pdf'
import cvPT from '/maria-eugenia-costa-pt.pdf'
import TitleH2 from '../../atom/TitleH2'
import { HERO_STYLES } from './HeroSectionStyles'
interface HeroSectionProps { }

const HeroSection: React.FC<HeroSectionProps> = ({ }) => {
  const { language } = useLanguageContext()
  let downloadCV = ''
  switch (language) {
    case ('es'):
      downloadCV = cvES
      break;
    case ('en'):
      downloadCV = cvEN
      break;
    case ('pt'):
      downloadCV = cvPT
      break;
  }

  return (
    <section id="hero">
      <Grid container sx={ HERO_STYLES.container }>
        <Grid item xs={ 12 } sm={ 6 }>
          <Typography align="center" gutterBottom>
            { GREETING[language] }
          </Typography>
          <TitleH2 titleText={ TITLE[language] } />
          <Typography variant="h3" align="center" gutterBottom>
            { SUBTITLE[language] }
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            { EXPERIENCE[language] }
          </Typography>
          <Link
            color="primary"
            underline="none"
            aria-label={ BTN_TEXT[language].text }
            href={ downloadCV }
            target="_blank"
            rel="noopener"
          >
            { BTN_TEXT[language].text }
          </Link>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>

        </Grid>
      </Grid>
    </section>
  )
}

export default HeroSection