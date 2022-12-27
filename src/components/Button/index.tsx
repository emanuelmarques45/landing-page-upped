import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer, ButtonContainerLight } from './style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: any
  light?: boolean
}

const Button = (props: ButtonProps) => {
  return props.light ? (
    <ButtonContainerLight>{props.children}</ButtonContainerLight>
  ) : (
    <ButtonContainer {...props}>{props.children}</ButtonContainer>
  )
}

export { Button }
