import { useContext } from "react"
import AppContext from "./AppContext"

const Liste = () => {
  const { getState } = useContext(AppContext)

  return (
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}

export default Liste
