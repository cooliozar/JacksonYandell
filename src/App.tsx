import Header from './components/Header'
import Hero from './components/Hero'
import MusicSection from './components/MusicSection'
import AboutSection from './components/AboutSection'
import PhotosSection from './components/PhotosSection'
import VideosSection from './components/VideosSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import './styles/sections.css'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MusicSection />
        <AboutSection />
        <PhotosSection />
        <VideosSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
