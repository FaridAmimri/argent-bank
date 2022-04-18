import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    password: '',
    isFetching: false,
    isSuccess: false,
    isFail: false,
    errorMessage: '',
  },
  reducers: {
  
  },
})

export const userSelector = (state) => state.user

export default userSlice.reducer
