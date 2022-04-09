import styled from 'styled-components'
import PropTypes from 'prop-types'

const Item = styled.div`
  flex: 1;
  padding: 2.5rem;
  .feature-icon {
    width: 100px;
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 1rem;
  }
  .feature-title {
    color: #222;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`

Feature.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.object,
}

function Feature({ image, title, children }) {
  return (
    <Item class="feature-item">
      <img src={image} alt="Icon" class="feature-icon" />
      <h3 class="feature-title">{title}</h3>
      <p>{children}</p>
    </Item>
  )
}

export default Feature
