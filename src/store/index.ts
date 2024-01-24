import {configureStore} from '@reduxjs/toolkit';

import movieReducer from './movie';

const store = configureStore({
  reducer: {
    movieReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export default store;
