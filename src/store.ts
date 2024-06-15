// store.ts
import { configureStore } from "@reduxjs/toolkit";
import spacesReducer from "./reducer/spaces";

const store = configureStore({
  reducer: {
    spaces: spacesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
