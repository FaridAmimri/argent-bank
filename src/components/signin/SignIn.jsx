import styled from 'styled-components'
import { FaUserCircle } from 'react-icons/fa'
import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserLogin } from '../../services'
import { updateToken } from '../../features/userSlice'
import ValidationForm from '../validationForm/ValidationForm'

function SignIn() {
  
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const checkBoxRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors(ValidationForm(values))
    const result = await getUserLogin({
      email: values.email,
      password: values.password,
    })
    const token = result.data.body.token
    dispatch(updateToken({ token }))
    if (checkBoxRef.current.checked) {
      localStorage.setItem('token', token)
    }
    navigate('/profile')
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <SignInWrapper className="sign-in-wrapper">
      <SignInContent className="sign-in-content">
        <FaUserCircle />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          {errors.email && <p className="errors">{errors.email}</p>}
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          {errors.password && <p className="errors">{errors.password}</p>}
          <div className="input-remember">
            <input ref={checkBoxRef} type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <SignInButton className="sign-in-button">Sign In</SignInButton>
        </form>
      </SignInContent>
    </SignInWrapper>
  )
}

export default SignIn

const SignInWrapper = styled.section`
  padding: 3rem 0 2rem 0;
`

const SignInContent = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  padding: 2rem;
  .input-wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
    input {
      padding: 5px;
      font-size: 1.2rem;
    }
    label {
      font-weight: bold;
    }
  }
  .input-remember {
    display: flex;
    label {
      margin-left: 0.25rem;
    }
  }
  .errors {
    color: red;
  }
  .button {
    text-decoration-line: none;
  }
`

const SignInButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  border: transparent;
`
