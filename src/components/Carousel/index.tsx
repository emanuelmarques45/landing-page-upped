import { CarouselContainer } from './style'
import {
  imgCarousel1,
  imgCarousel2,
  imgCarousel3,
  imgCarousel4,
  imgCarousel5
} from '../../assets'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const images = [
  imgCarousel1,
  imgCarousel2,
  imgCarousel3,
  imgCarousel4,
  imgCarousel5
]

const CarouselC = () => {
  return (
    <CarouselContainer>
      <Carousel
        emulateTouch
        swipeable
        dynamicHeight
        showThumbs={false}
      >
        {images.map((image, idx) => {
          return (
            <div
              className="item"
              key={idx}
            >
              <img
                src={image}
                alt="Carousel Image"
              />
            </div>
          )
        })}
      </Carousel>
    </CarouselContainer>
  )
}

export { CarouselC }
