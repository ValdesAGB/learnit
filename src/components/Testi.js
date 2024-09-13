import React from 'react'
import styled from 'styled-components'
import Note from '../untils/Note'
import { polices } from '../untils/polices'
import { colors } from '../untils/colors'

const Container = styled.div`
  margin-right: 24x;
  borde: red solid 1px;
`

const Content = styled.div`
  border-radius: 8px;
  box-shadow: 0px 4px 25px 0px #0000000f;
  padding: 40px 35px;
`

const Head = styled.div`
  gap: 1rem;
  align-items: center;
  display: flex;
`

const CoverContainer = styled.div`
  width: 70px;
  position: relative;

  img {
    width: 100%;
    transition: all 0.5s;
    vertical-align: middle;
  }

  i {
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    vertical-align: middle;
    font-size: 20px;
    color: ${colors.primary_color};
  }
`

const NameAndPostContainer = styled.div`
  h4 {
    font-size: 20px;
    line-height: 32px;
    font-weight: 600;
    margin: 0;
    padding: 0;
    color: ${colors.heading_color};
    font-family: ${polices.spartan};
  }

  span {
    display: inline-block;
    color: ${colors.paragraph};
  }
`

const Paragraph = styled.p`
  margin-bottom: 30px;
  margin-top: 40px;
  padding: 0;
  line-height: 28px;
  font-size: 16px;
`

function Testi({ id, cover, name, post, note }) {
  return (
    <React.Fragment>
      <Container key={id}>
        <Content>
          <Head>
            <CoverContainer>
              <img src={cover} alt={name} />
              <i className="bi bi-quote" />
            </CoverContainer>

            <NameAndPostContainer>
              <h4>{name}</h4>
              <span>{post}</span>
            </NameAndPostContainer>
          </Head>
          <Paragraph>
            Donec ac lacus placerata dolor duis consequat placerat sit amet a
            elit. In volutpat, lacus in egestas finibus nisi orci tincidunt
            risus, a dapibus
          </Paragraph>
          <div>
            <Note note={note} />
          </div>
        </Content>
      </Container>
    </React.Fragment>
  )
}

export default Testi
