"use client"

import React,{createContext} from 'react'

export const MyContext=createContext()
createContext
const Context = ({children}) => {
    const username='vinayak'
  return (
    <div>
      <MyContext.Provider value={username}>
        {children}
      </MyContext.Provider>
    </div>
  )
}

export default Context
