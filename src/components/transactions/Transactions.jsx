import styled from 'styled-components'
import PropTypes from 'prop-types'
import Transaction from '../transaction/Transaction'
import IconChat from './assets/icon-chat.png'
import IconMoney from './assets/icon-money.png'
import IconSecurity from './assets/icon-security.png'

const contents = [
  {
    title: 'You are our #1 priority',
    icon: IconChat,
    content:
      'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    title: 'More savings means higher rates',
    icon: IconMoney,
    content:
      'The more you save with us, the higher your interest rate will be!',
  },
  {
    title: 'Security you can trust',
    icon: IconSecurity,
    content:
      'We use top of the line encryption to make sure your data and money is always safe.',
  },
]

const TransactionsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 920px) {
    flex-direction: row;
  }
`

Transactions.propTypes = {
  contents: PropTypes.object,
}

function Transactions() {
  return (
    <TransactionsWrapper className="transactions">
      {contents.map((item, index) => (
        <Transaction key={index} title={item.title} image={item.icon}>
          {item.content}
        </Transaction>
      ))}
    </TransactionsWrapper>
  )
}

export default Transactions
