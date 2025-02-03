import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNewsData = createAsyncThunk(
  'news/fetchAll',
  async (tab='') => {
    try {
      let url = 'https://newsdata.io/api/1/latest?country=kr&apikey=pub_645133c49c62ecb39d903cc0edc2ba2fd6082';

      if (tab !== '') {
        url = `https://newsdata.io/api/1/latest?country=kr&category=${tab}&apikey=pub_645133c49c62ecb39d903cc0edc2ba2fd6082`
      }

      const response = await axios.get(url);
      return response.data.results;

    } catch (error) {
      console.error(error);
    }
  }
);

const initialState = {
  news: [],
  newsState: 'loading',
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getNewsData.pending, (state, action) => {
      state.newsState = 'loading';
    })
    .addCase(getNewsData.fulfilled, (state, action) => {
      state.news = action.payload;
      state.newsState = 'success';
    })
  }
})

export default newsSlice.reducer;