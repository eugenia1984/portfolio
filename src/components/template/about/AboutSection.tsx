import { Grid, Typography } from '@mui/material'
import { useLanguageContext } from '../../../context/LanguageContext'
import TitleH2 from '../../atom/TitleH2'
import { TITLE, TEXT } from './AboutSectionConstants'
import { ABOUT_STYLES } from './AboutSectionStyles'
import ParallaxText from '../../atom/ParallaxText'

interface AboutSectionProps { }

const AboutSection: React.FC<AboutSectionProps> = ({ }) => {
  const { language } = useLanguageContext()
  const sentences = (TEXT[language]).split('.').filter(sentence => sentence.trim() !== '')

  return (
    <section id="about">
      <Grid container sx={ ABOUT_STYLES.container }>
        <Grid
          item
          xs={ 12 }
          sm={ 5 }
          sx={ { padding: '1rem' } }
        >
          <TitleH2 titleText={ TITLE[language] } />
          <ParallaxText baseVelocity={ 4 }>
            HTML5 CSS3 JavaScript
          </ParallaxText>
          <ParallaxText baseVelocity={ -3 }>
          TypeScript React
          </ParallaxText>
        </Grid>
        <Grid
          item xs={ 12 }
          sm={ 7 }
          sx={ { padding: '0rem 1rem 1rem 1rem' } }
        >
          { sentences.map((sentence, index) => (
            <Typography
              key={ `p-${ index }` }
              sx={ { marginBottom: '8px' } }
            >
              { sentence }.
            </Typography>
          )) }
        </Grid>
      </Grid>
    </section>
  )
}

export default AboutSection