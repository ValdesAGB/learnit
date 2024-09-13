import React from 'react'
import About1 from '../../components/About1'
import PopularCourses from '../../components/PopularCourses'
import PopularTopics from '../../components/PopularTopics'
import Recording from '../../components/Recording'
import About3 from '../../components/About3'
import Testimonials from '../../components/Testimonials'
import FreeTrail from '../../components/FreeTrail'
import HomePageSlide from '../../components/HomePageSlide'
import WelcomeHomePage from '../../components/WelcomeHomePage'

const to = '/aboutus'

const slidesToShow = 1

const endOfList = 3

function Home() {
  return (
    <React.Fragment>
      <WelcomeHomePage />

      <HomePageSlide />

      <About1 to={to} />

      <PopularCourses />

      <PopularTopics />

      <Recording />

      <About3 endOfList={endOfList} />

      <Testimonials slidesToShow={slidesToShow} />

      <FreeTrail />
    </React.Fragment>
  )
}

export default Home
