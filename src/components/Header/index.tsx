import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'

import logoMoneey from '../../assets/logo.svg'

import { NewTransactionModal } from '../NewTransactionModal'

import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  ButtonNewTransactions
} from './styles'

export const Header = () => {
  const [open, setOpen] = useState<boolean>()

  const handleModalVisibility = (status: boolean) => {
    setOpen(status)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <img src={logoMoneey} />
          <h1 className='hl__name'>Moneey</h1>
        </HeaderLogo>

        <Dialog.Root open={open} onOpenChange={setOpen}>
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
            handleModalVisibility={handleModalVisibility}
          />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
