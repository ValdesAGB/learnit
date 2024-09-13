import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'

const Container = styled.div`
  position: relative;
  padding: 20px 0;
  border-top: 1px solid rgba(24, 24, 24, 0.2);
`

const Content = styled.div`
  @media (max-width: 767px) {
    text-align: center;
  }

  p {
    color: ${colors.heading_color};

    a {
      color: ${colors.heading_color};
      text-decoration: none;
      display: inline-block;

      &:hover {
        color: ${colors.primary_color};
      }
    }
  }
`

function Copyright() {
  return (
    <React.Fragment>
      <Container>
        <div className="container">
          <Content>
            <p>
              &copy; All Copyright 2024 by <a href="#">Webgrowth.</a>
            </p>
          </Content>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Copyright
