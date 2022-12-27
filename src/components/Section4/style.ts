import styled from 'styled-components'
import { devices } from '../../styles/devices'

const SectionContainer = styled.section`
  position: relative;
  min-height: 90vh;
  background: var(--bg-linear);
  padding: 3rem;

  img {
    position: absolute;
    top: 0;
    right: 0;
    height: 90vh;
  }

  @media (${devices.laptop}) {
    display: flex;
    justify-content: center;
    padding: 2rem;
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
  width: min(35rem, 90vw);

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
    font-weight: var(--fw-bold);
  }

  @media (${devices.laptop}) {
    p {
      width: 100%;
    }
  }
`

export { SectionContainer, TextContainer }
