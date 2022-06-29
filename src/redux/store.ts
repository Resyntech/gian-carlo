import { configureStore } from "@reduxjs/toolkit"
// import joyiceReducer from "./reducers/joyiceReducer"
import resumeReducer from "./reducers/resumeReducer"
// import shopReducer from "./reducers/shopReducer"

const store = configureStore({
  reducer: {
    // joyice: joyiceReducer,
    resume: resumeReducer,
    // shop: shopReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
