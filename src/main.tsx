import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { TransactionsProvider } from './contexts/Transactions'

import { Router } from './routes'

import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/themes'
import { GlobalStyles } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <TransactionsProvider>
          <Router />
        </TransactionsProvider>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>
)
