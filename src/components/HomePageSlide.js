import React from 'react'
import { homePageSlideElements } from '../data'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

const swiperParams = {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 100,
    disableOnInteraction: false,
  },

  breakpoints: {
    // Pour les écrans de moins de 576px (mobile)
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // Pour les écrans de moins de 768px (tablette)
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // Pour les écrans de moins de 1024px (tablette en mode paysage)
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    // Pour les écrans de moins de 1200px (petits écrans de bureau)
    1200: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
}

const Section = styled.section`
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 60px;
  padding-top: 60px;
  borer: red solid 1px;
`

const Content = styled(SwiperSlide)`
  width: 100%;
  margin-right: 24px;
  text-align: center;
  borer: green solid 1px;

  img {
    display: inline-block;
    vertical-align: middle;
    boder: black 1px solid;
    max-width: 100%;
  }
`

function HomePageSlide() {
  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <Swiper {...swiperParams}>
            {homePageSlideElements.map(({ id, cover }) => (
              <Content key={id}>
                <img src={cover} alt={id} />
              </Content>
            ))}
          </Swiper>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default HomePageSlide
