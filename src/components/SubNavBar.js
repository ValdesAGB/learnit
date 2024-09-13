import React from 'react'
import SubNavBarNetworksList from './SubNavBarNetworksList'
import SubNavBarInfosContacts from './SubNavBarInfosContacts'
import styled from 'styled-components'
import { colors } from '../untils/colors'

const Section = styled.section`
  padding: 16px 0;
  overflow: hidden;
  background-color: ${colors.heading_color};
  display: none;

  @media (min-width: 992px) {
    display: block;
  }

  .container {
    margin: 0 auto;
    padding: 0 15px;
  }
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0;
  padding: 0;
  text-decoration: none;
`

function SubNavBar() {
  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <Content>
            <ListContainer>
              <SubNavBarInfosContacts />
            </ListContainer>
            <ListContainer>
              <SubNavBarNetworksList />
            </ListContainer>
          </Content>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default SubNavBar
