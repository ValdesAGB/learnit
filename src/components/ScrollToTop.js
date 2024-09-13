import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0) // Scroll immédiat avant le rendu de la nouvelle page
  }, [pathname])

  return null
}

export default ScrollToTop
