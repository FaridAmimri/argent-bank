import styled from 'styled-components'

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
`

function Footer() {
  return (
    <footer>
      <FooterContent className="footer-content">
        <span class="footer-text">Copyright 2020 Argent Bank</span>
      </FooterContent>
    </footer>
  )
}

export default Footer
