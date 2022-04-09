import styled from 'styled-components'
import BankTreeImg from './assets/bank-tree.jpeg'

const BannerContainer = styled.div`
  background-image: url(${BankTreeImg});
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;
  @media (min-width: 920px) {
    height: 400px;
    background-position: 0% 33%;
  }
`

const BannerContent = styled.div`
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;
  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }
  .subtitle {
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
    @media (min-width: 920px) {
      font-size: 1.5rem;
    }
  }
  .text {
    margin-bottom: 0;
    font-size: 0.9rem;
    @media (min-width: 920px) {
      font-size: 1.2rem;
    }
  }
`

function Banner() {
  return (
    <BannerContainer className="hero">
      <BannerContent className="hero-content">
        <p class="subtitle">No fees.</p>
        <p class="subtitle">No minimum deposit.</p>
        <p class="subtitle">High interest rates.</p>
        <p class="text">Open a savings account with Argent Bank today!</p>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner
