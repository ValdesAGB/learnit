import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const Cover = styled.img`
  border-radius: 12px;
  width: 100%;
`

const ProfessorName = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 50px;
  margin: 0;
  padding: 0;
  color: ${colors.heading_color};
  font-family: ${polices.spartan};
`

const Post = styled.span`
  display: inline-block;
  color: ${colors.span};
`

const Paragraph = styled.p`
  margin-top: 25px;
  line-height: 28px;
  font-size: 16px;
`

const ListContainer = styled.ul`
  margin: 35px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 35px;
  border-bottom: 1px solid ${colors.border};
  border-top: 1px solid ${colors.border};
  padding: 30px 0;
  text-decoration: none;
`

const List = styled.li`
  color: ${colors.heading_color};
  list-style: none;

  i {
  }
`

const Icone = styled.i`
  margin-right: 0.25rem;
  color: ${(props) => (props.color ? '#ffa41b' : null)};
`

const LinkContainer = styled.a`
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid ${colors.primary_color};
  color: ${colors.primary_color};
  margin-right: 5px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  &:hover {
    border-radius: 0;
    color: ${colors.white};
    background-color: ${colors.primary_color};
  }
`

function ProfessorDetails() {
  return (
    <React.Fragment>
      <div className="row g-4 align-items-center">
        <div className="col-lg-4">
          <div>
            <Cover
              src="https://gramentheme.com/html/learnit/assets/images/team/team-details-image1.jpg"
              alt="Professor Cover"
            />
          </div>
        </div>
        <div className="col-lg-8">
          <div>
            <ProfessorName>Kawser Ahmed</ProfessorName>

            <Post>Web Design</Post>

            <Paragraph>
              Adipiscing elit. Mauris viverra nisl quis mollis laoreet. Ut eget
              lacus a felis accumsan pharetra in dignissim enim. In amet odio
              mollis urna aliquet volutpat. Sed bibendum nisl vehicula imperdiet
              imperdiet, augue massa fringilla.
            </Paragraph>

            <ListContainer>
              <List>Experience: 10 Years</List>
              <List>
                <Icone className="bi bi-people" /> 188 Students
              </List>
              <List>
                <Icone className="bi bi-star-fill" color /> 454 (36 Review)
              </List>
            </ListContainer>

            <div>
              <LinkContainer>
                <i className="bi bi-facebook" />
              </LinkContainer>
              <LinkContainer>
                <i className="bi bi-twitter" />
              </LinkContainer>
              <LinkContainer>
                <i className="bi bi-linkedin" />
              </LinkContainer>
              <LinkContainer>
                <i className="bi bi-youtube" />
              </LinkContainer>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProfessorDetails
