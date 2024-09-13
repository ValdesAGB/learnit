import { createContext, useEffect, useState } from 'react'

export const HeaderContext = createContext()
export const HeaderProvider = ({ children }) => {
  const [onTop, setOnTop] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY || document.documentElement.scrollTop
      setOnTop(top === 0 ? true : false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderContext.Provider value={{ onTop, setOnTop }}>
      {children}
    </HeaderContext.Provider>
  )
}
