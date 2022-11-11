import styled from 'styled-components'

const ButtonContainer = styled.button`
  background-color: var(--clr-blue-300);
  color: var(--clr-white);
  text-transform: uppercase;
  font-weight: var(--fw-bold);
  padding: 0.8rem 2.5rem;
  border-radius: 2px;
  border: 0;
  font-size: var(--fs-300);
`

const ButtonContainerLight = styled(ButtonContainer)`
  filter: drop-shadow(1px 1px 10px var(--clr-blue-300));
`

export { ButtonContainer, ButtonContainerLight }
