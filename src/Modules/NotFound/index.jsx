import React from 'react'
import { Container } from './css/styles'
import picture from '../../Commons/Images/not-found.png'

const NotFound = () => {
  return (
      <Container>
        <img src={picture} alt='logo' style={{ width: '10%' }} />
        <h2>No hemos encontrado la página que buscabas</h2>
      </Container>
  )
}

export default NotFound
