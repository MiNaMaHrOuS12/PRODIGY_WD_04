import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import HeroSection2 from '../components/HeroSection2';
import PricingCard from '../components/PricingCard';

const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroSection2  heading="PROJECTS." text="Some Of My Last Recent Works" />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project
