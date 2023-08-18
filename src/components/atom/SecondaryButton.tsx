import React from 'react'
import { Button, ButtonProps } from '@mui/material'

interface SecondaryButtonProps extends ButtonProps {
  ariaLabelText: string
  buttonText?: string
  handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined

}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  ariaLabelText,
  buttonText,
  handleClick,
}) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      aria-label={ ariaLabelText }
      onClick={ handleClick }
    >
      { buttonText ? buttonText : '' }
    </Button>
  )
}

export default SecondaryButton 