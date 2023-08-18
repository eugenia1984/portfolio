import * as React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Link,
  Stack,
  Typography
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import MonitorIcon from '@mui/icons-material/Monitor'

interface CardProjectProps {
  projectName: string
  projectDescription: string
  projectTechnologies: string[]
  projectLinkGitHub: string
  projectLinkDeploy: string
}

const CardProject: React.FC<CardProjectProps> = ({
  projectName,
  projectDescription,
  projectTechnologies,
  projectLinkGitHub,
  projectLinkDeploy
}) => {
  return (
    <Card sx={ { maxWidth: 345, marginBottom: '1.75rem' } }>
      <CardMedia
        sx={ { height: 140 } }
        image="https://img.icons8.com/quill/50/bookmark--v1.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { projectName }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { projectDescription }
        </Typography>
        <Grid container spacing={ 1 } alignItems="center" justifyContent='flex-start' sx={ { margin: '12px 0px' } }>
          <Stack direction="row" spacing={ 1 } alignItems="center" justifyContent='flex-start'>
            { projectTechnologies.map((technology, index) => {
              return <Chip 
              label={ technology } 
              color="primary" 
              variant="outlined" 
              key={projectName+index}
              />
            }) }
          </Stack>
        </Grid>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" startIcon={ < GitHubIcon /> }>
          <Link href={ projectLinkGitHub } target="_blank" rel="noopener">
            GitHub
          </Link>
        </Button>
        <Button variant="outlined" size="small" startIcon={ <MonitorIcon /> }>
          <Link href={ projectLinkDeploy } target="_blank" rel="noopener">
           Deploy
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardProject 