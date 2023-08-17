import * as React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Typography
} from '@mui/material'

interface CardProjectProps {
  projectName: string
  projectDescription: string
  projectTechnologies: string[]
}

const CardProject: React.FC<CardProjectProps> = ({
  projectName,
  projectDescription,
  projectTechnologies
}) => {
  return (
    <Card sx={ { maxWidth: 345, marginBottom: '1.75rem' } }>
      <CardMedia
        sx={ { height: 140 } }
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { projectName }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { projectDescription }
        </Typography>
        <Grid spacing={ 1 } alignItems="center" justifyContent='flex-start' sx={{margin: '12px 0px'}}>
          <Stack direction="row" spacing={ 1 } alignItems="center" justifyContent='flex-start'>
            { projectTechnologies.map(technology => {
              return <Chip label={ technology } color="primary" variant="outlined" />
            }) }
          </Stack>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CardProject 