import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./src/reducers/filterReducer";
import anecdoteReducer from "./src/reducers/anecdoteReducer";
import notificationReducer from "./src/reducers/notificationReducer";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    anecdotes: anecdoteReducer,
    notification: notificationReducer
  }
})

export default store