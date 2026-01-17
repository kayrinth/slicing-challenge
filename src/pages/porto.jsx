import React from 'react'
// import { ButtonPrimary, ButtonSecondary, ButtonGhost } from '../components/atoms/button'
import { Navbar, Hero, Features, Testimonials, Pricing, Faq, Footer } from '../components/organism'

export default function Porto() {
    return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer/>
      </>

  )
}