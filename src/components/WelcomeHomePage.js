import React from 'react'
import { welcomeHomepageElements } from '../data'
import styled from 'styled-components'
import { arryUpDown, pxl_effect1, sway_YY, swayX } from '../data/animation'
import { Link } from 'react-router-dom'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const Section = styled.section`
  background-image: ${welcomeHomepageElements.background};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 190px;
  padding-top: 190px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  background-color: ${colors.sub_bg};

  @media (max-width: 767px) {
    padding: 100px 0;
  }
`

const ShapeLeftContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
`
const EarthContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 65px;
  z-index: -1;

  @media (max-width: 575px) {
    display: none;
  }

  img {
    animation: ${arryUpDown} 2s ease infinite alternate;
  }
`

const CircleContainer = styled.div`
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;

  @media (max-width: 575px) {
    display: none;
  }

  img {
    animation: ${pxl_effect1} 12s ease-out infinite;
  }
`

const LineContainer = styled.div`
  position: absolute;
  top: 65px;
  right: 110px;
  z-index: -1;

  img {
    animation: ${swayX} 3s linear infinite alternate;
  }
`

const ShapeRightContainer = styled.div`
  position: absolute;
  bottom: 65px;
  right: 0px;
  z-index: -1;

  @media (max-width: 767px) {
    display: none;
  }
`

const Content = styled.div`
  max-width: 490px;
`

const SubTitle = styled.h5`
  color: ${colors.primary_color};
  margin-bottom: 10px;
  text-transform: capitalize !important;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  font-family: ${polices.spartan};
`

const Title = styled.h1`
  letter-spacing: 2px;
  font-size: 60px;
  font-weight: 700;
  line-height: 70px;
  color: ${colors.secondary_color};
  font-family: ${polices.spartan};

  @media (max-width: 575px) {
    font-size: 46px;
    line-height: 55px;
  }
`

const Paragraph = styled.p`
  font-size: 18px;
  color: ${colors.secondary_color};
  margin-top: 20px;
  line-height: 28px;

  @media (max-width: 575px) {
    font-size: 16px;
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

const BannerContainer = styled.div`
  position: absolute;
  right: 20%;
  bottom: 0;

  @media (max-width: 1199px) {
    display: none;
  }

  @media (max-width: 1600px) {
    right: 10%;
  }
`

const CollaborateContainer = styled.div`
  transform: translate3d(-4.2975px, -4.5675px, 0px);
  max-width: 210px;
  border-radius: 8px;
  padding: 20px;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0px 4px 25px 0px #0000000f;
  left: -63px;
  bottom: 30%;
  position: absolute;

  h5 {
    font-size: 28px;
    font-weight: 600;
    line-height: 28px;
    color: ${colors.secondary_color};
    font-family: ${polices.spartan};
  }

  span {
    font-size: 14px !important;
    display: inline-block;
    color: ${colors.paragraph};
  }
`

const BookContainer = styled.div`
  transform: translate3d(-4.2975px, -4.5675px, 0px);
  top: 193px;
  left: unset;
  right: -100px;
  bottom: unset;
  max-width: 210px;
  border-radius: 8px;
  padding: 20px;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0px 4px 25px 0px #0000000f;
  position: absolute;

  h5 {
    font-size: 28px;
    font-weight: 600;
    line-height: 28px;
    color: ${colors.secondary_color};
    font-family: ${polices.spartan};
  }

  span {
    font-size: 14px !important;
    display: inline-block;
    color: ${colors.paragraph};
  }
`

const BannerLine = styled.img`
  position: absolute;
  top: 225px;
  left: 20px;
  z-index: -1;
`

const BannerShape = styled.img`
  position: absolute;
  left: 80px;
  bottom: 5px;
  z-index: -1;
`

const BannerCircle = styled.img`
  position: absolute;
  right: -20px;
  top: 220px;
  z-index: -1;
`
const BannerDots = styled.img`
  position: absolute;
  right: -20px;
  bottom: 65px;
  z-index: -1;
  animation: ${sway_YY} 3s linear infinite alternate;
`
function WelcomeHomePage() {
  return (
    <React.Fragment>
      <Section>
        <ShapeLeftContainer>
          <img src={welcomeHomepageElements.shape_left} alt="shape left" />
        </ShapeLeftContainer>

        <EarthContainer>
          <img src={welcomeHomepageElements.earth} alt="earth" />
        </EarthContainer>

        <CircleContainer>
          <img src={welcomeHomepageElements.circle} alt="circle" />
        </CircleContainer>

        <LineContainer>
          <img src={welcomeHomepageElements.line} alt="line" />
        </LineContainer>

        <ShapeRightContainer>
          <img src={welcomeHomepageElements.shape_right} alt="shape right" />
        </ShapeRightContainer>

        <div className="container">
          <Content>
            <SubTitle>ONLINE LARNING COURSE</SubTitle>

            <Title>
              Top Instructors Teach
              <span>Skills</span>
            </Title>

            <Paragraph>
              Aonsectetur adipiscing elit Aenean scelerisque augue vitae
              consequat Quisque eget congue!
            </Paragraph>

            <Button to="/courses">
              Explore Courses <i className="bi bi-arrow-right" />
            </Button>
          </Content>
        </div>

        <BannerContainer>
          <CollaborateContainer>
            <img
              src={welcomeHomepageElements.collaborateIcone}
              alt="Collaborate Icone"
            />

            <div>
              <h5>6,570+</h5>
              <span>Active Student</span>
            </div>
          </CollaborateContainer>

          <BookContainer>
            <img src={welcomeHomepageElements.bookIcone} alt="Book Icone" />

            <div>
              <h5>20k+</h5>
              <span>Online Courses</span>
            </div>
          </BookContainer>

          <img src={welcomeHomepageElements.cover} alt="cover" />
          <BannerLine
            src={welcomeHomepageElements.banner_line}
            alt="banner line"
          />
          <BannerShape
            src={welcomeHomepageElements.banner_shape}
            alt="banner shape"
          />
          <BannerCircle
            src={welcomeHomepageElements.banner_circle}
            alt="banner circle"
          />
          <BannerDots
            src={welcomeHomepageElements.banner_dots}
            alt="banner dots"
          />
        </BannerContainer>
      </Section>
    </React.Fragment>
  )
}

export default WelcomeHomePage
