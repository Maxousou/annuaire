import { createContext, useState, useCallback } from "react"
const initialState = [
  {
    firstName: "",
    lastName: "",
    age: 10,
    phoneNumber: "",
  },
]
const AppContext = createContext(initialState)

export const AppContextProvider = (props) => {
  const [getState, setState] = useState(initialState)
  const addPerson = useCallback((firstName, lastName, age, phoneNumber) => {
    setState((currentState) => {
      return currentState.concat({
        firstName: firstName,
        lastName: lastName,
        age: age,
        phoneNumber: phoneNumber,
      })
    })
  }, [])

  return <AppContext.Provider {...props} value={{ getState, addPerson }} />
}

export default AppContext
