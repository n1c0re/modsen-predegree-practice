import { createSlice } from '@reduxjs/toolkit';

const sightsSlice = createSlice({
  name: 'sights',
  initialState: [],
  reducers: {
    setMarkers(state, action) {
      return action.payload;
    },
  },
});

export const { setMarkers } = sightsSlice.actions;

export default sightsSlice.reducer;