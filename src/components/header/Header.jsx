import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FaSignOutAlt } from 'react-icons/fa'
import styled from 'styled-components'
import ArgentBankLogo from './assets/argentBankLogo.png'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  img {
    max-width: 100%;
    width: 200px;
  }
  .login {
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    width: 75px;
    margin-right: 0.5rem;
    color: #2c3e50;
    font-weight: bold;
    :hover {
      text-decoration: underline;
    }
    svg {
      font-size: large;
    }
  }
  .sign-in-out {
    display: flex;
    a {
      display: flex;
      font-weight: bold;
      text-decoration: none;
      color: #2c3e50;
      margin-right: 0.5rem;
    }
    svg {
      font-size: large;
      margin-right: 0.3rem;
    }
  }
`

function Header() {
  const [signIn, setSignIn] = useState(false)

  return (
    <header>
      <Nav className="navigation">
        <a className="nav-logo" href="/">
          <img src={ArgentBankLogo} alt="Argent Bank Logo"></img>
        </a>

        <a className="login" href="/login" onClick={() => setSignIn(true)}>
          <FaUserCircle /> Sign In
        </a>

        <div className="sign-in-out">
          <a className="sign-in" href="/user">
            <FaUserCircle /> Tony
          </a>
          <a className="sign-out" href="/" onClick={() => setSignIn(true)}>
            <FaSignOutAlt /> Sign Out
          </a>
        </div>
      </Nav>
    </header>
  )
}

export default Header
