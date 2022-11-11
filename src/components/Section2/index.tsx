import { SectionContainer } from './style'
import { iconBag, iconRun, iconStats } from '../../assets'

const Section2 = () => {
  return (
    <>
      <SectionContainer>
        <ul>
          <li>
            <img src={iconBag} alt="Money Bag Icon" />
            <p>
              como fazer artes que são possíveis de cobrar no mínimo r$ 100,00
            </p>
          </li>
          <li>
            <img src={iconStats} alt="Stats Icon" />
            <p>estratégias certas para vender e ganhar muito dinheiro</p>
          </li>
          <li>
            <img src={iconRun} alt="Run Icon" />
            <p>
              se destacar da concorrência e se tornar um profissional
              diferenciado e livre de concorrências
            </p>
          </li>
        </ul>
      </SectionContainer>
    </>
  )
}

export { Section2 }
