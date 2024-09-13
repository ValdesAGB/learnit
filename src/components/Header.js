import React from 'react'
import SubNavBar from './SubNavBar'
import NavBar from './NavBar'
import styled from 'styled-components'

const Container = styled.div`
  borde red solid 2px;
  padding: 0;
  margin: 0;
  position: relative;
`

function Header() {
  return (
    <React.Fragment>
      <Container>
        <SubNavBar />
        <NavBar />
      </Container>
    </React.Fragment>
  )
}

export default Header
