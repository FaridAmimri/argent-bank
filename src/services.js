import axios from 'axios'

export const getUserLogin = ({ email, password }) => {
  return axios
    .post('http://localhost:3001/api/v1/user/login', {
      email,
      password,
    })
    .catch((error) => console.log(error))
}

export const getUserProfile = ({ token }) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }

  const bodyParameters = {
    key: 'value',
  }
  return axios
    .post('http://localhost:3001/api/v1/user/profile', bodyParameters, config)
    .then((res) => {
      return {
        firstName: res.data.body.firstName,
        lastName: res.data.body.lastName,
      }
    })
    .catch((error) => console.log(error))
}

export const updateUserProfile = ({ token, firstName, lastName }) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }

  const data = {
    body: {
      firstName: firstName,
      lastName: lastName,
    }
  }

  return axios
    .put('http://localhost:3001/api/v1/user/profile',
      data,
      config
    )
    .then((req) => console.log(req))
    .catch((error) => console.log(error))
}
