import { createSlice } from "@reduxjs/toolkit";

const initialState = null
const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action) => state = action.payload,
    removeNotification: (state, action) => state = action.payload
  }
})

export const {setNotification, removeNotification} = notificationSlice.actions

export const handleNotification = (content, time) => {
  return async dispatch => {
    dispatch(setNotification(content))
    setTimeout(() => {
      dispatch(removeNotification(null))
    }, time * 1000);
  }
}

export default notificationSlice.reducer