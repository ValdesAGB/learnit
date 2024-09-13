import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const Content = styled.div`
  text-align: center;
  box-shadow: ${colors.shadow};
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 40px 20px;
`

const Icone = styled.div`
  font-size: 3em;
  color: ${colors.primary_color};
`

const Title = styled.h3`
  margin-top: 20px;
  margin-bottom: 0.25rem;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  color: ${colors.heading_color};
  font-family: ${polices.spartan};
`

const Text = styled.p`
  margin: 0;
  padding: 0;
  line-height: 28px;
  font-size: 16px;
`

function ContactList({ id, icone, title, text }) {
  return (
    <React.Fragment>
      <div key={id} className="col-lg-4">
        <Content>
          <Icone className={icone} />

          <Title>{title}</Title>

          <Text>{text}</Text>
        </Content>
      </div>
    </React.Fragment>
  )
}

export default ContactList
