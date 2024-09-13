import React from 'react'
import styled from 'styled-components'
import { freeTrialBgCover } from '../data'
import { Link } from 'react-router-dom'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const Section = styled.section`
  background-image: ${freeTrialBgCover};
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${colors.primary_color};
  padding-bottom: 120px;
  padding-top: 120px;

  @media (max-width: 767px) {
    padding-bottom: 60px;
    padding-top: 60px;
  }

  .container {
    padding: 0;
  }
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`

const Text = styled.h2`
  color: ${colors.free_trail_text_color};
  font-size: 36px;
  font-weight: 700;
  line-height: 50px;
  font-family: ${polices.spartan};
`
const Button = styled(Link)`
  padding: 15px 25px;
  background-color: ${colors.white}; /* Couleur de fond initiale */
  font-weight: 600;
  line-height: 18px;
  color: ${colors.secondary_color};
  position: relative;
  font-family: ${polices.spartan};
  border-radius: 8px;
  z-index: 1;
  display: inline-block;
  overflow: hidden;
  text-transform: capitalize;
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

function FreeTrail() {
  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <div>
            <Content>
              <Text>
                Inexpensive E-Learning Options
                <br />
                Tailored for You
              </Text>

              <Button to="#">
                Start Free Trial
                <i className="bi bi-arrow-right" />
              </Button>
            </Content>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default FreeTrail
