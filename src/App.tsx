import { Main } from './pages/'
import { GlobalStyle } from './styles/global'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <motion.main
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Main />
      </motion.main>
    </div>
  )
}

export default App
