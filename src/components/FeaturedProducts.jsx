import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react'

const products = [
  {
    name: 'PCD Reamer',
    category: 'PRECISION GEAR',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  },
  {
    name: 'Indexable Boring Tool',
    category: 'BORING MATRIX',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&q=80',
  },
  {
    name: 'Solid Carbide End Mill',
    category: 'MILLING CORE',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
  },
  {
    name: 'Gear Hob Cutter',
    category: 'CUTTING SYSTEM',
    image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=400&q=80',
  },
  {
    name: 'PCD Face Mill',
    category: 'SURFACE HONE',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80',
  },
  {
    name: 'Special Form Tool',
    category: 'CUSTOM GEOMETRY',
    image: 'https://images.unsplash.com/photo-1565372782-afd738b5eee6?w=400&q=80',
  },
]

export default function FeaturedProducts() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  // Animation variants for staggered card entries
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section ref={ref} id="featured-products" className="bg-navy-950 text-white py-24 font-body relative overflow-hidden border-t border-navy-800">

      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grid-navy opacity-30 pointer-events-none" />

      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ==========================================
            SECTION HEADER W/ UTILITY NAV CONTROLS
            ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 border-b border-navy-800 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-[0.25em] text-steel-400 uppercase block">
              // HIGH-YIELD ASSET SELECTION
            </span>
            <h2 className="font-display font-black uppercase text-3xl sm:text-4xl tracking-tight text-white leading-none">
              Featured <span className="text-lime-brand">Products</span>
            </h2>
          </div>

          {/* Tactical Framework Slide Navigation Controls */}
          <div className="flex gap-2 self-start sm:self-end">
            <button className="w-10 h-10 rounded-lg border border-navy-800 bg-navy-900/40 flex items-center justify-center text-steel-400 hover:text-white hover:border-navy-700 transition-all duration-300 group">
              <ArrowLeft size={16} className="transform group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button className="w-10 h-10 rounded-lg bg-gradient-to-r from-lime-500 to-emerald-600 flex items-center justify-center text-[#030712] font-bold shadow-[0_0_15px_rgba(163,230,53,0.15)] hover:shadow-[0_0_25px_rgba(163,230,53,0.3)] transition-all duration-300 group">
              <ArrowRight size={16} className="transform group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* ==========================================
            PRODUCT GRID LAYOUT (Tactical Card Track)
            ========================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={cardVariants}
              className="group bg-navy-900/40 border border-navy-800 hover:border-lime-brand/30 rounded-xl relative overflow-hidden p-4 shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Fallback Tech Corner Indicators on Card Matrix */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-navy-800/80 group-hover:border-lime-brand/40 transition-colors" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-navy-800/80 group-hover:border-lime-brand/40 transition-colors" />

              <div>
                {/* Product Image Window Container */}
                <div className="relative aspect-square w-full mb-4 bg-navy-950 rounded-lg overflow-hidden flex items-center justify-center border border-navy-800/60 group-hover:border-navy-700 transition-colors">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover brightness-[0.55] grayscale group-hover:grayscale-0 group-hover:brightness-[0.35] group-hover:scale-105 transition-all duration-700 ease-out"
                  />

                  {/* Subtle Gradient Veil on Tool Frame */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Embedded Floating Category Identifier */}
                  <div className="absolute bottom-2 left-2 font-mono text-[8px] tracking-widest text-steel-400 bg-navy-950/90 px-2 py-0.5 rounded border border-navy-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.category}
                  </div>
                </div>

                {/* Technical Product Info Metadata Block */}
                <div className="space-y-1 px-1">
                  <span className="font-mono text-[8px] tracking-[0.15em] text-lime-400 uppercase block opacity-60 group-hover:opacity-100 transition-opacity">
                    // PCT SYSTEMS
                  </span>
                  <h3 className="font-display font-black uppercase text-xs lg:text-[13px] tracking-wide text-steel-200 group-hover:text-white transition-colors line-clamp-2 min-h-[36px] leading-tight">
                    {product.name}
                  </h3>
                </div>
              </div>

              {/* Functional Bottom Link Assembly */}
              <div className="pt-4 mt-2 border-t border-navy-800/60 flex items-center justify-between px-1">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 font-mono font-bold uppercase text-[9px] tracking-widest text-steel-500 group-hover:text-lime-brand transition-colors"
                >
                  <span>VIEW DETAILS</span>
                  <ChevronRight size={10} className="transform group-hover:translate-x-0.5 transition-transform" />
                </a>

                <ArrowUpRight size={12} className="text-steel-600 group-hover:text-lime-brand/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>

              {/* Dynamic Radial Ambient Background Glow */}
              <div className="absolute inset-0 bg-radial from-lime-500/0 via-transparent to-transparent group-hover:from-lime-500/5 transition-all duration-500 pointer-events-none blur-xl" />
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Bottom green accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent" />
    </section>
  )
}