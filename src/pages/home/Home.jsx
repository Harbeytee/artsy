import React from 'react'
import HeroSection from './HeroSection'
import FeaturedProducts from './FeaturedProducts'
import Upcoming from './Upcoming'
import TopCreators from './TopCreators'
import Footer from '../../components/Footer/Footer'
import './Home.scss'

export default function Home() {
  return (
    <main >
        <HeroSection />
        <FeaturedProducts />
        <Upcoming />
        <TopCreators />
        <Footer />
        
    </main>
  )
}
