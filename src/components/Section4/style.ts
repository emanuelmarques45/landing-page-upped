import styled from 'styled-components'
import { devices } from '../../styles/devices'

const SectionContainer = styled.section`
  position: relative;
  min-height: 90vh;
  background: var(--clr-black-400);
  padding: 1.5rem 3rem;

  img {
    position: absolute;
    top: 0;
    right: 0;
    max-height: 90vh;
  }

  @media (${devices.laptop}) {
    figure {
      display: none;
    }
  }
`

const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;

  h2 {
    color: var(--clr-white);
    font-weight: var(--fw-bold);
    font-size: var(--fs-900);
    text-align: center;
  }

  p {
    position: relative;
    color: var(--clr-white);
    font-size: var(--fs-500);
    z-index: 1;
    width: 50%;
    font-weight: var(--fw-bold);
  }

  @media (${devices.laptop}) {
    p {
      width: 80vw;
    }
  }
`

export { SectionContainer, TextContainer }
