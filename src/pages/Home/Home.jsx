import React from 'react'
import About from '../../components/About/About'
import Campaigns from '../../components/About/Campaigns'
import Ads from '../../components/Ads/Ads'
import Clients from '../../components/Clients/Clients'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Signup from '../../components/Signup/Signup'
// import Skills from '../../components/Skills/Skills'

const Home = () => {

    return (
        <>
            <Navbar />
            <Hero />
            {/* <Skills /> */}

            <About />
            <Campaigns />
            <Ads />
            <Clients />
            <Signup />
            <Footer />
        </>
    )
}

export default Home