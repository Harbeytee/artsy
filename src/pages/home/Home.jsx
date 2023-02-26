import React, { useContext, useEffect } from 'react'
import HeroSection from './HeroSection'
import FeaturedProducts from './FeaturedProducts'
import Upcoming from './Upcoming'
import TopCreators from './TopCreators'
import Footer from '../../components/Footer/Footer'
import './Home.scss'
import { Context } from '../../Context/Context'

export default function Home() {
  const { changeIndex } = useContext(Context)

  useEffect(() => {
    changeIndex(1)

  }, [])
  return (
    <main>
        <HeroSection />
        <FeaturedProducts />
        <Upcoming />
        <TopCreators />
        <Footer />
        
    </main>
  )
}
