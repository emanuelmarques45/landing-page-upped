import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer, ButtonContainerLight } from './style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  light?: boolean
}

const Button = (props: ButtonProps) => {
  return props.light ? (
    <ButtonContainerLight>{props.children}</ButtonContainerLight>
  ) : (
    <ButtonContainer>{props.children}</ButtonContainer>
  )
}

export { Button }
