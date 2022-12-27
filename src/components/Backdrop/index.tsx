import { motion } from 'framer-motion'
import { BackdropContainer } from './style'

const Backdrop = ({ children, closeModal }: any) => {
  return (
    <>
      <BackdropContainer onClick={closeModal}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </BackdropContainer>
    </>
  )
}

export { Backdrop }
