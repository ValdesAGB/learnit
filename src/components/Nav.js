import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const Container = styled.nav`
  display: block;

  @media (max-width: 991px) {
    display: ${(props) =>
      props.element_container === 'offcanvas' ? 'block' : 'none'};
  }
`

const ListContainer = styled.ul`
  align-items: center;
  gap: 30px;
  margin: 0;
  padding: 0;
  text-decoration: none;

  li {
    position: relative;
    list-style: none;
  }

  @media (min-width: 992px) {
    display: flex;
  }

  @media (max-width: 991px) {
    position: relative;
    float: left;
    width: 100%;
  }
`

const Links = styled(Link)`
  font-weight: 500;
  padding: 30px 0;
  font-family: ${polices.spartan};
  text-decoration: none;
  display: inline-block;
  color: ${colors.heading_color};

  &:hover {
    color: ${colors.primary_color};
  }

  @media (max-width: 991px) {
    display: block;
    float: left;
    width: 100%;
    padding: 20px 0;
    margin: 0;
    text-align: left;
    color: #fff;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
  }
`

function Nav({ element_container }) {
  return (
    <React.Fragment>
      <Container element_container={element_container}>
        <ListContainer>
          <li>
            <Links to="/">Home</Links>
          </li>

          <li>
            <Links to="/aboutus">About Us</Links>
          </li>

          <li>
            <Links to="/courses">Courses</Links>
          </li>

          <li>
            <Links to="/team">Team</Links>
          </li>

          <li>
            <Links to="/contact">Contact</Links>
          </li>
        </ListContainer>
      </Container>
    </React.Fragment>
  )
}

export default Nav
