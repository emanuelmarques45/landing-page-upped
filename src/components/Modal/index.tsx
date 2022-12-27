import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { ModalContainer } from './style'
import { motion } from 'framer-motion'
import { Backdrop, Button } from '..'
import { MouseEvent } from 'react'

const dropIn = {
  hidden: {
    y: '-80vh',
    opacity: 0,
    rotate: '90deg',
    scale: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    rotate: '0deg',
    transition: {
      duration: 1,
      type: 'spring',
      damping: 20,
      stiffness: 70
    },
    scale: 1
  },
  exit: {
    y: '100vh',
    opacity: 0,
    transition: {
      stiffness: 200
    }
  }
}

const Modal = ({ closeModal }: any) => {
  const handleClick = (ev: MouseEvent<HTMLButtonElement>) => {
    const links = []

    links.push(
      'https://chat.whatsapp.com/GvygX6cZgcs3xn6Y5DNCgF',
      'https://chat.whatsapp.com/KDuXCXMoZqi7W6AC5f8T54',
      'https://chat.whatsapp.com/KfBZtitXEuwAbvFydSQctN',
      'https://chat.whatsapp.com/CzNbrOxz1El1LzwzSA4Co8',
      'https://chat.whatsapp.com/FO6ya1zqzq45CwikHvG6ss',
      'https://chat.whatsapp.com/GTS5d7xTGVPBudujLdoeoQ',
      'https://chat.whatsapp.com/HjfbzWbkzJt2YZjbhgnjvC',
      'https://chat.whatsapp.com/Bs4c4l6yr8h9at58dhLWxk'
    )

    const random = Math.floor(Math.random() * links.length)

    const win: Window = window
    win.location = links[random]
  }

  return (
    <>
      <Backdrop closeModal={closeModal}>
        <motion.div
          onClick={ev => ev.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalContainer>
            <p>Participe do nosso grupo de Whatsapp</p>
            <div className="arrow">
              <FontAwesomeIcon
                icon={faAnglesDown}
                // shake
                // flip
                // fade
                // beatFade
                // beat
                bounce
                size="2x"
              />
            </div>
            <div className="btn-close">
              <FontAwesomeIcon
                icon={faXmark}
                onClick={closeModal}
              />
            </div>
            <Button onClick={ev => handleClick(ev)}>quero participar</Button>
          </ModalContainer>
        </motion.div>
      </Backdrop>
    </>
  )
}

export { Modal }
