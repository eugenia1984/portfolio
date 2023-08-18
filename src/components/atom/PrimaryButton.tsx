import React from 'react'
import { Button, ButtonProps } from '@mui/material'

interface PrimaryButtonProps extends ButtonProps {
  ariaLabelText: string
  buttonText: string
  handleClick: () => void
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  ariaLabelText,
  buttonText,
  handleClick,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      aria-label={ ariaLabelText }
      onClick={ handleClick }
    >
      { buttonText ? buttonText : '' }
    </Button>
  )
}

export default PrimaryButton 