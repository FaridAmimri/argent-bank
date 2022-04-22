import styled from 'styled-components'
import ArgentBankLogo from './assets/argentBankLogo.png'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, userSelector } from '../../features/userSlice'

function Header() {
  const user = useSelector(userSelector)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Nav className="navigation">
        <NavLink className="nav-logo" to="/">
          <img src={ArgentBankLogo} alt="Argent Bank Logo"></img>
        </NavLink>

        {!user.token && (
          <NavLink className="login" to="/login">
            <FaUserCircle /> Sign In
          </NavLink>
        )}

        {user.token && (
          <div className="sign-in-out">
            <NavLink className="sign-in" to="/dashbord">
              <FaUserCircle /> {user.firstName}
            </NavLink>

            <NavLink className="sign-out" to="/" onClick={handleLogout}>
              <FaSignOutAlt /> Sign Out
            </NavLink>
          </div>
        )}
      </Nav>
    </header>
  )
}

export default Header

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
