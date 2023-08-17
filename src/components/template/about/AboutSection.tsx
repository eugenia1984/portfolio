import { Grid, Typography } from '@mui/material'
import { useLanguageContext } from '../../../context/LanguageContext'
import TitleH2 from '../../atom/TitleH2'
import { TITLE, TEXT } from './AboutSectionConstants'
import { ABOUT_STYLES } from './AboutSectionStyles'

interface AboutSectionProps { }

const AboutSection: React.FC<AboutSectionProps> = ({ }) => {
  const { language } = useLanguageContext()

  return (
    <section id="about">
      <Grid container sx={ ABOUT_STYLES.container }>
        <Grid item xs={ 12 } sm={ 5 }>
        <TitleH2 titleText={TITLE[language]} />
        </Grid>
        <Grid item xs={ 12 } sm={ 7 }>
          <Typography>{TEXT[language]}</Typography>
        </Grid>
      </Grid>
    </section>
  )
}

export default AboutSection