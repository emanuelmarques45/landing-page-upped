import { Button } from '../'
import { FormContainer, FormStyled, InputContainer } from './style'
import { logoDesign } from '../../assets'
import { FormEvent } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Form = () => {
  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const { name, email } = ev.currentTarget
    const notifyError = () =>
      toast.error('Verifique as informações enviadas e tente novamente!')
    const notifySuccess = () =>
      toast.success('Suas informações foram enviadas com sucesso!')
    await fetch(
      'https://webhook.sellflux.app/webhook/sellfront/lead/e05c7ba4e087beea9410929698dc41a6?redirect_url=https%3A%2F%2Fchat.whatsapp.com%2FCI8ed1lVaadA7vhc3iXG6y',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          phone: ' ',
          custom_fields: {
            redirect_url: 'https://chat.whatsapp.com/CI8ed1lVaadA7vhc3iXG6y'
          },
          redirect_url: 'https://chat.whatsapp.com/CI8ed1lVaadA7vhc3iXG6y',
          origin: 'sellfront',
          code: 'e05c7ba4e087beea9410929698dc41a6'
        })
      }
    )
      .then(res => {
        console.log('sucesso')

        if (res.status === 500) {
          notifyError()
          return
        }
        notifySuccess()
        setTimeout(() => {
          window.location = 'https://chat.whatsapp.com/CI8ed1lVaadA7vhc3iXG6y'
        }, 2000)
      })
      .catch(err => console.log('erro'))
  }

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
          <strong>de 21 a 23 de novembro</strong> | 100% online e gratuito
        </h2>
        <p>
          A Fórmula para ganhar muito dinheiro como designer que me tornou
          independente antes dos 18 anos de idade! Mesmo começando do total 0 e
          sem nenhuma experiência.
        </p>
        <FormStyled onSubmit={handleSubmit}>
          <InputContainer>
            <input
              type="text"
              id="name"
              name="name"
              required
            />
            <label htmlFor="name">Nome</label>
            <strong>Obrigatório*</strong>
          </InputContainer>
          <InputContainer>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
            <label htmlFor="email">Email</label>
            <strong>Obrigatório*</strong>
          </InputContainer>
          <Button light>quero minha vaga agora</Button>
          <p>inscreva-se grátis e ganhe um pack de design no seu e-mail*</p>
        </FormStyled>
      </FormContainer>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </>
  )
}

export { Form }
