import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Grid, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { useLanguageContext } from '../../../context/LanguageContext'
import { EXPERIENCE_STYLES } from './ExperienceSectionStyles'
import { EXPERIENCE_TITLE, JOB_1, JOB_1_DESCRIPTION, JOB_1_TECHNOLOGIES, JOB_1_TECHNOLOGIES_ICONS, JOB_1_TITLE, JOB_1_YEAR, JOB_2, JOB_2_DESCRIPTION, JOB_2_TECHNOLOGIES, JOB_2_TECHNOLOGIES_ICONS, JOB_2_TITLE, JOB_2_YEAR, JOB_3, JOB_3_DESCRIPTION, JOB_3_TECHNOLOGIES, JOB_3_TECHNOLOGIES_ICONS, JOB_3_TITLE, JOB_3_YEAR, JOB_4, JOB_4_DESCRIPTION, JOB_4_TECHNOLOGIES, JOB_4_TECHNOLOGIES_ICONS, JOB_4_TITLE, JOB_4_YEAR } from './ExperienceSectionConstants'
import { technologies } from '../../../utils/constants'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={ 8 } square { ...props } />
))(({ theme }) => ({
  border: `2px solid ${ theme.palette.divider }`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={ <ExpandMoreIcon sx={ { fontSize: '1.50rem' } } /> }
    { ...props }
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    flexDirection: 'column'
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '2px solid rgba(0, 0, 0, .125)',
}))

const ExperienceSection: React.FC = () => {
  const { language } = useLanguageContext()
  const [expanded, setExpanded] = useState<string | false>('panel1')

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <main id="experience">
      <Grid container sx={ EXPERIENCE_STYLES.container }>
        <Grid item xs={ 12 } sx={ { marginBottom: '32px' } }>
          <Typography variant="h2" textAlign="center" textTransform="uppercase" my="0.5rem">
            { EXPERIENCE_TITLE[language] }
          </Typography>
        </Grid>
        <Grid item xs={ 12 } sm={ 10 } md={ 9 }>
          <Accordion expanded={ expanded === 'panel1' } onChange={ handleChange('panel1') }>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography variant="h3" gutterBottom>
                { JOB_1[language] }
              </Typography>
              <Typography >
                <span style={ EXPERIENCE_STYLES.span }>{ JOB_1_YEAR[language] } </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h4" gutterBottom>
                { JOB_1_TITLE[language] }
              </Typography>
              <Typography sx={ { marginBottom: '1rem' } }>
                { JOB_1_DESCRIPTION[language] }
              </Typography>
              <Typography sx={ { textDecoration: 'underline', marginBottom: '18px' } }>
                { JOB_1_TECHNOLOGIES[language] }
              </Typography>
              { JOB_1_TECHNOLOGIES_ICONS[language].map((tech, index) => {
                const techInfo = technologies.find(t => t.alt === tech)
                return (
                  <Typography key={ `job1-${ index }` }>
                    { techInfo &&
                      <span>
                        <img src={ techInfo.src } alt={ techInfo.alt } width="18" height="18" style={ { margin: '0px 8px' } } />
                        { techInfo ? techInfo.alt : tech }
                      </span>
                    }
                  </Typography>
                )
              }) }
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={ expanded === 'panel2' } onChange={ handleChange('panel2') }>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography variant="h3" gutterBottom>
                { JOB_2[language] }
              </Typography>
              <Typography >
                <span style={ EXPERIENCE_STYLES.span }>{ JOB_2_YEAR[language] } </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h4" gutterBottom>
                { JOB_2_TITLE[language] }
              </Typography>
              <Typography sx={ { marginBottom: '1rem' } }>
                { JOB_2_DESCRIPTION[language] }
              </Typography>
              <Typography sx={ { textDecoration: 'underline', marginBottom: '18px' } }>
                { JOB_2_TECHNOLOGIES[language] }
              </Typography>
              { JOB_2_TECHNOLOGIES_ICONS[language].map((tech, index) => {
                const techInfo = technologies.find(t => t.alt === tech)
                return (
                  <Typography key={ `job2-${ index }` }>
                    { techInfo &&
                      <span >
                        <img src={ techInfo.src } alt={ techInfo.alt } width="18" height="18" style={ { margin: '0px 8px' } } />
                        { techInfo ? techInfo.alt : tech }
                      </span>
                    }
                  </Typography>
                )
              }) }
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={ expanded === 'panel3' } onChange={ handleChange('panel3') }>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography variant="h3" gutterBottom>
                { JOB_3[language] }
              </Typography>
              <Typography >
                <span style={ EXPERIENCE_STYLES.span }>{ JOB_3_YEAR[language] } </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h4" gutterBottom>
                { JOB_3_TITLE[language] }
              </Typography>
              <Typography sx={ { marginBottom: '1rem' } }>
                { JOB_3_DESCRIPTION[language] }
              </Typography>
              <Typography sx={ { textDecoration: 'underline', marginBottom: '18px' } }>
                { JOB_3_TECHNOLOGIES[language] }
              </Typography>
              { JOB_3_TECHNOLOGIES_ICONS[language].map((tech, index) => {
                const techInfo = technologies.find(t => t.alt === tech)
                return (
                  <Typography key={ `job3-${ index }` }>
                    { techInfo &&
                      <span >
                        <img src={ techInfo.src } alt={ techInfo.alt } width="18" height="18" style={ { margin: '0px 8px' } } />
                        { techInfo ? techInfo.alt : tech }
                      </span>
                    }
                  </Typography>
                )
              }) }
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={ expanded === 'panel4' } onChange={ handleChange('panel4') }>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" >
              <Typography variant="h3" gutterBottom>
                { JOB_4[language] }
              </Typography>
              <Typography >
                <span style={ EXPERIENCE_STYLES.span }>{ JOB_4_YEAR[language] } </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h4" gutterBottom>
                { JOB_4_TITLE[language] }
              </Typography>
              <Typography sx={ { marginBottom: '1rem' } }>
                { JOB_4_DESCRIPTION[language] }
              </Typography>
              <Typography sx={ { textDecoration: 'underline', marginBottom: '18px' } }>
                { JOB_4_TECHNOLOGIES[language] }
              </Typography>
              { JOB_4_TECHNOLOGIES_ICONS[language].map((tech, index) => {
                const techInfo = technologies.find(t => t.alt === tech)
                return (
                  <Typography key={ `job4-${ index }` }>
                    { techInfo &&
                      <span >
                        <img src={ techInfo.src } alt={ techInfo.alt } width="18" height="18" style={ { margin: '0px 8px' } } />
                        { techInfo ? techInfo.alt : tech }
                      </span>
                    }
                  </Typography>
                )
              }) }
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </main>
  )
}

export default ExperienceSection