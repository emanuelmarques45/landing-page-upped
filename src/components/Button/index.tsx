import React from 'react'
import { ButtonContainer } from './style'

interface ButtonProps {
  children: string
}

const Button = ({ children }: ButtonProps) => {
  return <ButtonContainer>{children}</ButtonContainer>
}

export { Button }
