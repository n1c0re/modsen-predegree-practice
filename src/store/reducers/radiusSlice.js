import { createSlice } from '@reduxjs/toolkit';

const radiusSlice = createSlice({
  name: 'radius',
  initialState: [5000],
  reducers: {
    setRadius(state, action) {
      return action.payload;
    },
  },
});

export const { setRadius } = radiusSlice.actions;

export default radiusSlice.reducer;