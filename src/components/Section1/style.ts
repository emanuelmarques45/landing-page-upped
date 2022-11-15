import styled from 'styled-components'
import { banner, bannerMobile } from '../../assets'
import { devices } from '../../styles/devices'

const SectionContainer = styled.section`
  min-height: 100vh;
  margin-top: 85px;
  width: 100vw;
  background: url(${banner}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 min(4rem, 5vw) 2rem;

  @media (${devices.tablet}) {
    align-items: center;
    background: url(${bannerMobile}) top right / cover no-repeat;
    padding-top: 12rem;
    margin-top: 0;
  }
`
export { SectionContainer }
