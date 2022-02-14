import { createContext, useState } from "react"
const initialstate = [
  {
    FirstName: "Matheus",
    LastName: "Nunes Borba",
    Age: 10,
    Number: "0632785042",
    Birthday: "04/11/2011",
  },
]
const AppContext = createContext({})

export const ContextProvider = (props) => {
  const [getState, setState] = useState(initialstate)
  console.log(getState)

  return <AppContext.Provider {...props} value={{ entries: getState }} />
}

export default AppContext
