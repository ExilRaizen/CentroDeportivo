import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Canchas from './components/Canchas.jsx'
import Tarifas from './components/Tarifas.jsx'
import Ubicacion from './components/Ubicacion.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="inicio">
        <Hero />
        <Canchas />
        <Tarifas />
        <Ubicacion />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
