import styled from 'styled-components'

const WelcomeWrapper = styled.div`
  color: #fff;
  padding: 0.1rem 0 2rem;
  .edit-button {
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    font-weight: bold;
    padding: 10px;
  }
`

function Welcome() {
  return (
    <WelcomeWrapper className="welcome">
      <h1>Welcome back<br />Tony Jarvis!</h1>
      <button className="edit-button">Edit Name</button>
    </WelcomeWrapper>
  )
}

export default Welcome
