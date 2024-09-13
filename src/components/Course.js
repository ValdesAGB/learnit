import React from 'react'
import styled from 'styled-components'
import Note from '../untils/Note'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'
import { Link } from 'react-router-dom'

const Container = styled.div`
  margin-right: 24px;
  height: 100%;
  position: relative;

  @media (max-width: 767px) {
    margin: 0 10px;
  }
`

const Content = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background-color: ${colors.white};
`

const CoverContainer = styled.div`
  position: relative;

  img {
    width: 100%;
  }
`

const PriceContainer = styled.div`
  position: absolute;
  bottom: -28px;
  left: 26px;

  h5 {
    width: 56px;
    height: 56px;
    line-height: 56px;
    text-align: center;
    border-radius: 50%;
    background-color: ${colors.primary_color};
    color: ${colors.white};
    margin: 0 auto;
    font-size: 18px;
    font-weight: 600;
  }
`

const CourseContent = styled.div`
  padding: 30px;
  padding-top: 50px;

  h3 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
    margin: 0;
    padding: 0;
    color: red;
    font-family: ${polices.spartan};
  }
`

const CourseContentLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: ${colors.secondary_color};
  transition: all 0.5s ease;

  &:hover {
    color: ${colors.primary_color};
    text-decoration: underline;
  }
`

const List = styled.ul`
  gap: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0;
  align-items: center;
  display: flex;

  text-decoration: none;

  li {
    list-style: none;

    i {
      margin-right: 0.25rem;
      vertical-align: middle;
    }

    span {
      font-size: 14px;
      color: ${colors.secondary_color};

      &:hover {
        color: ${colors.primary_color};
        cursor: pointer;
      }
    }
  }
`

const Professor = styled.div`
  border-top: 1px solid #e5e5e5;
  gap: 1rem;
  padding-top: 1rem;
  align-items: center;
  justify-content: space-between;
  display: flex;
`

const ProfessorContainer = styled.div`
  gap: 0.5rem;
  align-items: center;
  display: flex;

  img {
    vertical-align: middle;
  }

  span {
    text-decoration: none;
    display: inline-block;
    color: ${colors.secondary_color};

    &:hover {
      color: ${colors.primary_color};
      cursor: pointer;
    }
  }
`

function Course({
  id,
  cover,
  title,
  nb_student,
  nb_lesson,
  autor_name,
  autor_cover,
  note,
  price,
}) {
  return (
    <React.Fragment>
      <Container key={id}>
        <Content>
          <CoverContainer>
            <img src={cover} alt={title} />
            <PriceContainer>
              <h5>${price}</h5>
            </PriceContainer>
          </CoverContainer>

          <CourseContent>
            <h3>
              <CourseContentLink to="/course-details">
                {title}
              </CourseContentLink>
            </h3>
            <List>
              <li>
                <i className="bi bi-people" />
                <span>{nb_student} Students</span>
              </li>
              <li>
                <i class="bi bi-book" />
                <span>{nb_lesson} Lessons</span>
              </li>
            </List>

            <Professor>
              <ProfessorContainer>
                <img src={autor_cover} alt={autor_name} />
                <span>{autor_name}</span>
              </ProfessorContainer>

              <div>
                <Note note={note} />
              </div>
            </Professor>
          </CourseContent>
        </Content>
      </Container>
    </React.Fragment>
  )
}

export default Course
