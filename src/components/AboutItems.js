import React from 'react'
import styled from 'styled-components'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const IconeContainer = styled.div`
  background-color: ${(props) => props.background};
  width: 90px;
  height: 90px;
  line-height: 90px;
  text-align: center;
  border-radius: 50%;
  min-width: 90px;
  border-radius: 8px;

  img {
    vertical-align: middle;
  }
`

const Title = styled.h4`
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  color: ${colors.secondary_color};
  font-family: ${polices.spartan};
`

const Paragraph = styled.p`
  margin-top: 10px;
  margin: 0;
  padding: 0;
  line-height: 28px;
  font-size: 16px;
`

function AboutItems({ id, icone, title, background }) {
  return (
    <React.Fragment>
      <div className="" key={id}>
        <Content>
          <IconeContainer background={background}>
            <img src={icone} alt={title} />
          </IconeContainer>
          <div>
            <Title>{title}</Title>
            <Paragraph>Elit Aenean scelerisque vitae consequat the.</Paragraph>
          </div>
        </Content>
      </div>
    </React.Fragment>
  )
}

export default AboutItems
