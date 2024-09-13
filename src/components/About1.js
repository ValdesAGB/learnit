import React from 'react'
import styled from 'styled-components'
import { about1Cover, about1Items, underline } from '../data'
import AboutItems from './AboutItems'
import { Link } from 'react-router-dom'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'
import { moveHorizontally } from '../data/animation'

const Section = styled.section`
  padding-bottom: 250px;
  padding-top: 120px;

  @media (max-width: 767px) {
    padding-bottom: 60px;
    padding-top: 60px;
  }

  .container {
    padding: 0;
  }
`

const CoverContent = styled.div`
  margin-left: -30px;

  @media (min-width: 1440px) {
    margin: 0;
  }
`

const Content = styled.div`
  max-width: 447px;
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 0;

  .dots {
    max-width: 112px;
    top: -2px;
    left: -2px;
    position: absolute;
    z-index: -1;
    width: 100%;
    animation: ${moveHorizontally} 3s linear infinite alternate;

    @media (max-width: 575px) {
      display: none;
    }
  }

  .circle {
    max-width: 298px;
    right: -10%;
    top: 50px;
    z-index: -1;
    position: absolute;
    width: 100%;

    @media (max-width: 575px) {
      display: none;
    }
  }

  .cover3 {
    width: 100%;
  }

  .cover4 {
    max-width: 287px;
    position: absolute;
    bottom: 40px;
    right: -22%;
    width: 100%;

    @media (max-width: 575px) {
      max-width: 200px;
      right: -5%;
    }
  }
`

const ExperienceContainer = styled.div`
  background: ${colors.white};
  border-radius: 8px;
  box-shadow: ${colors.shadow};
  padding: 20px;
  max-width: 170px;
  position: absolute;
  top: 130px;
  left: -50px;

  @media (max-width: 767px) {
    top: 50px;
    left: 50px;
    padding: 10px;
  }

  h5 {
    font-size: 28px;
    font-weight: 600;
    line-height: 28px;
    color: ${colors.primary_color};

    span {
      display: inline-block;
      color: ${colors.primary_color};
    }
  }

  .years {
    font-size: 14px;
    display: inline-block;
    color: ${colors.paragraph};
  }
`

const TextContainer = styled.div`
  float: right;
`

const HeadSection = styled.div`
  h5 {
    color: ${colors.primary_color};
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    font-family: ${polices.spartan};
  }

  h2 {
    text-transform: capitalize;
    font-size: 36px;
    font-weight: 700;
    line-height: 50px;
    margin: 0;
    padding: 0;
    color: ${colors.secondary_color};
    font-family: ${polices.spartan};

    @media (max-width: 425px) {
      font-size: 30px;
      font-weight: 600;
      line-height: 38px;
    }

    span {
      color: ${colors.secondary_color};
      position: relative;
      z-index: 1;
      display: inline-block;

      img {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
        vertical-align: middle;
      }
    }
  }

  p {
    margin-top: 20px;
    margin: 0;
    padding: 0;
    line-height: 28px;
    font-size: 16px;
  }
`

const MiddleSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 30px;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`

const Button = styled(Link)`
  padding: 15px 25px;
  background-color: ${colors.primary_color}; /* Couleur de fond initiale */
  font-weight: 600;
  line-height: 18px;
  color: ${colors.white};
  position: relative;
  font-family: ${polices.spartan};
  border-radius: 8px;
  z-index: 1;
  display: inline-block;
  overflow: hidden;
  text-transform: capitalize;
  margin-top: 50px;
  text-decoration: none;
  transition: color 0.3s ease;

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
console.log(window.innerWidth)
function About1({ to }) {
  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <div>
            <div className="row g-4">
              <div className="col-xl-5">
                <CoverContent>
                  <Content>
                    <img src={about1Cover.dots} alt="first" className="dots" />
                    <img
                      src={about1Cover.circle}
                      alt="second"
                      className="circle"
                    />
                    <img
                      src={about1Cover.third}
                      alt="third"
                      className="cover3"
                    />
                    <img src={about1Cover.four} alt="four" className="cover4" />

                    <ExperienceContainer>
                      <h5>
                        <span>25</span>+
                      </h5>

                      <span className="years">Years Experience</span>
                    </ExperienceContainer>
                  </Content>
                </CoverContent>
              </div>
              <TextContainer className="col-xl-7">
                <HeadSection>
                  <h5>About Us</h5>
                  <h2>
                    Learn & grow Your{' '}
                    <span>
                      Skills
                      <img src={underline} alt="underline" />
                    </span>{' '}
                    From Anywhere
                  </h2>

                  <p>
                    Aonsectetur adipiscing elit Aenean scelerisque augue vitae
                    consequat Juisque eget congue velit in cursus leo sodales
                    the turpis euismod quis sapien euismod quis sapien the
                  </p>
                </HeadSection>

                <MiddleSection>
                  {about1Items.map(({ id, icone, title, background }) => (
                    <AboutItems
                      id={id}
                      icone={icone}
                      title={title}
                      background={background}
                    />
                  ))}
                </MiddleSection>

                <Button to={to}>
                  About Us
                  <i className="bi bi-arrow-right" />
                </Button>
              </TextContainer>
            </div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default About1
