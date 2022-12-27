import { Button } from '..'
import { logo } from '../../assets'
import { NavbarContainer } from './style'

const Navbar = () => {
  const handleClick = () => {
    const win: Window = window
    win.scrollTo(0, 0)
  }

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
          <Button onClick={handleClick}>quero minha vaga agora</Button>
        </nav>
      </NavbarContainer>
    </>
  )
}

export { Navbar }
