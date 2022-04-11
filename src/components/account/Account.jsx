import styled from 'styled-components'

const AccountWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  @media (min-width: 720px) {
    flex-direction: row;
  }
  .account-content {
    width: 100%;
    flex: 1;
    .account-title {
      margin: 0;
      padding: 0;
      font-size: 1rem;
      font-weight: normal;
    }
    .account-amount {
      margin: 0;
      font-size: 2.5rem;
      font-weight: bold;
    }
    .account-description {
      margin: 0;
    }
  }
  .account-button {
    width: 100%;
    flex: 1;
    @media (min-width: 720px) {
      flex: 0;
    }
    .transaction-button {
      display: block;
      width: 100%;
      padding: 8px;
      font-size: 1.1rem;
      font-weight: bold;
      margin-top: 1rem;
      border-color: #00bc77;
      background-color: #00bc77;
      color: #fff;
      @media (min-width: 720px) {
        width: 200px;
      }
    }
  }
`

function Account({ title, amount, description }) {
  return (
    <AccountWrapper className="account">
      <div className="account-content">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-description">{description}</p>
      </div>
      <div className="account-button">
        <button className="transaction-button">View transactions</button>
      </div>
    </AccountWrapper>
  )
}

export default Account
