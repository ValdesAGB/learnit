import React from 'react'
import EachPageHead from '../../components/EachPageHead'
import CourseDescripAndOthers from '../../components/CourseDescripAndOthers'
import CourseInclude from '../../components/CourseInclude'
import styled from 'styled-components'
import ProfessorDetails from '../../components/ProfessorDetails'
import { colors } from '../../untils/colors'

const pageName = 'Course Detail'

const Section = styled.section`
  padding-bottom: 120px;
  padding-top: 120px;
  position: relative;
  z-index: 1;

  @media (max-width: 767px) {
    padding-bottom: 60px;
    padding-top: 60px;
  }

  .container {
    padding: 0;
  }
`

const ProfessorDetailsContainer = styled.div`
  padding: 30px;
  border: 1px solid ${colors.border};
  border-radius: 12px;
  margin-top: 120px;

  @media (max-width: 767px) {
    margin-top: 60px;
    padding: 10px;
  }
`

function CourseDetail() {
  return (
    <React.Fragment>
      <EachPageHead pageName={pageName} />

      <Section>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 order-2 order-lg-1">
              <CourseDescripAndOthers />
            </div>
            <div className="col-lg-4 order-1 order-lg-2">
              <CourseInclude />
            </div>
          </div>

          <ProfessorDetailsContainer>
            <ProfessorDetails />
          </ProfessorDetailsContainer>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default CourseDetail
