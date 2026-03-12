import BackofficeSection from '../components/backofficeSection'
import ExperienceSection from '../components/ExperienceSection'
import ProcessSection from '../components/ProcessSection'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Secondsection from '../components/secondsection'
import PricingSection from '../components/PricingSection'
import GameCatalog from '../components/Gamecatalog'
import StatsSection from '../components/StatsSection'
import FinalCTA from '../components/FinalCta'
import Footer from '../components/Footer'
const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Secondsection/>
        <ProcessSection/>
        <ExperienceSection/>
        <BackofficeSection/>
        <PricingSection/>
        <GameCatalog/>
        <StatsSection/>
        <FinalCTA/>
        <Footer/>
    </div>
  )
}

export default HomePage
