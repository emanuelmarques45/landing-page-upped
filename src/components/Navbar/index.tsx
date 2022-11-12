import { Button } from '..'
import { logo } from '../../assets'
import { NavbarContainer } from './style'

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <nav>
          <figure>
            <img
              src={logo}
              alt="Upped Logo"
            />
          </figure>
          <Button>quero minha vaga agora</Button>
        </nav>
      </NavbarContainer>
    </>
  )
}

export { Navbar }
