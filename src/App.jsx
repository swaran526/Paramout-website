import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'
import ToolingPortfolio from './components/ToolingPortfolio'
import ProductCategories from './components/ProductCategories'
import FeaturedProducts from './components/FeaturedProducts'
import WhyChooseUs from './components/WhyChooseUs'
import ManufacturingCapabilities from './components/ManufacturingCapabilities'
import ManufacturingProcess from './components/ManufacturingProcess'
import ValueProposition from './components/ValueProposition'
import Industries from './components/Industries'
import Contact from './components/Contact'
import FindUs from './components/FindUs'
import BottomCTA from './components/BottomCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712]">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <ToolingPortfolio />
        <ProductCategories />
        <FeaturedProducts />
        <WhyChooseUs />
        <ManufacturingCapabilities />
        <ManufacturingProcess />
        <ValueProposition />
        <Industries />
        <Contact />
        <FindUs />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  )
}
