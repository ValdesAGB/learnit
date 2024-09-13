import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Home from '../Pages/Home'
import Footer from './Footer'
import Courses from '../Pages/Courses'
import About from '../Pages/About'
import { Route, Routes } from 'react-router-dom'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'
import NotFound from '../Pages/404'
import Instructor from '../Pages/Team'
import Contact from '../Pages/Contact'
import CourseDetail from '../Pages/Course Détails'
import ScrollToTop from './ScrollToTop'
import SubNavBar from './SubNavBar'
import NavBar from './NavBar'
import Header from './Header'
import { HeaderProvider } from '../untils/context'

const GblobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    transition : all 0.5s;
  }


  body{
  font-family: ${polices.poppins};
    color: ${colors.paragraph};
  }
`

function App() {
  return (
    <React.Fragment>
      <GblobalStyle />
      <ScrollToTop />
      <main className="row">
        <HeaderProvider>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course-details" element={<CourseDetail />} />
            <Route path="/team" element={<Instructor />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </HeaderProvider>
      </main>

      <Footer />
    </React.Fragment>
  )
}

export default App
