//import React, { useState, useMemo, createContext } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { CustomThemeProvider, ThemeProvider } from './context/ThemeContext'
import AboutSection from './components/template/about/AboutSection'
import ContactSection from './components/template/contact/ContactSection'
import ResponsiveFooter from './components/template/footer/ResponsiveFooter'
import ResponsiveHeader from './components/template/header/ResponsiveHeader'
import HeroSection from './components/template/hero/HeroSection'
import ProjectSection from './components/template/project/ProjectSection'

function App() {

  return (
    <>
      <ThemeProvider>
        <CustomThemeProvider>
          <CssBaseline />
          <ResponsiveHeader />
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
          </main>
          <ResponsiveFooter />
        </CustomThemeProvider>
      </ThemeProvider>
    </>
  )
}

export default App
