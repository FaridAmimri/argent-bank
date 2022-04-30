function ValidationForm(values) {
  let errors = {}

  if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid'
  }
  if (values.password.length < 10) {
    errors.password = 'Password is invalid'
  }
  return errors
}

export default ValidationForm
