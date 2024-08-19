/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext } from "react"
import { NotificationContext } from "./NotificationContext" 

export const notificationReducer = (state, action) => {
  switch(action.type) {
    case 'CREATE_ANECDOTE': 
      return `You just created the following anecdote: ${action.payload}`
    case 'VOTE_ANECDOTE':
      return `You voted for ${action.payload}`
    case 'ERROR':
      return action.payload
    default: 
      return ""
  }
}

const Notification = () => {
  const [notification, dispatchNotification] = useContext(NotificationContext)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (notification === "") return null

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification