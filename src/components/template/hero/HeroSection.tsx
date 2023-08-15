import { Grid, Link, Typography } from '@mui/material'
import { TITLE, SUBTITLE, EXPERIENCE, BTN_TEXT } from './HeroSectionConstants'
import { useLanguageContext } from '../../../context/LanguageContext'
import cvEN from '/maria-eugenia-costa-en.pdf'
import cvES from '/maria-eugenia-costa-es.pdf'
import cvPT from '/maria-eugenia-costa-pt.pdf'
import TitleH2 from '../../atom/TitleH2'
interface HeroSectionProps { }

const HeroSection: React.FC<HeroSectionProps> = ({ }) => {
  const { language } = useLanguageContext()
  let downloadCV = ''
  switch(language) {
    case('es'):
      downloadCV = cvES
      break;
    case('en'):
      downloadCV = cvEN
      break;
    case('pt'):
      downloadCV = cvPT
      break;
  }

  return (
    <section id="hero">
      <Grid container sx={ { padding: '1.75rem 0.5rem' } }>
        <Grid item xs={ 12 } sm={ 6 }>
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
            href={downloadCV}
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