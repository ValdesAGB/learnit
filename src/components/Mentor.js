import React from 'react'
import styled from 'styled-components'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const Cover = styled.img`
  border-radius: 12px;
  width: 100%;
`

const Content = styled.div`
  text-align: center;
  background-color: ${colors.white};
  padding: 30px 20px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  width: 92%;
  margin-top: -23%;
  position: relative;

  h4 {
    font-size: 22px !important;
    line-height: 32px;
    font-weight: 600;
    margin: 0;
    padding: 0;
    color: ${colors.secondary_color};
    font-family: ${polices.spartan};
  }

  span {
    display: inline-block;
    color: ${colors.paragraph};
  }
`

const SocialContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0px 4px 25px 0px #0000000f;
    font-size: 20px;
    color: ${colors.primary_color};
    text-decoration: none;
    display: inline-block;
    transition: all 0.5s;

    &:hover {
      background-color: ${colors.primary_color};
      box-shadow: none;
      color: ${colors.white};
    }

    i {
      font-weight: 400;
      font-style: normal;
      font-variant: normal;
      line-height: 1;
      text-rendering: auto;
    }
  }
`

function Mentor({ id, cover, name, post }) {
  return (
    <div key={id} className="col-md-6 col-xl-4">
      <div>
        <div>
          <Cover src={cover} alt={name} />
        </div>
        <Content>
          <h4>{name}</h4>
          <span>{post}</span>

          <SocialContainer>
            <a href="#">
              <i className="bi bi-facebook" />
            </a>
            <a href="#">
              <i className="bi bi-instagram" />
            </a>
            <a href="#">
              <i className="bi bi-linkedin" />
            </a>
          </SocialContainer>
        </Content>
      </div>
    </div>
  )
}

export default Mentor
