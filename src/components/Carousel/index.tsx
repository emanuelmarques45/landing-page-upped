import { CarouselContainer } from './style'
import {
  imgCarousel1,
  imgCarousel2,
  imgCarousel3,
  imgCarousel4,
  imgCarousel5
} from '../../assets'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const images = [
  imgCarousel1,
  imgCarousel2,
  imgCarousel3,
  imgCarousel4,
  imgCarousel5
]

const Carousel = () => {
  const carousel = useRef()
  const [width, setWidth] = useState(0)
  // const [imgOpen, setImgOpen] = useState(false)

  useEffect(() => {
    //@ts-ignore
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <>
      {/* @ts-ignore */}
      <CarouselContainer ref={carousel}>
        <motion.div
          className="inner"
          whileTap={{ cursor: 'grab' }}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {images.map((image, idx) => {
            return (
              <motion.div
                className="item"
                key={idx}
                // onClick={setImgOpen(!imgOpen)}imgOpen
                // ? <motion.div layoutId='grow'></motion.div>
                // :
                // }
                /* {imgOpen ? <motion.div layoutId="grow"></motion.div> : null}{' '}
                 */
              >
                <img
                  src={image}
                  alt="Carousel Image"
                />
              </motion.div>
            )
          })}
        </motion.div>
      </CarouselContainer>
    </>
  )
}

export { Carousel }
