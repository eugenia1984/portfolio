import ResponsiveHeader from './header/ResponsiveHeader'
import HeroSection from './hero/HeroSection'
import AboutSection from './about/AboutSection'
import ProjectSection from './project/ProjectSection'
import ContactSection from './contact/ContactSection'
import ResponsiveFooter from './footer/ResponsiveFooter'

export default function MyApp() {
  
  return (
    <>
      <ResponsiveHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <ResponsiveFooter />
    </>
  );
}