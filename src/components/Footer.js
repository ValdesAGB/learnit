import React from 'react'
import { footerCoverElements, Logo } from '../data'
import QuickLinks from './QuickLinks'
import CoursesLinks from './CoursesLinks'
import Contact from './FooterContact'
import Newsletters from './Newsletters'
import styled from 'styled-components'
import { sway_YY } from '../data/animation'
import Copyright from './Copyright'
import { colors } from '../untils/colors'

const Section = styled.footer`
  overflow: hidden;
  position: relative;
  z-index: 1;
  background-color: ${colors.sub_bg};

  .container {
    padding: 0;
  }
`

const ShapeLeftContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  @media (max-width: 767px) {
    display: none;
  }

  img {
    vertical-align: middle;
  }
`

const ShapeRightContainer = styled.div`
  position: absolute;
  top: 20%;
  right: 0;
  z-index: -1;
  animation: ${sway_YY} 3s linear infinite alternate;

  @media (max-width: 767px) {
    display: none;
  }
`

const Content = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: self-start;
  gap: 30px;
  padding-bottom: 100px;
  padding-top: 100px;

  @media (max-width: 575px) {
    flex-direction: column;
    justify-content: left;
  }

  @media (max-width: 767px) {
    padding-bottom: 50px;
    padding-top: 50px;
  }
`

const LgoContent = styled.a`
  display: block;
  width: 170px;
  margin-bottom: 30px;
  text-decoration: none;
  color: ${colors.heading_color};
`

const Paragraph = styled.p`
  color: ${colors.heading_color};
  opacity: 0.8;
  padding: 0;
  line-height: 28px;
  font-size: 16px;
`

const LogoContainer = styled.div`
  max-width: 293px;
  width: 100%;
`

const QuicksAndCoursesLinksContainer = styled.div`
  max-width: 175px;
  width: 100%;
`

const NewslettersContainer = styled.div`
  max-width: 270px;
  width: 100%;
`

function Footer() {
  return (
    <React.Fragment>
      <Section className="row p-0">
        <div>
          <ShapeLeftContainer>
            <img src={footerCoverElements.shape_left} alt="shape" />
          </ShapeLeftContainer>
          <ShapeRightContainer>
            <img src={footerCoverElements.shape_right} alt="shape" />
          </ShapeRightContainer>
          <div className="container">
            <Content>
              <LogoContainer>
                <LgoContent href="#">
                  <img src={Logo} alt="logo" />
                </LgoContent>
                <Paragraph>
                  Phasellus ultricies aliquam volutpat ullamcorper laoreet
                  neque, a lacinia curabitur lacinia mollis
                </Paragraph>
                <Contact />
              </LogoContainer>
              <QuicksAndCoursesLinksContainer className="col">
                <QuickLinks />
              </QuicksAndCoursesLinksContainer>
              <QuicksAndCoursesLinksContainer className="col">
                <CoursesLinks />
              </QuicksAndCoursesLinksContainer>
              <NewslettersContainer>
                <Newsletters />
              </NewslettersContainer>
            </Content>
          </div>
          <Copyright />
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Footer
