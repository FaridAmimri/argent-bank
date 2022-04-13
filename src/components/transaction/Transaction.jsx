import styled from 'styled-components'
import PropTypes from 'prop-types'

const TransactionItem = styled.div`
  flex: 1;
  padding: 2.5rem;
  .transaction-icon {
    width: 100px;
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 1rem;
  }
  .transaction-title {
    color: #222;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`

Transaction.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.string,
}

function Transaction({ image, title, children }) {
  return (
    <TransactionItem className="transaction-item">
      <img src={image} alt="Icon" className="transaction-icon" />
      <h3 className="transaction-title">{title}</h3>
      <p>{children}</p>
    </TransactionItem>
  )
}

export default Transaction
