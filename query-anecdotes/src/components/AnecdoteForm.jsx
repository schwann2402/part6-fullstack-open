import { useMutation, useQueryClient } from "react-query"
import { createAnecdote } from "../../requests"
import { useContext } from "react"
import { NotificationContext } from "./NotificationContext"

const AnecdoteForm = () => {
  const [notification, dispatchNotification] = useContext(NotificationContext)
  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes']})
    },
    onError: () => {
      dispatchNotification({
        type: 'ERROR',
        payload: 'ERROR: The anecdote must be at least 5 characters long'
      })
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({content, votes: 0})
    dispatchNotification({
      type: 'CREATE_ANECDOTE',
      payload: content
    })
    setTimeout(() => {
      dispatchNotification('')
    }, 5000);
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
