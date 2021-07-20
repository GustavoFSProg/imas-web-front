import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Lista } from './styles'

function Sidebar() {
  return (
    <Container>
      <br />

      <Lista>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'brown',
            fontFamily: 'Lato',
            fontSize: '15px',
            fontWeight: 'bold',
          }}
        >
          Animais
        </Link>
      </Lista>
      <Lista>
        <Link
          to="#"
          style={{
            textDecoration: 'none',
            color: 'brown',
            fontFamily: 'Lato',
            fontSize: '15px',
            fontWeight: 'bold',
          }}
        >
          Chaves
        </Link>
      </Lista>
      <Lista>
        <Link
          to="#"
          style={{
            textDecoration: 'none',
            color: 'brown',
            fontFamily: 'Lato',
            fontSize: '15px',
            fontWeight: 'bold',
          }}
        >
          Cinema
        </Link>
      </Lista>
      <Lista>
        <Link
          to="#"
          style={{
            textDecoration: 'none',
            color: 'brown',
            fontFamily: 'Lato',
            fontSize: '15px',
            fontWeight: 'bold',
          }}
        >
          Mafalda
        </Link>
      </Lista>
      <Lista>
        <Link
          to="#"
          style={{
            textDecoration: 'none',
            color: 'brown',
            fontFamily: 'Lato',
            fontSize: '15px',
            fontWeight: 'bold',
          }}
        >
          Desenho
        </Link>
      </Lista>
      <Lista>
        <Link
          to="#"
          style={{
            textDecoration: 'none',
            color: 'brown',
            fontFamily: 'Lato',
            fontSize: '15px',
            fontWeight: 'bold',
          }}
        >
          Divas
        </Link>
      </Lista>
    </Container>
  )
}

export default Sidebar
