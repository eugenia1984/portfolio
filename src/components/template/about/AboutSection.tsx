import { Box, Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import { useLanguageContext } from '../../../context/LanguageContext'
import TitleH2 from '../../atom/TitleH2'
import { TITLE, TEXT } from './AboutSectionConstants'
import { ABOUT_STYLES } from './AboutSectionStyles'
import ParallaxText from '../../atom/ParallaxText'
import htmlLogo from './../../../assets/html-5.svg'
import cssLogo from './../../../assets/css3.svg'
import bootstrapLogo from './../../../assets/bootstrap.svg'
import tailwindCssLogo from './../../../assets/tailwindcss.svg'
import materialLogo from './../../../assets/material-ui.svg'
import javascriptLogo from './../../../assets/javascript.svg'
import typescriptLogo from './../../../assets/typescript.svg'
import reactLogo from './../../../assets/react.svg'
import figmaLogo from './../../../assets/figma.svg'

interface AboutSectionProps { }

const AboutSection: React.FC<AboutSectionProps> = ({ }) => {
  const { language } = useLanguageContext()
  const sentences = (TEXT[language]).split('.').filter(sentence => sentence.trim() !== '')
  const pictures = [
    { src: htmlLogo, alt: 'HTML5' },
    { src: cssLogo, alt: 'CSS3' },
    { src: bootstrapLogo, alt: 'Bootstrap' },
    { src: tailwindCssLogo, alt: 'TailwindCSS3' },
    { src: materialLogo, alt: 'Material UI' },
    { src: javascriptLogo, alt: 'JavaScript' },
    { src: typescriptLogo, alt: 'TypeScript' },
    { src: reactLogo, alt: 'React' },
    { src: figmaLogo, alt: 'Figma' }
  ]
  return (
    <main id="about">
      <Grid container sx={ ABOUT_STYLES.container }>
        <Grid
          item
          xs={ 12 }
          sm={ 5 }
          sx={ { padding: '0rem 0.5rem 1rem' } }
        >
          <TitleH2 titleText={ TITLE[language] } />
          <ParallaxText baseVelocity={ 2 }>
            HTML5  CSS3  Bootstrap TailwindCSS Styled Components Figma
          </ParallaxText>
          <ParallaxText baseVelocity={ -2 }>
            JavaScript TypeScript React MaterialUI
          </ParallaxText>
          <Box
            component="div"
            sx={ {
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center'
            } }
          >
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
        <Grid
          item xs={ 12 }
          sm={ 7 }
          sx={ {
            padding: '0rem 1rem 1rem 1rem',
          } }
        >
          { sentences.map((sentence, index) => (
            <Typography
              key={ `p-${ index }` }
              sx={ { 
                marginBottom: '8px' ,
                maxWidth: '580px'
              } }
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