import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import automotiveImg from '../assets/images/industries_we_serve/automotive.jpeg'
import aerospaceImg from '../assets/images/industries_we_serve/areospace.jpeg'
import engineeringImg from '../assets/images/industries_we_serve/engineering.jpeg'
import dieMouldImg from '../assets/images/industries_we_serve/die & mould.jpeg'
import energyImg from '../assets/images/industries_we_serve/energy.jpeg'
import generalMachiningImg from '../assets/images/industries_we_serve/general machining.jpeg'

const industries = [
  {
    name: 'Automotive',
    image: automotiveImg,
  },
  {
    name: 'Aerospace',
    image: aerospaceImg,
  },
  {
    name: 'Engineering',
    image: engineeringImg,
  },
  {
    name: 'Die & Mould',
    image: dieMouldImg,
  },
  {
    name: 'Energy',
    image: energyImg,
  },
  {
    name: 'General Machining',
    image: generalMachiningImg,
  },
]

const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
}

const headerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  }
}

export default function Industries() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.05 })

  return (
    <section ref={ref} id="industries" className="bg-navy-900 text-white py-24 font-body relative overflow-hidden border-t border-navy-800">

      {/* Background Subtle Tech Grid matching your UI exactly */}
      <motion.div
        animate={inView ? {
          opacity: [0.15, 0.3, 0.15]
        } : {}}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-grid-navy pointer-events-none"
      />

      {/* Ambient center glow */}
      <motion.div
        animate={inView ? {
          scale: [1, 1.12, 1],
          opacity: [0.4, 0.8, 0.4]
        } : {}}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-brand/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ==========================================
            HEADER SEQUENCE
            ========================================== */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-4 mb-16 border-b border-navy-800 pb-10"
        >
          <motion.h2
            variants={headerItemVariants}
            className="font-display font-black uppercase text-4xl sm:text-5xl tracking-tight text-white leading-none"
          >
            Industries <br />
            <span className="text-lime-brand">We Serve</span>
          </motion.h2>
          <motion.p
            variants={headerItemVariants}
            className="text-steel-300 text-sm font-medium leading-relaxed max-w-2xl"
          >
            Delivering high-precision cutting tool solutions tailored to the strict demands of global manufacturing sectors.
          </motion.p>
        </motion.div>

        {/* ==========================================
            INDUSTRIES GRID LAYOUT
            ========================================== */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.name}
              variants={cardVariants}
              className="group relative overflow-hidden aspect-[4/5] cursor-pointer border border-lime-brand/20 bg-navy-900/40 rounded-xl shadow-xl flex flex-col justify-end transition-colors duration-300"
              whileHover={{
                y: -6,
                scale: 1.03,
                borderColor: 'rgba(163, 230, 53, 0.4)',
                boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(163, 230, 53, 0.15)'
              }}
            >
              {/* Tactical Corner Grid Decorators */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-lime-brand/30 group-hover:border-lime-brand/60 transition-colors" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-lime-brand/30 group-hover:border-lime-brand/60 transition-colors" />

              {/* Core Industry Background Image */}
              <img
                src={ind.image}
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.65] group-hover:scale-105 group-hover:brightness-[0.45] transition-all duration-700 ease-out pointer-events-none"
              />

              {/* Lighting Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute inset-0 bg-radial from-lime-500/8 via-transparent to-transparent group-hover:from-lime-500/18 transition-all duration-500 pointer-events-none blur-xl" />

              {/* Description & Title Card Layer */}
              <div className="p-4 sm:p-5 relative z-10 w-full text-center transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                {/* Fixed bottom meta label overlay */}
                <div className="bg-navy-950/90 border border-navy-800/80 w-full py-2.5 px-3 rounded backdrop-blur-xs group-hover:border-lime-brand/20 transition-colors">
                  <h3 className="font-display font-black uppercase text-[10px] sm:text-xs tracking-wider text-white group-hover:text-lime-400 transition-colors duration-200">
                    {ind.name}
                  </h3>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Bottom green accent line */}
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent"
      />
    </section>
  )
}