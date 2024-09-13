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
  border: 1px solid #e5e5e5;
  padding: 20px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${colors.white};
`

const CoverContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    border-radius: 10px;
  }
`

const Time = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 14px;
  font-weight: 500;
  padding: 2px 10px;
  display: inline-block;
  color: ${colors.white};
  border-radius: 6px;
  background-color: ${colors.primary_color};
`

const CourseContent = styled.div`
  padding-top: 1.5rem;
`

const PriceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;

  .level {
    color: ${colors.paragraph};
    font-weight: 500;
    font-size: 14px;
    padding: 3px 10px;
    display: inline-block;
    border: 1px solid #e5e5e5;
    border-radius: 6px;
  }

  .price {
    font-size: 20px;
    line-height: 32px;
    color: ${colors.primary_color};
    font-weight: 600;
    font-family: ${polices.spartan};
  }
`

const Title = styled.h3`
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  color: ${colors.heading_color};
  font-family: ${polices.spartan};
`

const TitleLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: ${colors.heading_color};
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
      color: ${colors.heading_color};
      color: ${colors.primary_color};

      &:hover {
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
    color: ${colors.heading_color};
    cursor: pointer;

    &:hover {
      color: ${colors.primary_color};
    }
  }
`

function CoursesCard({
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
}) {
  return (
    <React.Fragment>
      <div key={id} className="col-md-6 col-xl-4">
        <Content>
          <CoverContainer>
            <img src={cover} alt={title} />
            <Time>
              <i className="bi bi-time" />
              {time}
            </Time>
          </CoverContainer>

          <CourseContent>
            <PriceContainer>
              <span className="level">{level}</span>
              <h4 className="price">${price}</h4>
            </PriceContainer>
            <Title>
              <TitleLink to="/course-details">{title}</TitleLink>
            </Title>
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
      </div>
    </React.Fragment>
  )
}

export default CoursesCard
