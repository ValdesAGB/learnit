import React from 'react'
import { about3Elements, mentorElements, underline } from '../data'
import Mentor from './Mentor'
import styled from 'styled-components'
import { arryUpDown, sway_Y } from '../data/animation'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const Section = styled.section`
  overflow: hidden;
  position: relative;
  z-index: 1;
  padding-bottom: 120px;
  padding-top: 120px;
  background-color: ${colors.sub_bg};

  @media (max-width: 767px) {
    padding-bottom: 60px;
    padding-top: 60px;
  }

  .container {
    padding: 0;
  }
`

const FirstCoverContainer = styled.div`
  top: 0px;
  right: 100px;
  position: absolute;
  z-index: -1;

  img {
    animation: ${sway_Y} 3s linear infinite alternate;
  }
`

const SecondCoverContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 115px;
  z-index: -1;

  img {
    animation: ${arryUpDown} 2s ease infinite alternate;
  }
`

const ThirdCoverContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
  z-index: -1;
`

const HeadContent = styled.div`
  margin-bottom: 60px;
  text-align: center !important;

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }

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
      display: inline-block;
      position: relative;
      z-index: 1;

      img {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
      }
    }
  }
`

function About3({ endOfList }) {
  return (
    <React.Fragment>
      <Section>
        <FirstCoverContainer>
          <img src={about3Elements.line} alt="about 3" />
        </FirstCoverContainer>
        <SecondCoverContainer>
          <img src={about3Elements.earth} alt="about 3" />
        </SecondCoverContainer>
        <ThirdCoverContainer>
          <img src={about3Elements.right_rectangle} alt="about 3" />
        </ThirdCoverContainer>

        <div className="container">
          <HeadContent>
            <h5>OUR MENTOR</h5>

            <h2>
              Meet with{' '}
              <span>
                Our Expert <img src={underline} alt="underline" />
              </span>{' '}
              Mentor
            </h2>
          </HeadContent>

          <div className="row g-4">
            {mentorElements
              .slice(0, endOfList)
              .map(({ id, cover, name, post }) => (
                <Mentor id={id} cover={cover} name={name} post={post} />
              ))}
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default About3
