import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAll, updateAnecdote } from '../requests'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useReducer } from 'react'
import { notificationReducer } from './components/Notification'
import { NotificationContext } from './components/NotificationContext'

const App = () => {
  
  const [notification, dispatchNotification] = useReducer(notificationReducer, "")

  const queryClient = useQueryClient()

  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries(['anecdotes'])
    }
  })
  
  const handleVote = (anecdote) => {
    dispatchNotification({
      type: 'VOTE_ANECDOTE',
      payload: anecdote.content
    })
    setTimeout(() => {
      dispatchNotification('')
    }, 5000);
    updateAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes + 1})
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAll
  })

  if (result.isLoading) {
    return <div>It is loading...</div>
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
      <NotificationContext.Provider value={[notification, dispatchNotification]}>
        <Notification />
        <AnecdoteForm />
      </NotificationContext.Provider>
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
