
import logoImg from '../../assets/logo.svg'
import { Container, Content, LogoContent } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <LogoContent>
          <img src={logoImg} alt="cashflow" />
          <span>Cash Flow</span>
        </LogoContent>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>


      </Content>
    </Container>
  )
}