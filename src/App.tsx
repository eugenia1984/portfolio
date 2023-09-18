import { HashRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { CustomThemeProvider, ThemeProvider } from './context/ThemeContext'
import AboutSection from './components/template/about/AboutSection'
import ContactSection from './components/template/contact/ContactSection'
import ResponsiveFooter from './components/template/footer/ResponsiveFooter'
import ResponsiveHeader from './components/template/header/ResponsiveHeader'
import HeroSection from './components/template/hero/HeroSection'
import ProjectSection from './components/template/project/ProjectSection'
import ExperienceSection from './components/template/experience/ExperienceSection'


function App() {

  return (
    <>
      <ThemeProvider>
        <CustomThemeProvider>
          <CssBaseline />
          <HashRouter>
            <ResponsiveHeader />
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/about" element={<AboutSection />} />
              <Route path="/projects" element={<ProjectSection />} />
              <Route path="/experience" element={<ExperienceSection />} />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="*" element={<HeroSection />} />
            </Routes>
            <ResponsiveFooter />
          </HashRouter>
        </CustomThemeProvider>
      </ThemeProvider>
    </>
  )
}

export default App
