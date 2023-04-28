import logoImg from '../../assets/logo.svg'
import { Container, Content, LogoContent } from './styles'





export function Header() {
  return (
    <Container>
      <Content>
        <LogoContent>
          <img src={logoImg} alt="cashflow" />
          <span>Cash Flow</span>
        </LogoContent>
        <button type="button">
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}