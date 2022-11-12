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
  align-items: flex-start;
  padding: 0 min(4rem, 5vw) 2rem;

  @media (${devices.tablet}) {
    align-items: center;
    background-position: 65%;
    background-attachment: fixed;
  }
`
export { SectionContainer }
