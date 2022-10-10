import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo
} from './styles'
import { Button } from '../Button'

import logoMoneey from '../../assets/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <img src={logoMoneey} />
          <h1 className='hl__name'>Moneey</h1>
        </HeaderLogo>

        <Button title="New transaction">New transaction</Button>
      </HeaderContent>
    </HeaderContainer>
  )
}
