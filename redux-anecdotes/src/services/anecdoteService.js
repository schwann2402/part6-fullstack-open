import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const response = await axios.post(baseUrl, {
    content,
    votes: 0
  })
  return response.data
}

const updateAnecdote = async (id) => {
  const anecdoteToUpdate =  await axios.get(`${baseUrl}/${id}`)
  const anecdote = anecdoteToUpdate.data
  const changedAnecdote = {...anecdote, votes: anecdote.votes + 1}
  const updatedAnecdote = await axios.put(`${baseUrl}/${id}`, changedAnecdote)
  return updatedAnecdote.data
}


export default {
  getAll,
  createNew,
  updateAnecdote
}