export const Service = {
  postLogin: function (email, password) {
    return fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      body: {
        email: email,
        password: password,
      },
    })
  },
  getToken: function (token) {
    return fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'GET',
      body: {
        token: token,
      },
    })
  },
}
