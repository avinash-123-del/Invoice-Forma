'use client'
import React from 'react'
import AppContextProvider from '../Components/ContextProvider'
const AppProvider = ({children}) => {
  return (
    <AppContextProvider>{children}</AppContextProvider>
  )
}

export default AppProvider