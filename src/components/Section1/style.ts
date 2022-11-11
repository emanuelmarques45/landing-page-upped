import styled from 'styled-components'
import { banner } from '../../assets'
import { devices } from '../../styles/devices'

const SectionContainer = styled.section`
  min-height: calc(100vh - 100px);
  width: 100vw;
  background: url(${banner}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 4rem 2rem;

  @media (${devices.tablet}) {
    justify-content: center;
  }
`
export { SectionContainer }
