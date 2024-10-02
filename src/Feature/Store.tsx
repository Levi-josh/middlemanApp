import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './Redux';  // Path to your slice reducer

// Configure the store
const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {mode: ModeState}
export type AppDispatch = typeof store.dispatch;

export default store;
