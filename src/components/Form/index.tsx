import { Button, Modal } from '../'
import { FormContainer, FormStyled, InputContainer } from './style'
import { logoDesign } from '../../assets'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AnimatePresence, usePresence } from 'framer-motion'
import { sendData } from '../../utils/sellflux'

const Form = () => {
  const [name, setName] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [phone, setPhone] = useState<string | null>(null)

  useEffect(() => {
    setName(name)
    setEmail(email)
    setPhone(phone)
  }, [name, email, phone])

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const notifyError = () =>
      toast.error('Verifique as informações enviadas e tente novamente!')
    const notifySuccess = () =>
      toast.success('Suas informações foram enviadas com sucesso!')

    const data = {
      name: name,
      email: email,
      phone: phone
    }
    sendData(data)
      .then(res => {
        notifySuccess()
        setTimeout(() => {
          openModal()
        }, 1500)
      })
      .catch(err => console.log(err))
  }

  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <FormContainer>
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          {modalOpen && (
            <Modal
              modalOpen={modalOpen}
              closeModal={closeModal}
            />
          )}
        </AnimatePresence>
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
              onKeyDown={ev => setName(ev.currentTarget.value)}
              onChange={ev => setName(ev.currentTarget.value)}
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
              onKeyDown={ev => setEmail(ev.currentTarget.value)}
              onChange={ev => setEmail(ev.currentTarget.value)}
            />
            <label htmlFor="email">Email</label>
            <strong>Obrigatório*</strong>
          </InputContainer>
          <InputContainer>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              onKeyDown={ev => setPhone(ev.currentTarget.value)}
              onChange={ev => setPhone(ev.currentTarget.value)}
            />
            <label htmlFor="phone">Celular</label>
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
