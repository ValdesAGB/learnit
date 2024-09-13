import React from 'react'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  position: sticky;
  top: 120px;
`

const Content = styled.div`
  padding: 30px;
  padding-bottom: 40px;
  border-radius: 10px;
  border: 1px solid ${colors.border};
`

const Title = styled.h3`
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  color: ${colors.heading_color};
  font-family: ${polices.spartan};
`

const ListContainer = styled.ul`
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 0;
`

const List = styled.li`
  border-top: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 15px 0;
  list-style: none;

  i {
    margin-right: 0.25rem;
    vertical-align: middle;
    font-size: 20px;
  }
`

const ContentParagraph = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;
  margin-top: 15px;

  strong {
    font-weight: 500;
    color: ${colors.heading_color};
  }

  span {
    display: inline-block;
    color: ${colors.span};
  }
`

const EventFree = styled.span`
  width: 100%;
  display: block;
  padding: 12px;
  border: 1px solid ${colors.primary_color};
  border-radius: 8px;
  color: ${colors.primary_color};
  font-weight: 600;
  font-family: ${polices.spartan};
  margin-bottom: 12px;
  text-align: center;
  margin: 0;
`

const Button = styled(Link)`
  padding: 15px 25px;
  background-color: ${colors.primary_color}; /* Couleur de fond initiale */
  font-weight: 600;
  line-height: 18px;
  color: ${colors.white};
  position: relative;
  font-family: ${polices.spartan};
  border-radius: 8px;
  z-index: 1;
  display: inline-block;
  overflow: hidden;
  text-transform: capitalize;
  margin-top: 10px;
  width: 100%;
  text-align: center;
  text-decoration: none;
  transition: color 0.3s ease;

  i {
    font-weight: 300;
    margin-left: 10px;
  }

  &::after {
    content: '';
    position: absolute;
    left: -100%; /* Commence en dehors du bouton */
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.secondary_color}; /* Couleur de fond au survol */
    z-index: -1;
    transition: left 0.5s ease;
  }

  &:hover {
    color: ${colors.white};

    &::after {
      left: 0; /* Se déplace pour couvrir le bouton */
    }
  }
`

const ShareContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  strong {
    color: ${colors.heading_color};
    font-weight: 600;
    font-family: ${polices.spartan};
  }
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

function CourseInclude() {
  return (
    <React.Fragment>
      <Container>
        <Content>
          <Title>Course includes:</Title>

          <ListContainer>
            <List>
              <i className="bi bi-bar-chart-line" />

              <ContentParagraph>
                <strong>Level:</strong>
                <span>Expert</span>
              </ContentParagraph>
            </List>
            <List>
              <i className="bi bi-clock" />

              <ContentParagraph>
                <strong>Duration:</strong>
                <span>8h 30m</span>
              </ContentParagraph>
            </List>
            <List>
              <i className="bi bi-journals" />

              <ContentParagraph>
                <strong>Lessons:</strong>
                <span>15</span>
              </ContentParagraph>
            </List>
            <List>
              <i className="bi bi-people" />

              <ContentParagraph>
                <strong>Students:</strong>
                <span>120</span>
              </ContentParagraph>
            </List>
            <List>
              <i className="bi bi-patch-check" />

              <ContentParagraph>
                <strong>Certifications:</strong>
                <span>Yes</span>
              </ContentParagraph>
            </List>
            <List>
              <i className="bi bi-globe" />

              <ContentParagraph>
                <strong>Language:</strong>
                <span>English</span>
              </ContentParagraph>
            </List>
          </ListContainer>

          <EventFree>Event Free $49.00:</EventFree>

          <Button to="#">
            Join This Course
            <i className="bi bi-arrow-right" />
          </Button>

          <ShareContainer>
            <strong>Share :</strong>
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
          </ShareContainer>
        </Content>
      </Container>
    </React.Fragment>
  )
}

export default CourseInclude
