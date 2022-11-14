import styled from 'styled-components'
import { devices } from '../../styles/devices'

const NavbarContainer = styled.header`
  background-color: var(--clr-black-300);
  padding: 0.8rem min(2rem, 3vw) 0.5rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (${devices.tablet}) {
    display: none;
  }
`
export { NavbarContainer }
