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
        {Object.entries(getState).map(
          ([itemId, { firstName, lastName, age, phoneNumber }]) => (
            <tr key={itemId}>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{age}</td>
              <td>{phoneNumber}</td>
            </tr>
          )
        )}

        <tr>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}

export default Liste
