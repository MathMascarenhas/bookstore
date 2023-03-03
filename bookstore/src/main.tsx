import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Home } from './components/pages/home/home'
import { LandPage } from './components/pages/landpage/landpage'
import { GlobalStyle, theme } from './global-styles'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandPage />} />
      <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </ThemeProvider>
  </React.StrictMode>
)
