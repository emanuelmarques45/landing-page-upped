import styled from 'styled-components'

const FormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: min(38rem, 95vw);
  font-size: var(--fs-500);

  img {
    position: relative;
    left: -2.3rem;
    bottom: -1rem;
  }

  h2 {
    text-transform: uppercase;
    margin: 0.5rem 0;
  }

  h2,
  p {
    color: var(--clr-white);
  }

  span {
    color: var(--clr-blue-300);
    font-weight: var(--fw-bold);
  }
`

const FormStyled = styled.form`
  margin-top: 2rem;
  width: 70%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.8rem;

  button {
    align-self: center;
  }

  p {
    text-transform: uppercase;
    font-size: var(--fs-300);
    white-space: nowrap;
  }
`

const InputContainer = styled.div`
  width: 100%;
  position: relative;

  input {
    padding: 0.6rem;
    width: 100%;
    background-color: var(--clr-off-white);
  }

  input:focus + label,
  input:valid + label {
    top: -1rem;
    left: 0;
    font-size: var(--fs-200);
    color: var(--clr-white);
  }

  label {
    position: absolute;
    left: 0.6rem;
    top: 0.6rem;
    transition-property: top, left, color, font-size;
    transition-duration: 0.4s;
  }

  span {
    position: absolute;
    right: 0;
    top: -1rem;
    font-style: italic;
    font: italic var(--fw-bold) var(--fs-200) 'Inter';
  }
`

export { FormContainer, FormStyled, InputContainer }
