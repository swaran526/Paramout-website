import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCategories from './components/ProductCategories'
import About from './components/About'
import StatsBar from './components/StatsBar'
import FeaturedProducts from './components/FeaturedProducts'
import Industries from './components/Industries'
import Contact from './components/Contact'
import FindUs from './components/FindUs'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-offwhite">
      <Navbar />
      <main>
        <Hero />
        <ProductCategories />
        <About />
        <StatsBar />
        <FeaturedProducts />
        <Industries />
        <Contact />
        <FindUs />
      </main>
      <Footer />
    </div>
  )
}
