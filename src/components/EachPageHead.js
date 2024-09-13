import React from 'react'
import styled from 'styled-components'
import { eachPageHeadElements, sectionbgCover } from '../data'
import {
  arryLeftRight,
  arryUpDown,
  pxl_effect1,
  pxl_effect2,
  pxl_zoom_reverse,
  sunMove,
} from '../data/animation'
import { Link } from 'react-router-dom'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const Section = styled.section`
  background: ${sectionbgCover} center/cover no-repeat;
  overflow: hidden;
  position: relative;
  z-index: 1;
  padding: 150px 0;
  background-color: ${colors.sub_bg};

  @media (max-width: 767px) {
    padding: 80px 0;
  }
`

const Shape1Container = styled.div`
  position: absolute;
  top: 60px;
  left: 145px;
  z-index: -1;

  @media (max-width: 767px) {
    display: none;
  }

  img {
    animation: ${sunMove} 10s linear infinite;
    vertical-align: middle;
  }
`

const Shape2Container = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: -1;

  @media (max-width: 767px) {
    display: none;
  }
`

const Shape3Container = styled.div`
  position: absolute;
  bottom: 60px;
  left: 80px;
  z-index: -1;

  @media (max-width: 767px) {
    display: none;
  }

  img {
    animation: ${arryLeftRight} 2s ease infinite alternate;
    vertical-align: middle;
  }
`

const Shape4Container = styled.div`
  position: absolute;
  top: 60px;
  right: 15%;
  z-index: -1;

  @media (max-width: 767px) {
    display: none;
  }

  img {
    animation: ${arryUpDown} 2s ease infinite alternate;
    vertical-align: middle;
  }
`

const Shape5Container = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: -1;

  @media (max-width: 767px) {
    display: none;
  }
`

const Circle1Container = styled.div`
  position: absolute;
  top: 90px;
  left: 30%;
  z-index: -1;

  img {
    animation: ${pxl_effect1} 12s ease-out infinite;
    vertical-align: middle;
  }
`

const Circle2Container = styled.div`
  position: absolute;
  bottom: 60px;
  right: 40%;
  z-index: -1;

  img {
    animation: ${pxl_effect2} 12s ease-out infinite;
    vertical-align: middle;
  }
`

const DotsContainer = styled.div`
  position: absolute;
  bottom: 40px;
  right: 145px;
  z-index: -1;

  @media (max-width: 767px) {
    display: none;
  }

  img {
    animation: ${pxl_zoom_reverse} 5s linear infinite;
    vertical-align: middle;
  }
`

const Container = styled.div`
  div {
    text-align: center;

    h1 {
      font-size: 50px;
      font-weight: 700;
      line-height: 70px;
      margin: 0;
      padding: 0;
      color: ${colors.secondary_color};
      font-family: ${polices.spartan};
    }
  }
`

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0;
  padding: 0;
  text-decoration: none;

  li {
    font-weight: 500;
    list-style: none;

    a {
      color: ${colors.each_page_home_color};
      text-decoration: none;
      display: inline-block;
    }

    i {
      font-weight: 400;
      color: ${colors.secondary_color};
    }
  }

  .pageName {
    color: ${colors.primary_color};
    font-weight: 500;
  }
`

const Home = styled(Link)`
  color: ${colors.each_page_home_color};
  text-decoration: none;
  display: inline-block;
`

function EachPageHead({ pageName }) {
  return (
    <React.Fragment>
      <Section>
        <Shape1Container>
          <img src={eachPageHeadElements.shape1} alt="shape1" />
        </Shape1Container>
        <Shape2Container>
          <img src={eachPageHeadElements.shape2} alt="shape2" />
        </Shape2Container>
        <Shape3Container>
          <img src={eachPageHeadElements.shape3} alt="shape3" />
        </Shape3Container>
        <Shape4Container>
          <img src={eachPageHeadElements.shape4} alt="shape4" />
        </Shape4Container>
        <Shape5Container>
          <img src={eachPageHeadElements.shape5} alt="shape5" />
        </Shape5Container>
        <Circle1Container>
          <img src={eachPageHeadElements.circle1} alt="circle1" />
        </Circle1Container>
        <Circle2Container>
          <img src={eachPageHeadElements.circle2} alt="circle2" />
        </Circle2Container>
        <DotsContainer>
          <img src={eachPageHeadElements.dots} alt="dots" />
        </DotsContainer>
        <Container className="container">
          <div>
            <h1>{pageName}</h1>

            <List>
              <li>
                <Home to="/">Home</Home>
              </li>
              <li>
                <i class="bi bi-chevron-right" />
              </li>
              <li className="pageName">{pageName}</li>
            </List>
          </div>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default EachPageHead
