import styled from 'styled-components'
import { devices } from '../../styles/devices'

const ButtonContainer = styled.button`
  background-color: var(--clr-blue-300);
  color: var(--clr-white);
  text-transform: uppercase;
  font-weight: var(--fw-bold);
  padding: 1rem min(3rem, 5vw);
  border-radius: 2px;
  border: 0;
  font-size: var(--fs-300);
  transition: scale 0.4s;

  &:hover {
    scale: 1.1;
  }

  @media (${devices.tablet}) {
    &:hover {
      scale: 1;
    }

    &:active {
      scale: 1.1;
    }
  }
  @media (${devices.tabletS}) {
    font-size: var(--fs-300);
  }
  @media (${devices.mobileS}) {
    font-size: var(--fs-100);
  }
`

const ButtonContainerLight = styled(ButtonContainer)`
  filter: drop-shadow(1px 1px 10px var(--clr-blue-300));
`

export { ButtonContainer, ButtonContainerLight }
