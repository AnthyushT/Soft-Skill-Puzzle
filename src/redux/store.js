import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import sessionSlice from './sessionSlice'

export default configureStore({
  reducer: {
    auth: authSlice,
    session: sessionSlice
  },
})