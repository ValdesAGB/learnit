import React from 'react'
import styled from 'styled-components'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const Content = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 4px 25px 0px #0000000f;
  padding: 15px 20px;
  border-radius: 10px;

  &:hover {
    background-color: ${(props) => props.bg_color};
  }
`

const IconeContainer = styled.div`
  background-color: ${(props) => props.bg_color};

  height: 84px;
  line-height: 84px;
  text-align: center;
  border-radius: 50%;

  max-width: 84px;
  width: 100%;

  position: relative;
  overflow: hidden;
  z-index: 1;

  ${Content}:hover & {
    background-color: white;
  }

  i {
    vertical-align: middle;
    color: white;
    line-height: 84px;
    text-align: center;
    font-size: 2rem;

    ${Content}:hover & {
      color: ${(props) => props.bg_color};
    }
  }
`

const TopicContent = styled.div`
  h4 {
    font-size: 20px;
    line-height: 32px;
    font-weight: 600;
    margin: 0;
    padding: 0;
    color: ${colors.heading_color};
    font-family: ${polices.spartan};

    a {
      text-decoration: none;
      display: inline-block;
      color: ${colors.heading_color};

      ${Content}:hover & {
        color: white;
      }
    }
  }

  span {
    display: inline-block;
    color: ${colors.paragraph};

    ${Content}:hover & {
      color: white;
    }
  }
`

function Topic({ id, icone, title, nb_course, bg_color }) {
  return (
    <React.Fragment>
      <div key={id} className="col-xl-4 col-md-6">
        <Content bg_color={bg_color}>
          <IconeContainer bg_color={bg_color}>
            <i className={`bi ${icone}`} bg_color={bg_color} />
          </IconeContainer>
          <TopicContent>
            <h4>
              <a href="">{title} </a>
            </h4>
            <span>{nb_course} Courses</span>
          </TopicContent>
        </Content>
      </div>
    </React.Fragment>
  )
}

export default Topic
