import { createSlice } from '@reduxjs/toolkit';

export const locationMarkerSlice = createSlice({
  name: 'favorites',
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

export const { toggleFavorite } = locationMarkerSlice.actions;

export default locationMarkerSlice.reducer;