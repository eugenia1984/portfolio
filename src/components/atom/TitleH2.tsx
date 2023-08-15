import { Typography } from '@mui/material'

interface TitleH2Props {
  titleText: string
}

const TitleH2: React.FC<TitleH2Props> = ({ titleText }) => {
  return (
    <Typography variant="h2" align="center" gutterBottom>
      { titleText }
    </Typography>
  )
}

export default TitleH2