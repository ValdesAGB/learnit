import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { Light_Logo } from '../data'
import Nav from './Nav'

const Container = styled.div`
  background-color: ${colors.heading_color};
  border-left: 3px solid ${colors.primary_color};
`

const CloseBtn = styled.button`
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-radius: 50%;
  font-size: 22px;
  color: ${colors.white};
  background-color: ${colors.primary_color};
  opacity: 1;
  background-image: none;
`

const OffcanvasBody = styled.div`
  margin-top: 30px;

  padding: 1rem;
`

function Offcanvas() {
  return (
    <React.Fragment>
      <Container
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <img
            src={Light_Logo}
            alt="Logo"
            className="offcanvas-title"
            id="offcanvasRightLabel"
          />

          <CloseBtn
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="bi bi-x-lg"></i>
          </CloseBtn>
        </div>
        <OffcanvasBody className="offcanvas-body">
          <Nav element_container="offcanvas" />
        </OffcanvasBody>
      </Container>
    </React.Fragment>
  )
}

export default Offcanvas
