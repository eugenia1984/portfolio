import React, { ReactNode } from 'react'
import { Button, ButtonProps } from '@mui/material'
import './NewWindowButtonStyles.css'

interface NewWindowButtonProps extends ButtonProps {
  ariaLabelText: string
  urlWindow: string
  icon: ReactNode
  buttonText?: string
}

/**
 * A Button with an icon, that once it's click a new browser window'll be open
 * @prop ariaLabelText: the aria label of teh button
 * @prop uslWindow: the url of the new open window
 * @prop icon: the icon to display before text
 * @prop buttonText (optional), the text display in the button
 */
const NewWindowButton: React.FC<NewWindowButtonProps> = ({
  ariaLabelText,
  urlWindow,
  icon,
  buttonText
}) => {
  const handleOpenWindow = () => window.open(urlWindow, '_blank')

  return (
    <Button
      variant="outlined"
      color="primary"
      aria-label={ ariaLabelText }
      onClick={ handleOpenWindow }
      startIcon={ icon }
    >
      { buttonText && buttonText }
    </Button>
  )
}

export default NewWindowButton 