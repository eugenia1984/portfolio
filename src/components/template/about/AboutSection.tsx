import { Box, Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import { useLanguageContext } from '../../../context/LanguageContext'
import TitleH2 from '../../atom/TitleH2'
import { TITLE, TEXT } from './AboutSectionConstants'
import { ABOUT_STYLES } from './AboutSectionStyles'
import ParallaxText from '../../atom/ParallaxText'
import { pictures } from '../../../utils/constants'

const AboutSection: React.FC = () => {
  const { language } = useLanguageContext()
  const sentences = (TEXT[language]).split('.').filter(sentence => sentence.trim() !== '')

  return (
    <main id="about">
      <Grid container sx={ ABOUT_STYLES.container }>
        <Grid item xs={ 12 }>
          <TitleH2 titleText={ TITLE[language] } />
        </Grid>
        <Grid item xs={ 12 } sm={ 5 } sx={ { padding: '0rem 0.5rem 1rem' } }>
          <ParallaxText baseVelocity={ 2 }>
            HTML5 - CSS3 - Bootstrap - TailwindCSS - Styled Components - JavaScript - TypeScript - React - MaterialUI - Next - Figma
          </ParallaxText>
          <ParallaxText baseVelocity={ -2 }>
            mySQL - Postgresql - Java - Nodejs - Jasper Report - Postman - Swagger
          </ParallaxText>
          <Box component="div" sx={ ABOUT_STYLES.boxIcons }>
            <ImageList variant="masonry" cols={ 5 } gap={ 4 }>
              { pictures.map((picture) => (
                <ImageListItem
                  key={ picture.src }
                  sx={ { width: '42px', height: '42px' } }
                >
                  <img
                    src={ picture.src }
                    alt={ `${ picture.alt } logo` }
                    loading="lazy"
                    width="42"
                    height="42"
                  />
                </ImageListItem>
              )) }
            </ImageList>
          </Box>
        </Grid>
        <Grid item xs={ 12 } sm={ 7 } sx={ { padding: '0rem 1rem 1rem 1rem' } }>
          { sentences.map((sentence, index) => (
            <Typography
              key={ `p-${ index }` }
              sx={ { marginBottom: '8px', maxWidth: '580px' } }
            >
              { sentence }.
            </Typography>
          )) }
        </Grid>
      </Grid>
    </main>
  )
}

export default AboutSection