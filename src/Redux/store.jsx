import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../Slices/userSlice"
import packageReducer from "../Slices/packageSlice"
import shortlinkReducer from "../Slices/shortlinkSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    package: packageReducer,
    shortlink: shortlinkReducer
  },
})

export default store