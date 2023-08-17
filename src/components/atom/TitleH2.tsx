import { Typography } from '@mui/material'
import { TextAlign } from '../../utils/types'

interface TitleH2Props {
  titleText: string
  titleAlign?: TextAlign
}

const TitleH2: React.FC<TitleH2Props> = ({
  titleText,
  titleAlign
}) => {
  return (
    <Typography
      variant="h2"
      align={ titleAlign ? titleAlign : 'center' }
      gutterBottom
    >
      { titleText }
    </Typography>
  )
}

export default TitleH2