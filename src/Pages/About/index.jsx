import React from 'react'
import EachPageHead from '../../components/EachPageHead'
import About1 from '../../components/About1'
import About2 from '../../components/About2'
import About3 from '../../components/About3'
import Testimonials from '../../components/Testimonials'

const pageName = 'About Us'

const to = '#'

const slidesToShow = 2

const endOfList = 3

function About() {
  return (
    <React.Fragment>
      <EachPageHead pageName={pageName} />

      <About1 to={to} />
      {/* Responsivité à revoir en fonction aussi de la page d'accueil*/}

      <About2 />

      <About3 endOfList={endOfList} />
      {/* Responsivité à revoir en fonction aussi de la page d'accueil*/}

      <Testimonials slidesToShow={slidesToShow} />
      {/* Responsivité à revoir en fonction aussi de la page d'accueil*/}
    </React.Fragment>
  )
}

export default About
