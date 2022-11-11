import { MouseEvent } from 'react'
import { ButtonContainer, ButtonContainerLight } from './style'

interface ButtonProps {
  children: string
  light?: boolean
}

const Button = (props: ButtonProps) => {
  const handleClick = (ev: MouseEvent<HTMLButtonElement>) => {
    // ev.preventDefault()
  }

  return props.light ? (
    <ButtonContainerLight onClick={handleClick}>
      {props.children}
    </ButtonContainerLight>
  ) : (
    <ButtonContainer onClick={handleClick}>{props.children}</ButtonContainer>
  )
}

export { Button }
