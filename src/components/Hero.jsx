import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const bgImages = [
  '/images/hero/hero_1.png',
  '/images/hero/hero_2.png',
  '/images/hero/hero_3.png',
  '/images/hero/hero_4.jpeg',
  '/images/hero/hero_5.png',
  '/images/hero/hero_6.png',
  '/images/hero/hero_7.png',
  '/images/hero/hero_8.png',
  '/images/hero/hero_9.png',
  '/images/hero/hero_10.png',
  '/images/hero/hero_11.png',
  '/images/hero/hero_12.webp',
  '/images/hero/hero_13.jpeg'
]

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length)
    }, 4000) // Change image every 4 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-navy-950 flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.65, scale: 1 }} // CHANGED: Increased from 0.3 to 0.65 so the images are clearly visible
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* CHANGED: Adjusted gradient overlay to cover only the left text area on desktop for readability, leaving the right side clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-transparent z-10 pointer-events-none w-full lg:w-[42%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent z-10 pointer-events-none" />

        {/* Subtle grid line overlay */}
        <div className="absolute inset-0 bg-grid-steel opacity-5 z-10 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-none w-full px-6 lg:pl-12 xl:pl-16 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            {/* Global Manufacturing Partner Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-navy-800/80 border border-lime-brand/30 text-lime-brand mb-6 text-[10px] uppercase font-display font-extrabold tracking-widest"
            >
              <span className="w-1 h-1 bg-lime-brand rounded-full animate-ping" />
              Global Manufacturing Partner
            </motion.div>

            {/* Typography */}
            <motion.h1
              className="font-display font-black uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-white mb-4 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Precision <span className="text-lime-brand">Reimagined.</span><br />
              Engineering Excellence.
            </motion.h1>
            
            {/* Secondary Tagline */}
            <motion.p
              className="font-mono text-xs uppercase tracking-widest text-lime-brand mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              Precision In Every Cut
            </motion.p>

            {/* Description Paragraph */}
            <motion.p
              className="text-steel-200 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed mb-10 font-medium font-body drop-shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Paramount Cutting Tools delivers world-class industrial solutions with metallurgical integrity and micron-level accuracy. We empower global manufacturing through advanced rotary tool engineering.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#products" className="btn-primary group py-4 px-7 flex items-center justify-center text-center w-full sm:w-auto gap-2">
                Explore Catalog
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-outline-white py-4 px-7 border-white/20 text-white hover:bg-white/10 bg-navy-950/40 backdrop-blur-sm flex items-center justify-center text-center w-full sm:w-auto">
                Contact Us
              </a>
            </motion.div>
          </div>

          {/* Right side is intentionally left spacious to show off the brighter changing background tool graphics */}
          <div className="hidden lg:block lg:col-span-7" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="font-display font-bold text-[9px] uppercase tracking-[0.3em] text-steel-400">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-lime-brand to-transparent animate-[pulse_2s_infinite]" />
      </div>

      {/* Bottom green accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent z-20" />
    </section>
  )
}