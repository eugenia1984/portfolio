import { Grid } from '@mui/material'
import { useLanguageContext } from '../../../context/LanguageContext'
import TitleH2 from '../../atom/TitleH2'
import { CARDS, TITLE } from './ProjectSectionConstants'
import CardProject from '../../molocule/card/CardProject'
import { PROJECT_STYLES } from './ProjectSectionStyles'

interface ProjectSectionProps { }

const ProjectSection: React.FC<ProjectSectionProps> = ({ }) => {
  const { language } = useLanguageContext()

  return (
    <section id="project">
      <Grid container sx={ PROJECT_STYLES.container }>
        <Grid item xs={ 12 } sm={ 12 }>
          <TitleH2 titleText={ TITLE[language] } />
        </Grid>
      </Grid>
      <Grid container sx={ PROJECT_STYLES.container2 }>
        { CARDS && CARDS.map((project, index) => {
          const {
            title,
            languageText,
            technologies,
            linkRepository,
            linkDeploy
          } = project
          return (
            <Grid
              item
              xs={ 12 }
              sm={ 6 }
              md={ 4 }
              key={ `project-id-${ index }` }
            >
              <CardProject
                projectName={ title }
                projectDescription={ languageText[language].description }
                projectTechnologies={ technologies }
                projectLinkGitHub={ linkRepository }
                projectLinkDeploy={ linkDeploy }
                key={ `project-${ index }` }
              />
            </Grid>
          )
        }) }
      </Grid>
    </section>
  )
}

export default ProjectSection