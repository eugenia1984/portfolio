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
  projectImgSrc: string
}

const CardProject: React.FC<CardProjectProps> = ({
  projectName,
  projectDescription,
  projectTechnologies,
  projectLinkGitHub,
  projectLinkDeploy,
  projectImgSrc
}) => {
  const { themeMode } = useTheme()
  const alternativeSrc= 'https://img.freepik.com/free-photo/side-view-kids-with-magnifying-glass_23-2149668696.jpg'

  return (
    <Card sx={ {
      width: '90%',
      margin: '1.75rem auto',
      boxShadow: themeMode === ThemeMode.Light ?
        '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.15)'
        : '0 4px 8px rgba(250, 250, 250, 0.2), 0 6px 20px rgba(250, 250, 250, 0.15)',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.08)', 
      }
    } }>
      <CardMedia
        sx={ { height: 260 } }
        image={ projectImgSrc !== '' ? projectImgSrc : alternativeSrc}
        title={projectName}
      />
      <CardContent>
        <Typography variant="h3" component="div">
          { projectName }
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{minHeight: '150px'}}>
          { projectDescription }
        </Typography>
        <Grid
          container
          spacing={ 1 }
          alignItems="center"
          justifyContent='flex-start'
          alignContent='flex-start'
          sx={ { margin: '12px 0px' , minHeight: '120px'} }
        >
          <Stack
            direction="row"
            spacing={ 1 }
            alignItems="center"
            justifyContent='flex-start'
            flexWrap="wrap"
            gap={1}
          >
            { projectTechnologies.map((technology, index) => {
              return (
                <Chip
                  label={ technology }
                  color="primary"
                  variant="outlined"
                  key={ projectName + index }
                />
              )
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
  )
}

export default CardProject 