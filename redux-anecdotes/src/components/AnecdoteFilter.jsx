import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

const AnecdoteFilter = () => {
  const dispatch = useDispatch()

  const handleFilter = event => {
    event.preventDefault()
    dispatch(filterChange(event.target.value))
  }

  return (
    <div>
      filter <input type="text" name="filter" onChange={handleFilter} />
    </div>
  )
}

export default AnecdoteFilter
