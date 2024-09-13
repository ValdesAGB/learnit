import React from 'react'
import { quickLinksElements } from '../data'
import FooterList from './FooterList'

const title = 'Quick Link'

const element = quickLinksElements

function QuickLinks() {
  return (
    <React.Fragment>
      <FooterList title={title} element={element} />
    </React.Fragment>
  )
}

export default QuickLinks
