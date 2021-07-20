import React from 'react'
import Sidebar from '../Sidebar/index'
import { Container, Footer, Data, SideBarContainer } from './styles'

import Header from '../Header/index'

function Home() {
  return (
    <>
      <Header />

      <SideBarContainer>
        <Sidebar />
      </SideBarContainer>
      <Container>
        <Footer>
          <Data>©2020 Imagens.Arte CNPJ: 29.779.590/0001-84 São Leopoldo-RS</Data>
          <Data>Siga-nos em: {/* <img src={insta} alt="instagram" width="25%" /> */}</Data>
          <Data>©2020 Imagens.Arte CNPJ: 29.779.590/0001-84 São Leopoldo-RS</Data>
        </Footer>
      </Container>
    </>
  )
}

export default Home
