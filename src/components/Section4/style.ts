import styled from 'styled-components'

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 90vh;
  background: var(--clr-black-400);
  gap: 1rem;
  padding: 3rem;

  img {
    position: absolute;
    top: 0;
    right: 0;
    max-height: 90vh;
  }

  h2 {
    color: var(--clr-white);
    font-weight: var(--fw-bold);
    font-size: var(--fs-900);
  }

  p {
    position: relative;
    color: var(--clr-white);
    font-size: var(--fs-500);
    z-index: 1;
    width: min(40rem);
    font-weight: var(--fw-bold);
  }
`

export { SectionContainer }
