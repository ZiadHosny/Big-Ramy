import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface userState {
    user: string | null
}

// Define the initial state using that type
const initialState: userState = {
    user: null,
}

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUser: (state) => {
            state.user = 'user'
        },
        logout: (state) => {
            state.user = null
        },
    },
})

export const { logout, setUser } = userSlice.actions

export default userSlice.reducer