import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Reservations from './components/Reservations'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import IntroCurtain from './components/IntroCurtain'
import ScrollProgress from './components/ScrollProgress'
import AmbientOrb from './components/AmbientOrb'
import ReserveIntro from './components/ReserveIntro'
import MenuIntro from './components/MenuIntro'
import { ReserveProvider, useReserve } from './context/ReserveContext'
import { MenuProvider, useMenu } from './context/MenuContext'

function Chrome() {
  const { open: reserveOpen, nonce: reserveNonce, close: closeReserve } = useReserve()
  const { open: menuOpen, nonce: menuNonce, close: closeMenu } = useMenu()
  return (
    <>
      <IntroCurtain />
      <ScrollProgress />
      <AmbientOrb />
      {/* The `key` prop forces React to fully unmount and remount each overlay
          on every trigger, so the scene state, timers, and camera all reset. */}
      {reserveOpen && (
        <ReserveIntro key={reserveNonce} onClose={closeReserve} />
      )}
      {menuOpen && (
        <MenuIntro key={menuNonce} onClose={closeMenu} />
      )}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reservations />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ReserveProvider>
      <MenuProvider>
        <Chrome />
      </MenuProvider>
    </ReserveProvider>
  )
}
