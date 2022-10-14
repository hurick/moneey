import * as Dialog from '@radix-ui/react-dialog'

import logoMoneey from '../../assets/logo.svg'

import { NewTransactionModal } from '../NewTransactionModal'

import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  ButtonNewTransactions
} from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <img src={logoMoneey} />
          <h1 className='hl__name'>Moneey</h1>
        </HeaderLogo>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ButtonNewTransactions
              type="button"
              title="New transaction"
            >
              New transaction
            </ButtonNewTransactions>
          </Dialog.Trigger>

          <NewTransactionModal
            isClosable
            title="New Transaction"
          />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
