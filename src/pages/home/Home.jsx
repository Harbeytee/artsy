import React, { useContext, useEffect } from 'react'
import HeroSection from './HeroSection'
import FeaturedProducts from './FeaturedProducts'
import Upcoming from './Upcoming'
import TopCreators from './TopCreators'
import Footer from '../../components/Footer/Footer'
import './Home.scss'
import { Context } from '../../Context/Context'

import "animate.css/animate.min.css";
export default function Home() {
  const { changeIndex } = useContext(Context)

  useEffect(() => {
    changeIndex(1)
    window.scrollTo({top: 0, left: 0,});

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
