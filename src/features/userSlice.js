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
    }
  },
})

export const { updateToken } = userSlice.actions
export const userSelector = (state) => state.user

export default userSlice.reducer
