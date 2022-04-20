import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { loginUser } from '../../services'
import { updateToken } from '../../features/userSlice'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await loginUser({ email, password })
    const token = result.data.body.token
    dispatch(updateToken({ token }))
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
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
