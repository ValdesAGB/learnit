import React from 'react'
import EachPageHead from '../../components/EachPageHead'
import { mentorElements } from '../../data'
import Mentor from '../../components/Mentor'
import styled from 'styled-components'

const pageName = 'Instructors'

const Section = styled.section`
  padding-top: 120px;
  padding-bottom: 120px;

  @media (max-width: 767px) {
    padding-bottom: 60px;
    padding-top: 60px;
  }

  .container {
    padding: 0;
  }
`

function Instructor() {
  return (
    <React.Fragment>
      <EachPageHead pageName={pageName} />

      <Section>
        <div>
          <div className="container">
            <div className="row g-4">
              {mentorElements.map(({ id, cover, name, post }) => (
                <Mentor id={id} cover={cover} name={name} post={post} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Instructor
