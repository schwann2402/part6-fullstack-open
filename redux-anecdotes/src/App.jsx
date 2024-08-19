/* eslint-disable react-hooks/exhaustive-deps */
import AnecdoteFilter from './components/AnecdoteFilter'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [])


  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <br />
      <AnecdoteFilter />
      <br />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App