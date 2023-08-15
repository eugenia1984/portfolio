import { Grid } from '@mui/material'
import { useLanguageContext } from '../../../context/LanguageContext'
import TitleH2 from '../../atom/TitleH2'

interface ProjectSectionProps {}

const ProjectSection: React.FC<ProjectSectionProps> = ({}) => {
  const { language } = useLanguageContext()

  return (
    <section id="project">
      <Grid container sx={ { padding: '1.75rem 0.5rem' } }>
        <Grid item xs={ 12 } sm={ 12 }>
          <TitleH2 titleText='Projects' />
        </Grid>
        <Grid item xs={ 12 } md={ 6 } lg={4}>
          Project Card
        </Grid>
        <Grid item xs={ 12 } md={ 6 } lg={4}>
          Project Card
        </Grid>
        <Grid item xs={ 12 } md={ 6 } lg={4}>
          Project Card
        </Grid>
      </Grid>  
    </section>
  )
}

export default ProjectSection