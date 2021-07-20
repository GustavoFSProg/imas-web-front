import React from 'react'
import { Container, Lista } from './styles'

function Header() {
  return (
    <Container>
      <Lista>
        {/* <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: ' #006666',
            fontFamily: 'Lato',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          Home
        </Link> */}
      </Lista>
      <Lista>
        {/* <Link
          to="/about"
          style={{
            textDecoration: 'none',
            color: ' #006666',
            fontFamily: 'Lato',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          Sobre
        </Link> */}
      </Lista>
    </Container>
  )
}

export default Header
