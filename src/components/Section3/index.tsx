import { SectionContainer } from './style'
import {
  imgCarousel1,
  imgCarousel2,
  imgCarousel3,
  imgCarousel4,
  imgCarousel5
} from '../../assets'

const Section3 = () => {
  return (
    <>
      <SectionContainer>
        <h2>
          <span>Está vendo essas artes aqui?</span> Eu produzi todas em menos de{' '}
          <span>20 minutos</span> e vou te ensinar tudo nesse evento ao vivo.
        </h2>
        <ul>
          <li>
            <figure>
              <img
                src={imgCarousel2}
                alt=""
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={imgCarousel1}
                alt=""
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={imgCarousel5}
                alt=""
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={imgCarousel3}
                alt=""
              />
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={imgCarousel4}
                alt=""
              />
            </figure>
          </li>
        </ul>
      </SectionContainer>
    </>
  )
}

export { Section3 }
