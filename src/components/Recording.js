import React from 'react'
import styled from 'styled-components'
import { eachPageHeadElements, recordingElements } from '../data'
import { pxl_effect2, video_animation } from '../data/animation'
import { colors } from '../untils/colors'

const Section = styled.section`
  position: relative;
  z-index: 2;

  .container {
    padding: 0;
  }

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 63%;
    background-color: ${colors.sub_bg};
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`

const Banner = styled.div`
  padding: 15px;
  background-color: ${colors.white};
  box-shadow: 0px 4px 25px 0px #0000000f;
  border-radius: 12px;
  position: relative;
  z-index: 2;
`

const DotsContainer = styled.div`
  max-width: 112px;
  position: absolute;
  left: -38px;
  bottom: -38px;
  z-index: -1;

  @media (max-width: 575px) {
    display: none;
  }

  img {
    border-radius: 12px;
    width: 100%;
    animation: ${pxl_effect2} 12s ease-out infinite;
    vertical-align: middle;
  }
`
const Cover = styled.img`
  border-radius: 12px;
  width: 100%;
`
const PlayBtnContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const PlayBtnContent = styled.div`
  position: relative;
  text-align: center;
  display: inline-block;
  z-index: 2;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border: 1px solid #ffffff;
    opacity: 0.7;
    left: 0;
    top: 0;
    border-radius: 50%;
    animation: ${video_animation} 2.5s linear infinite 1s;
  }
`

const Record = styled.a`
  position: relative;
  color: ${colors.primary_color};
  font-size: 22px;
  z-index: 1;
  background-color: ${colors.white};
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 50%;
  display: block;

  @media (max-width: 767px) {
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
  }
`

function Recording() {
  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <Banner>
            <DotsContainer>
              <img src={eachPageHeadElements.dots} alt="dots" />
            </DotsContainer>

            <Cover src={recordingElements.cover} alt="recordingCover" />

            <PlayBtnContainer>
              <PlayBtnContent>
                <Record href={recordingElements.record}>
                  <i className="bi bi-play-fill" />
                </Record>
              </PlayBtnContent>
            </PlayBtnContainer>
          </Banner>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Recording
