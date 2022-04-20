import axios from 'axios'

export const loginUser = ({ email, password }) => {
  return axios
    .post('http://localhost:3001/api/v1/user/login', {
      email,
      password,
    })
    .catch(function (error) {
      console.log(error)
    })
}

