import React from 'react'
import styled from 'styled-components'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const Title = styled.div`
  margin-bottom: 30px;
  color: ${colors.secondary_color};
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  font-family: ${polices.spartan};
`

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  text-decoration: none;

  li {
    margin-bottom: 15px;
    list-style: none;

    a {
      color: ${colors.secondary_color};
      opacity: 0.8;
      text-decoration: none;
      display: inline-block;

      &:hover {
        color: ${colors.primary_color};
      }

      i {
        margin-right: 0.25rem;
      }
    }
  }
`

function FooterList({ title, element }) {
  return (
    <React.Fragment>
      <div>
        <Title>{title}</Title>

        <ListContainer>
          {element.map(({ id, link_name }) => (
            <li key={id}>
              <a href="#">
                <i className="bi bi-chevron-double-right " />
                {link_name}
              </a>
            </li>
          ))}
        </ListContainer>
      </div>
    </React.Fragment>
  )
}

export default FooterList
