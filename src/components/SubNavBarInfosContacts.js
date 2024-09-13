import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'

const List = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;

  a {
    text-decoration: none;
    display: inline-block;
    color: ${colors.paragraph_light};

    &:hover {
      color: ${colors.primary_color};
    }
  }

  span {
    height: 18px;
    width: 1px;
    background-color: ${colors.paragraph_light};
    display: inline-block;
    color: ${colors.span};
  }
`

function SubNavBarInfosContacts() {
  return (
    <React.Fragment>
      <List>
        <i className="bi bi-geo-alt" />{' '}
        <a href="#">6391 Elgin St. Celina, USA</a>
      </List>
      <List>
        <span />
      </List>
      <List>
        <i className="bi bi-envelope" /> <a href="#">info@example.com</a>
      </List>
    </React.Fragment>
  )
}

export default SubNavBarInfosContacts
