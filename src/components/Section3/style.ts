import styled from 'styled-components'
import { bcgSection3 } from '../../assets'

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 90vh;
  background: url(${bcgSection3}) center/cover no-repeat;
  padding: 2rem 0;

  h2 {
    font-size: var(--fs-700);
    text-align: center;
    font-weight: var(--fw-bold);
    margin-bottom: 3rem;
    width: min(40rem, 90vw);
    color: var(--clr-white);

    strong,
    em {
      color: var(--clr-blue-300);
    }
  }
`

export { SectionContainer }
