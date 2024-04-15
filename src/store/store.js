import { configureStore } from '@reduxjs/toolkit';

import favoritesIdReducer from './reducers/favoritesIdSlice';
import favoritesReducer from './reducers/favoritesSlice';
import positionReducer from './reducers/positionSlice';
import radiusReducer from './reducers/radiusSlice';
import sightsReducer from './reducers/sightsSlice';

export default configureStore({
  reducer: {
    position: positionReducer,
    sights: sightsReducer,
    favoritesId: favoritesIdReducer,
    favorites: favoritesReducer,
    radius: radiusReducer,
  },
});
