import React from 'react'
import EachPageHead from '../../components/EachPageHead'
import { coursesPageElements } from '../../data'
import CoursesCard from '../../components/CoursesCard'
import styled from 'styled-components'

const pageName = 'Courses'

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
`

function Courses() {
  return (
    <React.Fragment>
      <EachPageHead pageName={pageName} />

      <Section>
        <div className="container">
          <div className="row g-4">
            {coursesPageElements.map(
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
                level,
                time,
              }) => (
                <CoursesCard
                  id={id}
                  cover={cover}
                  title={title}
                  nb_student={nb_student}
                  nb_lesson={nb_lesson}
                  autor_name={autor_name}
                  autor_cover={autor_cover}
                  note={note}
                  price={price}
                  level={level}
                  time={time}
                />
              )
            )}
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Courses
