import { Navbar, Section1, Section2 } from '../../components'
import { MainContainer } from './style'

const Main = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Section1 />
        <Section2 />
      </MainContainer>
    </>
  )
}

export { Main }
