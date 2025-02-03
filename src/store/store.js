import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './reducers/newsSlice';

const store = configureStore({
  reducer: {
    news: newsReducer
  }
})

export default store;