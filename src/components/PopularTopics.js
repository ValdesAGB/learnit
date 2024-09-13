import React from 'react'
import { popularTopicsElements, underline } from '../data'
import Topic from './Topic'
import styled from 'styled-components'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const Section = styled.section`
  padding-bottom: 120px;
  padding-top: 120px;
  overflow: hidden;

  @media (max-width: 767px) {
    padding-bottom: 60px;
    padding-top: 60px;
  }

  .container {
    padding: 0;
  }
`

const Head = styled.div`
  margin-bottom: 60px;
  text-align: center;

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
    margin: 0;
    padding: 0;
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
        vertical-align: middle;
        z-index: -1;
      }
    }
  }
`

function PopularTopics() {
  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <Head>
            <h5>TOP CLASS COURSES</h5>
            <h2>
              Popular{' '}
              <span>
                Topics
                <img src={underline} alt="undermine" />
              </span>{' '}
              To Learn
            </h2>
          </Head>
          <div className="row g-4">
            {popularTopicsElements.map(
              ({ id, icone, title, nb_course, bg_color }) => (
                <Topic
                  id={id}
                  icone={icone}
                  title={title}
                  nb_course={nb_course}
                  bg_color={bg_color}
                />
              )
            )}
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default PopularTopics
