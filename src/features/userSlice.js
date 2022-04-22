import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    token: null,
    isFetching: false,
    isSuccess: false,
    isFail: false,
    errorMessage: '',
  },
  reducers: {
    updateToken(state, action) {
      state.token = action.payload.token
    },
    updateUser(state, action) {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    },
    logout(state) {
      state.token = null
    }
  },
})

export const { updateToken, updateUser, logout } = userSlice.actions

export const userSelector = (state) => state.user

export default userSlice.reducer
