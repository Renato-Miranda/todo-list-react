import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './Styles/GlobalStyles.js'
import { tema } from './Styles/theme'
import LandingPage from './pages/LandingPage/LandingPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <LandingPage />
    </ThemeProvider>
  </React.StrictMode>,
)
