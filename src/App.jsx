import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'
import IntegratedProductsShowcase from './components/ToolingPortfolio'
import FeaturedProducts from './components/FeaturedProducts'
import WhyChooseUs from './components/WhyChooseUs'
import ManufacturingProcess from './components/ManufacturingProcess'
import ValueProposition from './components/ValueProposition'
import Industries from './components/Industries'
import OurTeam from './components/OurTeam'
import Contact from './components/Contact'
import FindUs from './components/FindUs'
import BottomCTA from './components/BottomCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <IntegratedProductsShowcase />
        <FeaturedProducts />
        <WhyChooseUs />
        <ManufacturingProcess />
        <ValueProposition />
        <Industries />
        <OurTeam />
        <Contact />
        <FindUs />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  )
}
