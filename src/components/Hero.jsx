import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen bg-navy-900 flex flex-col justify-center overflow-hidden pt-24 lg:pt-20">
      {/* Grid line overlay */}
      <div className="absolute inset-0 bg-grid-steel opacity-10 pointer-events-none" />

      {/* Decorative gradient overlay */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-navy-800/40 via-transparent to-transparent pointer-events-none" />

      {/* Top green accent gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-lime-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display font-black uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-white mb-6">
                Precision Tools<br />
                For <span className="text-lime-brand">Maximum Performance</span>
              </h1>
              
              <p className="text-steel-300 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed mb-10 font-normal">
                High-performance cutting tools engineered for precision, durability and superior results.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a href="#products" className="btn-primary group py-4 px-7">
                Explore Products
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-outline-white py-4 px-7">
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Hero Right Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              className="relative aspect-[4/3] lg:aspect-square w-full rounded-none overflow-hidden border border-steel-700/50 bg-navy-800/50 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                alt="Paramount Precision Cutting Tools Showcase"
                className="w-full h-full object-cover grayscale brightness-90 contrast-125"
              />
              
              {/* Overlay shading to blend image with theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
              
              {/* Highlight boarder corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-lime-brand" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-lime-brand" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Accent bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-lime-brand via-lime-brandHover to-transparent" />
    </section>
  )
}
