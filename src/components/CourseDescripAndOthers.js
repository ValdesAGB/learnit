import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const CoverContainer = styled.div`
  position: relative;
  margin-bottom: 40px;

  img {
    border-radius: 8px;
    width: 100%;
  }
`

const TypeOfCourse = styled.a`
  padding: 2px 12px;
  background-color: ${colors.primary_color};
  color: ${colors.white};
  border-radius: 4px;
  font-weight: 500;
  font-family: ${polices.spartan};
  display: inline-block;
  text-decoration: none;
`

const Title = styled.h3`
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 20px;
  line-height: 32px;
  font-weight: 600;
  color: ${colors.heading_color};
  font-family: ${polices.spartan};

  @media (min-width: 1200px) {
    font-size: 1.75rem;
  }
`

const ListContainer = styled.ul`
  border-bottom: 1px solid ${colors.border};
  border-top: 1px solid ${colors.border};
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  text-decoration: none;
  margin: 0;
  padding: 20px 0;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 3rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: capitalize;
    list-style: none;
    margin-bottom: 0;

    a {
      text-decoration: none;
      display: inline-block;
      color: ${colors.heading_color};

      &:hover {
        color: ${colors.primary_color};
      }
    }
  }
`

const ListIcone = styled.i`
  color: ${(props) => (props.color ? '#ffa41b' : colors.primary_color)};
`

const CourseDescriptionContainer = styled.div`
  margin: 30px 0;

  h3 {
    font-size: 30px !important;
    margin-bottom: 20px;
    line-height: 32px;
    font-weight: 600;

    color: ${colors.heading_color};
    font-family: ${polices.spartan};
  }
`

const CourseDescriptionParagraph = styled.p`
  margin-bottom: ${(props) => (props.mb ? '20px' : 0)};
  line-height: 28px;
  font-size: 16px;
`

const RequirementsTitle = styled.h3`
  font-size: 30px !important;
  margin-bottom: 20px;
  line-height: 32px;
  font-weight: 600;
  color: ${colors.heading_color};
  font-family: ${polices.spartan};

  @media (min-width: 1200px) {
    font-size: 1.75rem;
  }
`

const RequirementsListContainer = styled.ul`
  margin-top: 30px;
  text-decoration: none;
  padding: 0;

  li {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: capitalize;
    list-style: none;

    span {
      height: 30px;
      line-height: 27px;
      text-align: center;
      border-radius: 50%;
      max-width: 30px;
      width: 100%;
      border: 1px solid ${colors.primary_color};
    }
  }
`

function CourseDescripAndOthers() {
  return (
    <React.Fragment>
      <div>
        <CoverContainer>
          <img
            src="https://gramentheme.com/html/learnit/assets/images/courses/courses-details-image1.jpg"
            alt="Cover"
          />
        </CoverContainer>

        <TypeOfCourse href="#">Technology</TypeOfCourse>

        <Title>The Complete SEO Digital Marketing Course</Title>

        <ListContainer>
          <li>
            <img
              src="https://gramentheme.com/html/learnit/assets/images/courses/courses-user1.jpg"
              alt="Cover"
            />
            <a href="#">Jane Cooper</a>
          </li>
          <li>
            <ListIcone className="bi bi-play-circle" />
            <a href="">30 Classes</a>
          </li>
          <li>
            <ListIcone className="bi bi-star-fill" color />
            <a href="">3.4 (36 Review)</a>
          </li>
        </ListContainer>

        <CourseDescriptionContainer>
          <h3>Course Descriptions</h3>

          <CourseDescriptionParagraph mb>
            Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut
            labore et dolore of magna aliqua. Ut enim ad minim veniam, made of
            owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea dolor commodo consequat. Duis aute irure and dolor in
            reprehenderit.
          </CourseDescriptionParagraph>

          <CourseDescriptionParagraph>
            The is ipsum dolor sit amet consectetur adipiscing elit. Fusce
            eleifend porta arcu In hac augu ehabitasse the is platea augue
            thelorem turpoi dictumst. In lacus libero faucibus at malesuada
            sagittis placerat eros sed istincidunt augue ac ante rutrum sed the
            is sodales augue consequat.
          </CourseDescriptionParagraph>
        </CourseDescriptionContainer>

        <div>
          <RequirementsTitle>Requirements for The Course</RequirementsTitle>

          <CourseDescriptionParagraph>
            Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet.
            Donec quis convallis neque. In id lacus pulvinar lacus, eget
            vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis
            in. Sed a massa eget lacus consequat auctor.
          </CourseDescriptionParagraph>

          <RequirementsListContainer>
            <li>
              <span>
                <i class="bi bi-check2"></i>
              </span>
              Ut viverra bibendum lorem, at tempus nibh mattis
            </li>
            <li>
              <span>
                <i class="bi bi-check2"></i>
              </span>
              quis nostrud exercitation ullamco laboris nisi
            </li>
            <li>
              <span>
                <i class="bi bi-check2"></i>
              </span>
              Duis aute irure and dolor in reprehenderit.
            </li>
            <li>
              <span>
                <i class="bi bi-check2"></i>
              </span>
              ante rutrum sed the is sodales augue consequat.
            </li>
          </RequirementsListContainer>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CourseDescripAndOthers
