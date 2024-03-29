import { Grid, Typography } from '@mui/material'
import { useLanguageContext } from '../../../context/LanguageContext'
import { CARDS, TITLE } from './ProjectSectionConstants'
import CardProject from '../../molocule/card/CardProject'
import { PROJECT_STYLES } from './ProjectSectionStyles'

const ProjectSection: React.FC = () => {
  const { language } = useLanguageContext()

  return (
    <main id="project">
      <Grid container sx={ PROJECT_STYLES.container }>
        <Grid item xs={ 12 } sm={ 12 }>
          <Typography variant="h2" textAlign="center" textTransform="uppercase" my="0.5rem">
            { TITLE.get(language) }
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={ PROJECT_STYLES.container2 }>
        { CARDS.map((project) => {
          const { title, languageTextDescription, technologies, linkRepository, linkDeploy, imgSrc } = project

          return (
            <Grid item xs={ 12 } sm={ 6 } md={ 4 } key={ `project-id-${ title }` }>
              <CardProject
                projectName={ title }
                projectDescription={ languageTextDescription.get(language) }
                projectTechnologies={ technologies }
                projectLinkGitHub={ linkRepository }
                projectLinkDeploy={ linkDeploy }
                projectImgSrc={ imgSrc }
                key={ `project-${ title }` }
              />
            </Grid>
          )
        }) }
      </Grid>
    </main>
  )
}

export default ProjectSection