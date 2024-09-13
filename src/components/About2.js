import React from 'react'
import { about2Cover } from '../data'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const arryLeftRight = keyframes`
  0% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(10px);
  }
`

const Section = styled.section`
  position: relative;
  z-index: 1;
  background-color: ${colors.primary_color};
  margin: 0;
  padding: 120px 0;

  @media (max-width: 767px) {
    padding-bottom: 60px;
    padding-top: 60px;
  }
`

const ThirdCoverContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;

  @media (max-width: 991px) {
    display: none;
  }
`

const Content = styled.div`
  position: relative;
  z-index: 1;

  h2 {
    font-size: 36px;
    font-weight: 700;
    line-height: 50px;
    font-family: ${polices.spartan};
    color: rgba(255, 255, 255, 1);
  }

  img {
    position: absolute;
    bottom: 10px;
    left: 210px;
    z-index: -1;
    animation: ${arryLeftRight} 2s ease infinite alternate;
  }
`

const Button = styled(Link)`
  background-color: ${colors.white};
  color: ${colors.second};
  margin-top: 30px;
  padding: 15px 25px;
  font-weight: 600;
  line-height: 18px;
  font-family: ${polices.spartan};
  border-radius: 8px;
  position: relative;
  z-index: 1;
  display: inline-block;
  overflow: hidden;
  text-transform: capitalize;
  text-decoration: none;

  i {
    font-weight: 300;
    margin-left: 10px;
  }

  &::after {
    content: '';
    position: absolute;
    left: -100%; /* Commence en dehors du bouton */
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.secondary_color}; /* Couleur de fond au survol */
    z-index: -1;
    transition: left 0.5s ease;
  }

  &:hover {
    color: ${colors.white};

    &::after {
      left: 0; /* Se déplace pour couvrir le bouton */
    }
  }
`

const FirstAndSecondCoverContainer = styled.div`
  max-width: 495px;
  position: absolute;
  bottom: 0;
  right: 18%;

  @media (max-width: 1199px) {
    display: none;
  }

  .first {
    width: 100%;
  }

  .second {
    position: absolute;
    bottom: 0;
    left: -48px;
    z-index: -1;
    max-width: 386px;
    width: 100%;
  }
`

function About2() {
  return (
    <React.Fragment>
      <Section>
        <ThirdCoverContainer>
          <img src={about2Cover.left} alt="about 2 third" />
        </ThirdCoverContainer>

        <ThirdCoverContainer>
          <img src={about2Cover.right} alt="about 2 third" />
        </ThirdCoverContainer>

        <div className="container">
          <div className="col-xl-5">
            <Content>
              <h2>15% Offer For All Categories Courses</h2>
              <Button to="/courses">
                Join Courses
                <i className="bi bi-arrow-right" />
              </Button>
              <img src={about2Cover.third} alt="Cover" />
            </Content>
          </div>
        </div>

        <FirstAndSecondCoverContainer>
          <img src={about2Cover.first} alt="about 2 cover" className="first" />
          <img
            src={about2Cover.second}
            alt="about 2 cover"
            className="second"
          />
        </FirstAndSecondCoverContainer>
      </Section>
    </React.Fragment>
  )
}

export default About2
