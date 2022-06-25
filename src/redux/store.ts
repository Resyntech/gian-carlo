import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./reducers/counterReducer"
import resumeReducer from "./reducers/resumeReducer"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    resume: resumeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
