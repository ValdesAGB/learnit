import React from 'react'
import styled from 'styled-components'
import { btnAnimation } from '../data/animation'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const Title = styled.h3`
  margin-bottom: 30px;
  color: ${colors.heading_color};
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  font-family: ${polices.spartan};
`

export const Paragraph = styled.p`
  color: ${colors.heading_color};
  opacity: 0.8;
  margin-bottom: 20px;
  line-height: 28px;
  font-size: 16px;
`

const Input = styled.input`
  width: 100%;
  padding: 13px 15px;
  border: none;
  outline: none;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
`

const Btn = styled.button`
  width: 100%;
  padding: 13px 15px;
  background: #2eb97e;
  color: ${colors.white};
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  border: none;
  text-transform: none;

  &:hover {
    animation: ${btnAnimation} 1s;
    box-shadow: 0 0 0 10px transparent;
  }
`

function Newsletters() {
  return (
    <div>
      <Title>Newsletters</Title>
      <Paragraph>Sing Up For News & Get 30% Off Your Next Course.</Paragraph>

      <div>
        <Input type="email" placeholder="Your email address" />
        <Btn>Subscribe Now</Btn>
      </div>
    </div>
  )
}

export default Newsletters
