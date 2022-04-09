import styled from 'styled-components'
import PropTypes from 'prop-types'
import Feature from '../feature/Feature'
import IconChat from './assets/icon-chat.png'
import IconMoney from './assets/icon-money.png'
import IconSecurity from './assets/icon-security.png'

const contents = [
  {
    title: 'You are our #1 priority',
    icon: IconChat,
    content: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    title: 'More savings means higher rates',
    icon: IconMoney,
    content: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    title: 'Security you can trust',
    icon: IconSecurity,
    content: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
]

const FeaturesContainer = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 920px) {
    flex-direction: row;
  }
`

Features.propTypes = {
    contents: PropTypes.object,
  }

function Features() {
  return (
    <FeaturesContainer class="features">
      {contents.map((item, index) => (
        <Feature key={index} title={item.title} image={item.icon}>
          {item.content}
        </Feature>
      ))}
    </FeaturesContainer>
  )
}

export default Features
