import styled from 'styled-components'

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--clr-off-white);
  padding: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(350px, 90vw);
  border-radius: 2rem;

  p {
    color: var(--clr-black-400);
    text-align: center;
  }

  .arrow {
    margin: 1.4rem 0;
  }

  .btn-close {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 2rem;
    aspect-ratio: 1/1;
    background-color: transparent;
    border-radius: 50%;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--clr-blue-green);
    }
  }
`
export { ModalContainer }
