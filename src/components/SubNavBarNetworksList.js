import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'

const List = styled.li`
  list-style: none;
  color: ${(props) => props.color};

  a {
    color: ${colors.white};
    text-align: center;
    text-decoration: none;
    display: inline-block;

    &:hover {
      color: ${colors.primary_color};
    }

    i {
      font-weight: 400;
    }
  }
`

function SubNavBarNetworksList() {
  return (
    <React.Fragment>
      <List color="rgba(255,255,255)">Follow Us On :</List>{' '}
      <List>
        <a href="#">
          <i className="bi bi-facebook" />
        </a>
      </List>{' '}
      <List>
        <a href="#">
          <i className="bi bi-twitter" />
        </a>
      </List>{' '}
      <List>
        <a href="#">
          <i className="bi bi-linkedin" />
        </a>
      </List>{' '}
      <List>
        <a href="#">
          <i className="bi bi-youtube" />
        </a>
      </List>
    </React.Fragment>
  )
}

export default SubNavBarNetworksList
