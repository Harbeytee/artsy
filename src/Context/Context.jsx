import React, { createContext, useState } from 'react'

const Context = createContext()

//const {Provider, Consumer} = UserContext

export default function Provider(props) {
  const [index, setIndex] = useState(1)

  function changeIndex(val) {
    setIndex(val)
  }


  return (

    <Context.Provider value={{index, changeIndex}}>
      {props.children}
    </Context.Provider>
  )
}

export { Context }