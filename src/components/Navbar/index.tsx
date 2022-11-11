import { Button } from '..'
import { logo } from '../../assets'
import { NavbarContainer } from './style'

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <nav>
          <img src={logo} alt="Upped Logo" />
          <Button>quero minha vaga agora</Button>
        </nav>
      </NavbarContainer>
    </>
  )
}

export { Navbar }
