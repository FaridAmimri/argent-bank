import styled from 'styled-components'
import Account from '../account/Account'

const AccountsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.1rem 0;
`

const contents = [
  {
    title: 'Argent Bank Checking (x8349)',
    amount: '$2,082.79',
    description: 'Available Balance',
  },
  {
    title: 'Argent Bank Savings (x6712)',
    amount: '$10,928.42',
    description: 'Available Balance',
  },
  {
    title: 'Argent Bank Credit Card (x8349)',
    amount: '$184.30',
    description: 'Current Balance',
  },
]

function Accounts() {
  return (
    <AccountsWrapper className="accounts">
      {contents.map((account, index) => (
        <Account
          key={index}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}
    </AccountsWrapper>
  )
}

export default Accounts
