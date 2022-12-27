import styled from 'styled-components'

const BackdropContainer = styled.div`
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    inset: 0;
    z-index: 999;
  }
`

export { BackdropContainer }
