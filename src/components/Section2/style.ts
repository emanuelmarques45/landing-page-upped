import styled from 'styled-components'
import { devices } from '../../styles/devices'

const SectionContainer = styled.section`
  background: linear-gradient(
        rgba(19, 154, 228, 0.1) 0%,
        rgba(19, 154, 228, 0) 100%
      )
      repeat scroll 0% 0%,
    rgb(0, 0, 0) none repeat scroll 0% 0%;
  padding: min(2rem, 5vw);

  h2 {
    color: var(--clr-white);
    text-transform: uppercase;
    text-align: center;
    font-weight: var(--fw-bold);
    font-size: var(--fs-600);
    margin-bottom: 2rem;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 4rem;
    flex: 1;
    flex-wrap: wrap;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    border: 4px solid var(--clr-blue-300);
    border-radius: 2rem;
    width: 18rem;
    padding: 1.5rem;
  }

  p {
    color: var(--clr-white);
    text-transform: uppercase;
    text-align: center;
  }

  @media (${devices.mobileL}) {
    li {
      width: 100%;
    }
  }
`

export { SectionContainer }
