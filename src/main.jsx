import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './Styles/GlobalStyles.js'
import { tema } from './Styles/theme'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <App />
      <LandingPage />
    </ThemeProvider>
  </React.StrictMode>,
)
