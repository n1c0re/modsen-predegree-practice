import { configureStore } from '@reduxjs/toolkit';

import favoritesReducer from './reducers/favoritesSlice';
import positionReducer from './reducers/positionSlice';
import sightsReducer from './reducers/sightsSlice';

export default configureStore({
  reducer: {
    position: positionReducer,
    sights: sightsReducer,
    favorites: favoritesReducer,
  },
});
