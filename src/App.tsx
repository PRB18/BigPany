/* =============================================================
   App.tsx — Bigpany Retail Private Limited
   Single-page marketing site. Section order:
   Nav → Hero → VenturesIntro → SplitSection → TeamSection → Footer
   ============================================================= */
import Nav from './components/Nav'
import Hero from './components/Hero'
import VenturesIntro from './components/VenturesIntro'
import SplitSection from './components/SplitSection'
import TeamSection from './components/TeamSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Skip to main content — accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Nav />

      <main id="main-content">
        <Hero />
        <VenturesIntro />
        <SplitSection />
        <TeamSection />
      </main>

      <Footer />
    </>
  )
}
