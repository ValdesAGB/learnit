import React from 'react'
import {
  popularCoursesDecorElements,
  popularCoursesElements,
  underline,
} from '../data'
import Course from './Course'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'
import { pxl_float_two } from '../data/animation'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const Arrow = styled.div`
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-radius: 50%;
  color: ${colors.heading_color};
  border: 1px solid #e5e5e5;
  font-size: 20px;
  background-color: ${colors.white};
  position: absolute;
  top: 50%;
  z-index: 9;
  ${(props) => (props.left ? 'left: -30px;' : 'right: -30px;')}

  &:hover {
    background-color: ${colors.primary_color};
    color: ${colors.heading_color};
  }

  i {
    position: absolute;
    left: 0px;
    top: 0;
    bottom: 0;
    right: 0;
  }
`

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <Arrow className={className} style={{ ...style }} onClick={onClick} left>
      <i className="bi bi-arrow-left" />
    </Arrow>
  )
}

const NextArrow = ({ className, style, onClick }) => {
  return (
    <Arrow className={className} style={{ ...style }} onClick={onClick}>
      <i className="bi bi-arrow-right" />
    </Arrow>
  )
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoply: true,
  autoplaSpeed: 500,
  prevArrow: <PrevArrow />, // Flèche précédente personnalisée
  nextArrow: <NextArrow />, // Flèche suivante personnalisée

  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
      },
    },

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
      },
    },
  ],
}

const Section = styled.section`
  overflow: hidden;
  position: relative;
  z-index: 1;
  background-color: ${colors.sub_bg};
  padding-bottom: 120px;
  padding-top: 120px;

  .container {
    padding: 0;
  }

  @media (max-width: 767px) {
    padding-bottom: 60px;
    padding-top: 60px;
  }
`

const LineContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const ShapeContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 75px;
  z-index: -1;

  img {
    animation: ${pxl_float_two} 2s ease infinite alternate;
    vertical-align: middle;
  }
`

const HeadContainer = styled.div`
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
    color: ${colors.heading_color};
    font-family: ${polices.spartan};

    @media (max-width: 425px) {
      font-size: 30px;
      font-weight: 600;
      line-height: 38px;
    }

    span {
      color: ${colors.heading_color};
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

const CoursesContainer = styled.div`
  position: relative;
  z-index: 1;
  padding: 0;
`

function PopularCourses() {
  return (
    <React.Fragment>
      <Section>
        <LineContainer>
          <img src={popularCoursesDecorElements.line} alt="line" />
        </LineContainer>
        <ShapeContainer>
          <img src={popularCoursesDecorElements.shape} alt="" />
        </ShapeContainer>

        <div className="container">
          <HeadContainer>
            <h5>Popular Courses</h5>

            <h2>
              Explore Our{' '}
              <span>
                Popular <img src={underline} alt="underline" />
              </span>{' '}
              Courses
            </h2>
          </HeadContainer>

          <CoursesContainer>
            <Slider {...settings}>
              {popularCoursesElements.map(
                ({
                  id,
                  cover,
                  title,
                  nb_student,
                  nb_lesson,
                  autor_name,
                  autor_cover,
                  note,
                  price,
                }) => (
                  <Course
                    id={id}
                    cover={cover}
                    title={title}
                    nb_student={nb_student}
                    nb_lesson={nb_lesson}
                    autor_name={autor_name}
                    autor_cover={autor_cover}
                    note={note}
                    price={price}
                  />
                )
              )}
            </Slider>
          </CoursesContainer>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default PopularCourses
