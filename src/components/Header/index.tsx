import * as Dialog from '@radix-ui/react-dialog'

import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  ButtonNewTransactions
} from './styles'

import logoMoneey from '../../assets/logo.svg'

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

          <Dialog.Portal>
            <Dialog.Overlay />

            <Dialog.Content>
              <Dialog.Title>New transaction</Dialog.Title>

              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
