import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
    name: 'sessionSlice',
    initialState: {
        startTime: 0,
        endTime: 0,
        trialCount: 0,
        duration: 0,
        email: '',
        uid: null,
        isAdmin: false,
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload.email
        },
        setUid: (state, action) => {
            state.uid = action.payload.uid
        },
        setTime: (state, action) => {
            if (action.payload.type == 0) state.startTime = action.payload.startTime
            else state.endTime = action.payload.endTime
        },
        incrementTrial: (state) => {
            state.trialCount += 1
        },
        setDuration: (state, action) => {
            state.duration = action.payload.duration
        },
        setAdmin: (state) => {
            state.isAdmin = true
        },
        resetSession: (state) => {
            state = {
                startTime: 0,
                endTime: 0,
                trialCount: 0,
                duration: 0,
                email: '',
                uid: null,
            }
        }
    },
})

export const { setTime, incrementTrial, setDuration, setEmail, setUid, resetSession, setAdmin } = sessionSlice.actions;
export default sessionSlice.reducer;