import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { api } from "./services/api"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
})

export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>