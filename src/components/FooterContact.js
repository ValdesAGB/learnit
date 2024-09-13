import React from 'react'
import { footerContactElements } from '../data'
import styled from 'styled-components'
import { colors } from '../untils/colors'

const ListContainer = styled.ul`
  margin-top: 25px;
  margin: 0;
  padding: 0;
  text-decoration: none;

  li {
    margin-bottom: 15px;
    list-style: none;

    i {
      margin-right: 0.25rem;
      color: ${colors.primary_color};
    }

    a {
      color: ${colors.heading_color};
      opacity: 0.8;
      text-decoration: none;
      display: inline-block;
    }
  }
`

function Contact() {
  return (
    <div>
      <ListContainer>
        {footerContactElements.map(({ id, icone, text }) => (
          <li key={id}>
            <i className={`bi ${icone}`} />
            <a href={id === 2 ? `tel:${text}` : '#'}>{text}</a>
          </li>
        ))}
      </ListContainer>
    </div>
  )
}

export default Contact
