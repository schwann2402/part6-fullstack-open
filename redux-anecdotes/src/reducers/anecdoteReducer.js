import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdoteService"

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload
    },
    addAnecdote(state, action) {
      state.push(action.payload)
    }
  }
})

export const { setAnecdotes, addAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(addAnecdote(newAnecdote))
  }
}

export const createVote = id => {
  return async dispatch => {
    await anecdoteService.updateAnecdote(id)
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export default anecdoteSlice.reducer