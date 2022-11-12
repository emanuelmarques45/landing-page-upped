import { SectionContainer } from './style'
import { Carousel } from '..'

const Section3 = () => {
  return (
    <>
      <SectionContainer>
        <h2>
          <span>Está vendo essas artes aqui?</span> Eu produzi todas em menos de{' '}
          <span>20 minutos</span> e vou te ensinar tudo nesse evento ao vivo.
        </h2>
        <Carousel />
      </SectionContainer>
    </>
  )
}

export { Section3 }
