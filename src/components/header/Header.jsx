import ArgentBankLogo from './assets/argentBankLogo.png'
import { FaUserCircle } from 'react-icons/fa'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  img {
    max-width: 100%;
    width: 200px;
  }
  .nav-sign {
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
`

function Header() {
  return (
    <header>
      <Nav className="navigation">
        <a className="nav-logo" href="/">
          <img src={ArgentBankLogo} alt="Argent Bank Logo"></img>
        </a>
        <a className="nav-sign" href="/">
          <FaUserCircle /> Sign In
        </a>
      </Nav>
    </header>
  )
}

export default Header
