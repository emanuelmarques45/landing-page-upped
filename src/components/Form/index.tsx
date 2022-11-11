import { Button } from '../Button'
import { FormContainer, FormStyled } from './style'
import { logoDesign } from '../../assets'

const Form = () => {
  return (
    <>
      <FormContainer>
        <img src={logoDesign} alt="Design Logo" />
        <h2>
          <span>de 21 a 23 de novembro</span> | 100% online e gratuito
        </h2>
        <p>
          A Fórmula para ganhar muito dinheiro como designer que me tornou
          independente antes dos 18 anos de idade! Mesmo começando do total 0 e
          sem nenhuma experiência.
        </p>
        <FormStyled>
          <div className="input-container">
            <input type="text" id="name" required />
            <label htmlFor="name">Nome</label>
            <span>Obrigatório*</span>
          </div>
          <div className="input-container">
            <input type="email" id="email" required />
            <label htmlFor="email">Email</label>
            <span>Obrigatório*</span>
          </div>
          <Button light>quero minha vaga agora</Button>
        </FormStyled>
      </FormContainer>
    </>
  )
}

export { Form }
