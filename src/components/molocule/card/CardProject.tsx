import * as React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Typography
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import MonitorIcon from '@mui/icons-material/Monitor'
import NewWindowButton from '../../atom/NewWindowButton'
import { useTheme } from '../../../context/ThemeContext'
import { ThemeMode } from '../../../utils/constants'

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
  const { themeMode } = useTheme()
  return (
    <Card sx={ {
      width: '90%',
      margin: '1.75rem auto',
      boxShadow: themeMode === ThemeMode.Light ?
        '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.15)'
        : '0 4px 8px rgba(250, 250, 250, 0.2), 0 6px 20px rgba(250, 250, 250, 0.15)'
    } }>
      <CardMedia
        sx={ { height: 140 } }
        image="https://img.freepik.com/free-photo/side-view-kids-with-magnifying-glass_23-2149668696.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="h3" component="div">
          { projectName }
        </Typography>
        <Typography variant="body1" color="text.secondary">
          { projectDescription }
        </Typography>
        <Grid
          container
          spacing={ 1 }
          alignItems="center"
          justifyContent='flex-start'
          sx={ { margin: '12px 0px' } }
        >
          <Stack
            direction="row"
            spacing={ 1 }
            alignItems="center"
            justifyContent='flex-start'
          >
            { projectTechnologies.map((technology, index) => {
              return <Chip
                label={ technology }
                color="primary"
                variant="outlined"
                key={ projectName + index }
              />
            }) }
          </Stack>
        </Grid>
      </CardContent>
      <CardActions sx={ { paddingBottom: '1rem' } }>
        <NewWindowButton
          ariaLabelText="GitHub"
          urlWindow={ projectLinkGitHub }
          icon={ < GitHubIcon /> }
          buttonText="GitHub"
        />
        <NewWindowButton
          ariaLabelText="GitHub"
          urlWindow={ projectLinkDeploy }
          icon={ <MonitorIcon /> }
          buttonText="Deploy"
        />
      </CardActions>
    </Card>
  );
}

export default CardProject 