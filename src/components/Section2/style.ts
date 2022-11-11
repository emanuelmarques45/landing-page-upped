import styled from 'styled-components'

const SectionContainer = styled.section`
  background: linear-gradient(
      180deg,
      rgba(19, 154, 228, 0.1) 0%,
      rgba(19, 154, 228, 0) 100%
    ),
    rgb(0, 0, 0);
  padding: 4rem;
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
    border: 3px solid var(--clr-blue-300);
    border-radius: 2rem;
    width: min(18rem, 90vw);
    padding: 1.2rem;
  }

  p {
    color: var(--clr-white);
    text-transform: uppercase;
    text-align: center;
  }
`

export { SectionContainer }
