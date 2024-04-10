import { createSlice } from '@reduxjs/toolkit';

export const favoritesIdSlice = createSlice({
  name: 'favoritesId',
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex(item => item === id);
      if (index !== -1) {
        state.splice(index, 1);
      } else {
        state.push( id );
      }
    }
  }
});

export const { toggleFavorite } = favoritesIdSlice.actions;

export default favoritesIdSlice.reducer;