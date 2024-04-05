import { createSlice } from '@reduxjs/toolkit';

const positionSlice = createSlice({
  name: 'position',
  initialState: [55.490295, 28.782988],
  reducers: {
    setPosition(state, action) {
      return action.payload;
    },
  },
});

export const { setPosition } = positionSlice.actions;

export default positionSlice.reducer;