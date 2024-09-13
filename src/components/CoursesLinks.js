import React from 'react'
import { coursesElements } from '../data'
import FooterList from './FooterList'

const title = 'Courses'

const element = coursesElements

function CoursesLinks() {
  return (
    <React.Fragment>
      <FooterList title={title} element={element} />
    </React.Fragment>
  )
}
export default CoursesLinks
