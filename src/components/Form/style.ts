import styled from 'styled-components'
import { devices } from '../../styles/devices'

const FormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 45vw;
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

  strong {
    color: var(--clr-blue-300);
    font-weight: var(--fw-bold);
  }

  @media screen and (-webkit-min-device-pixel-ratio: 1),
    and (min-device-width: 1000px),
    and (max-device-width: 1600px) {
    @media (${devices.laptop}) and (min-resolution: 192dpi) {
      max-width: 70vw;
    }
    @media (${devices.tablet}) and (min-resolution: 192dpi) {
      max-width: 70vw;
    }
  }

  /* @media (${devices.tablet}) {
    max-width: 90vw;
  } */
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
    font-size: var(--fs-300);
  }

  p {
    text-transform: uppercase;
    font-size: var(--fs-300);
    white-space: nowrap;
  }

  @media (${devices.tablet}) {
    &,
    button {
      width: 100%;
    }

    p {
      white-space: normal;
    }
  }
`

const InputContainer = styled.div`
  width: 100%;
  position: relative;

  input {
    padding: 0.6rem;
    width: 100%;
    background-color: var(--clr-off-white);
    border-radius: 5px;
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

  strong {
    position: absolute;
    right: 0;
    top: -1rem;
    font-style: italic;
    font: italic var(--fw-bold) var(--fs-200) 'Inter';
  }
`

export { FormContainer, FormStyled, InputContainer }
