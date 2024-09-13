import React from 'react'
import EachPageHead from '../../components/EachPageHead'
import { notFoundCover } from '../../data'
import { colors } from '../../untils/colors'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { polices } from '../../untils/polices'

const pageName = '404 Not Found'

const Section = styled.section`
  padding-top: 120px;
  padding-bottom: 120px;

  @media (max-width: 767px) {
    padding-bottom: 60px;
    padding-top: 60px;
  }

  .container {
    padding: 0;
  }
`

const NotFoundContainer = styled.div`
  text-align: center;

  img {
    display: inline-block;
    width: 100%;
  }
`

const Content = styled.div`
  margin-top: 80px;
  text-align: center;

  @media (max-width: 767px) {
    margin-top: 40px;
  }
`
const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
  line-height: 50px;
  color: ${colors.heading_color};
  font-family: ${polices.spartan};

  @media (max-width: 767px) {
    font-size: 36px;
  }

  span {
    font-weight: 400;
    color: ${colors.primary_color};
    display: inline-block;
  }
`

const Paragraph = styled.p`
  line-height: 28px;
  font-size: 18px;
  color: ${colors.heading_color};

  @media (max-width: 767px) {
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

function NotFound() {
  return (
    <React.Fragment>
      <EachPageHead pageName={pageName} />

      <Section>
        <div>
          <div className="container">
            <NotFoundContainer>
              <img src={notFoundCover} alt="404 Not Found" />
            </NotFoundContainer>

            <Content>
              <Title>
                <span>Oops!</span> Page not found.
              </Title>

              <Paragraph>The page you are looking for does not exist</Paragraph>

              <Button to="/">
                Back To Home
                <i className="bi bi-arrow-right" />
              </Button>
            </Content>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default NotFound
