import React, { useContext } from 'react'
import { Logo } from '../data'
import Nav from './Nav'
import Offcanvas from './Offcanvas'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { Link } from 'react-router-dom'
import { HeaderContext } from '../untils/context'
import { slideDownAnimation } from '../data/animation'

const Header = styled.header`
  position: fixed;
  z-index: 999;
  borer: yellow solid 2px;
  width: 100%;

  animation: ${slideDownAnimation} 0.8s ease-in-out;
  background-color: white;
  top: ${(props) => (!props.onTop ? '0' : null)};
`

const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 991px) {
    padding: 15px 0;
  }
`

const LogoContainer = styled(Link)`
  display: block;
  width: 170px;
  text-decoration: none;
  color: ${colors.heading_color};

  img {
    width: 100%;
  }
`

const Button = styled.button`
  width: 30px;
  line-height: 10px;
  text-align: right;
  crsor: pointer;
  border: none;
  background-color: transparent;

  @media (min-width: 992px) {
    display: none;
  }
`

const Span = styled.span`
  width: ${(props) => (props.isHovered ? '100%' : props.width)};
  height: 2px;
  background-color: ${colors.heading_color};
  display: inline-block;
  color: ${colors.span};

  ${Button}:hover & {
    width: 100%;
  }
`

function NavBar() {
  const { onTop } = useContext(HeaderContext)

  return (
    <React.Fragment>
      <Header onTop={onTop}>
        <Container className="container">
          <Content>
            <LogoContainer to="/">
              <img src={Logo} alt="Logo" />
            </LogoContainer>

            <div>
              <Nav />
            </div>

            <Button
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <Span width="100%" />
              <Span width="70%" />
              <Span width="100%" />
            </Button>

            <Offcanvas />
          </Content>
        </Container>
      </Header>
    </React.Fragment>
  )
}

export default NavBar
