import styled from 'styled-components'

const CarouselContainer = styled.div`
  overflow: hidden;
  width: min(50rem, 90vw);

  .inner {
    display: flex;
    gap: 1.5rem;
  }

  .item {
    position: relative;
    height: min(20rem, 75vw);
    aspect-ratio: 1/1;
    transition: scale 0.4s;

    &:hover {
      scale: 1.05;
    }
  }

  .item img {
    margin: 0 auto;
    height: 100%;
    pointer-events: none;
    border-radius: 5px;
  }
`

export { CarouselContainer }
