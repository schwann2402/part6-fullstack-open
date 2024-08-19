  import { useDispatch, useSelector } from "react-redux"
  import { createVote } from "../reducers/anecdoteReducer"
import { handleNotification } from "../reducers/notificationReducer"

  const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
      if (state.filter !== '') {
       return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
      }
      return state.anecdotes
    })

    const dispatch = useDispatch()
  
    const vote = (id, content) => {
      dispatch(createVote(id))
      dispatch(handleNotification(`You voted for ${content}`, 5))
    }
  
    return (
        <div>
          {[...anecdotes].sort((a, b) => b.likes - a.likes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
            </div>
          </div>
          )}
        </div>
    )
  }
  
  export default AnecdoteList
  
 

