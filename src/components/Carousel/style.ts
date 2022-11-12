import styled from 'styled-components'

const CarouselContainer = styled.div`
  overflow: hidden;
  width: min(50rem, 90vw);

  .inner {
    display: flex;
    gap: 1rem;
  }

  .item {
    height: 20rem;
    aspect-ratio: 1/1;
  }

  .item img {
    height: 100%;
    pointer-events: none;
    border-radius: 5px;
  }
`

export { CarouselContainer }
