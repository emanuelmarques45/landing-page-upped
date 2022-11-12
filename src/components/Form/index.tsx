import { Button } from '../'
import { FormContainer, FormStyled, InputContainer } from './style'
import { logoDesign } from '../../assets'

const Form = () => {
  return (
    <>
      <FormContainer>
        <figure>
          <img
            src={logoDesign}
            alt="Design Logo"
          />
        </figure>
        <h2>
          <span>de 21 a 23 de novembro</span> | 100% online e gratuito
        </h2>
        <p>
          A Fórmula para ganhar muito dinheiro como designer que me tornou
          independente antes dos 18 anos de idade! Mesmo começando do total 0 e
          sem nenhuma experiência.
        </p>
        <FormStyled>
          <InputContainer>
            <input
              type="text"
              id="name"
              required
            />
            <label htmlFor="name">Nome</label>
            <span>Obrigatório*</span>
          </InputContainer>
          <InputContainer>
            <input
              type="email"
              id="email"
              required
            />
            <label htmlFor="email">Email</label>
            <span>Obrigatório*</span>
          </InputContainer>
          <Button light>quero minha vaga agora</Button>
          <p>inscreva-se grátis e ganhe um pack de design no seu e-mail*</p>
        </FormStyled>
      </FormContainer>
    </>
  )
}

export { Form }
