import { SectionContainer } from './style'
import { bcgSection4 } from '../../assets'

const Section4 = () => {
  return (
    <>
      <SectionContainer>
        <h2>Quem é Arthur?</h2>
        <p>
          Especialista em design, social media e gestor de tráfego. Atuo na área
          de design e com muito tempo de estudos e noites em claro aprendi a
          dominar tudo sobre comunicação visual.
        </p>
        <p>
          Depois de tanto tempo estudando e se dedicando, desenvolvi um método e
          um curso para ensinar pessoas iniciantes, designers e social media que
          querem conquistar uma transformação de vida sendo um Designer Número
          1.
        </p>
        <p>
          {' '}
          Minha missão é fazer com que você sinta confiança para trabalhar como
          designer e não seja apenas mais um no mercado, mas um profissional de
          destaque e de valor. Sua vida irá mudar para sempre depois que você
          dominar tudo sobre design, prospecção de clientes e como escalar suas
          artes.
        </p>
        <figure>
          <img
            src={bcgSection4}
            alt="Photo Arthur"
          />
        </figure>
      </SectionContainer>
    </>
  )
}

export { Section4 }
