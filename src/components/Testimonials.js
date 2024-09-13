import React from 'react'
import { testimonialsElements, underline } from '../data'
import Testi from './Testi'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: (props) => props.slidesToShow,
  slidesToScroll: 1,
  arrows: false,
  autoply: true,
  autoplaSpeed: 500,

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

    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 1,
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
  marin-left: 18%;
  marin-right: -9%;
`

const Head = styled.div`
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
      position: relative;
      z-index: 1;
      display: inline-block;

      img {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
        transition: all 0.5s;
        vertical-align: middle;
      }
    }
  }

  p {
    margin-top: 20px;
    padding: 0;
    line-height: 28px;
    font-size: 16px;
  }
`

const TestiContenair = styled.div`
  border-radius: 8px;
  box-shadow: 0px 4px 25px 0px #0000000f;
`

function Testimonials({ slidesToShow }) {
  return (
    <React.Fragment>
      <Section>
        <Content className="container">
          <div className="row g-5">
            <div className="col-xl-6 col-xxl-4">
              <Head>
                <h5>Testimonials</h5>
                <h2>
                  Testimonials from Our{' '}
                  <span>
                    Students
                    <img src={underline} alt="underline" />
                  </span>
                </h2>
                <p>
                  Aonsectetur adipiscing elit Aenean scelerisque augue vitae
                  consequat Juisque eget congue.
                </p>
              </Head>
            </div>

            <div className="col-xl-6 col-xxl-8">
              <TestiContenair>
                <Slider {...settings} slidesToShow={slidesToShow}>
                  {testimonialsElements.map(
                    ({ id, cover, name, post, note }) => (
                      <Testi
                        id={id}
                        cover={cover}
                        name={name}
                        post={post}
                        note={note}
                      />
                    )
                  )}
                </Slider>
              </TestiContenair>
            </div>
          </div>
        </Content>
      </Section>
    </React.Fragment>
  )
}

export default Testimonials
