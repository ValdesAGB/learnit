import React from 'react'
import styled from 'styled-components'
import { colors } from './colors'

const StarIcon = styled.i`
  color: ${(props) => (props.active ? '#ffa41b' : colors.paragraph)};
  margin-right: 5px;
  font-weight: 900;
  line-height: 1;
  text-rendering: auto;
`

function Note({ note }) {
  return (
    <React.Fragment>
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon
          key={index}
          className="bi bi-star-fill"
          active={index < note}
        />
      ))}{' '}
    </React.Fragment>
  )
}

export default Note
