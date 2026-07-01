import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'
import IntegratedProductsShowcase, { productsData } from './components/ToolingPortfolio'
import WhyChooseUs from './components/WhyChooseUs'
import ManufacturingProcess from './components/ManufacturingProcess'
import Industries from './components/Industries'
import Contact from './components/Contact'
import FindUs from './components/FindUs'
import BottomCTA from './components/BottomCTA'
import Footer from './components/Footer'

export default function App() {
  const [activeFilter, setActiveFilter] = useState('ALL PRODUCTS')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [activeImgIndex, setActiveImgIndex] = useState(0)

  const handleCloseModal = () => {
    setSelectedProduct(null)
    setActiveFilter('ALL PRODUCTS')
    setActiveImgIndex(0)
  }

  const handleSelectCategory = (category) => {
    setActiveFilter(category)
    setActiveImgIndex(0)
    
    // Automatically open the corresponding product modal if a specific product category is selected
    if (category === 'ALL PRODUCTS') {
      setSelectedProduct(null)
    } else {
      const prod = productsData.find(p => p.category === category)
      if (prod) {
        setSelectedProduct(prod)
      }
    }

    const el = document.getElementById('products')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-navy-950">
      <Navbar onSelectCategory={handleSelectCategory} />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <IntegratedProductsShowcase 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
        <WhyChooseUs />
        <ManufacturingProcess />
        <Industries />
        <Contact />
        <FindUs />
        <BottomCTA />

        {/* Product Details Modal (Product + 2 more related images, with no names or descriptions for the images) */}
        <AnimatePresence>
          {selectedProduct && (
            <div 
              onClick={handleCloseModal}
              className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/90 backdrop-blur-md p-4 cursor-pointer"
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-navy-950 border border-navy-800 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl cursor-default"
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 text-steel-400 hover:text-white transition-colors p-1 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>

                {/* Modal Header */}
                <div className="mb-6 border-b border-navy-800 pb-4 pr-8">
                  <span className="font-mono text-xs text-lime-brand tracking-widest uppercase block mb-1">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-2xl font-display font-black uppercase text-white tracking-wide">
                    {selectedProduct.title}
                  </h3>
                </div>

                {/* 5-Image Interactive Gallery (using space beautifully) */}
                <div className="space-y-4 mb-6">
                  {/* Large Featured Image */}
                  <div className="w-full h-[280px] sm:h-[360px] md:h-[420px] bg-navy-900 border border-navy-800 rounded-xl overflow-hidden relative">
                    <img
                      src={selectedProduct.images[activeImgIndex]}
                      alt={`${selectedProduct.title} featured view`}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  </div>

                  {/* 5 Thumbnail Images (Product + 4 more) */}
                  <div className="grid grid-cols-5 gap-2 sm:gap-4">
                    {selectedProduct.images.map((imgSrc, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImgIndex(idx)}
                        onMouseEnter={() => setActiveImgIndex(idx)}
                        className={`aspect-[4/3] bg-navy-900 border rounded-xl overflow-hidden transition-all duration-300 focus:outline-none cursor-pointer ${
                          activeImgIndex === idx 
                            ? 'border-lime-brand scale-[1.04] shadow-[0_0_15px_rgba(163,230,53,0.2)]' 
                            : 'border-navy-800 hover:border-navy-700'
                        }`}
                      >
                        <img
                          src={imgSrc}
                          alt={`${selectedProduct.title} thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main Product Description */}
                <div className="space-y-4">
                  <h4 className="font-mono text-xs text-lime-brand tracking-wider uppercase">
                    // Tool Specifications
                  </h4>
                  <p className="text-steel-200 text-sm sm:text-base leading-relaxed">
                    {selectedProduct.desc}
                  </p>
                  <div className="pt-4 border-t border-navy-800 flex justify-end">
                    <a
                      href="#contact"
                      className="btn-primary py-3 px-6 text-xs uppercase font-mono tracking-wider"
                      onClick={() => {
                        handleCloseModal();
                        window.location.hash = 'contact';
                      }}
                    >
                      Request Technical Specifications
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
      <Footer onSelectCategory={handleSelectCategory} />
    </div>
  )
}
