import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const industries = [
  {
    name: 'Automotive',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80',
  },
  {
    name: 'Aerospace',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4aa8502?w=600&q=80',
  },
  {
    name: 'Engineering',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  },
  {
    name: 'Die & Mould',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80',
  },
  {
    name: 'Energy',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80',
  },
  {
    name: 'General Machining',
    image: 'https://images.unsplash.com/photo-1565372782-afd738b5eee6?w=600&q=80',
  },
]

export default function Industries() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section ref={ref} id="industries" className="bg-navy-950 text-white py-24 font-body relative overflow-hidden border-t border-navy-800">

      {/* Background Subtle Tech Grid matching your UI exactly */}
      <div className="absolute inset-0 bg-grid-navy opacity-30 pointer-events-none" />

      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ==========================================
            HEADER SEQUENCE
            ========================================== */}
        <div className="space-y-3 mb-16 border-b border-navy-800 pb-10">
          <span className="text-xs font-mono tracking-[0.25em] text-steel-400 uppercase block">
            // SECTOR DEPLOYMENT GLOBAL
          </span>
          <h2 className="font-display font-black uppercase text-4xl sm:text-5xl tracking-tight text-white leading-none">
            Industries <br />
            <span className="text-lime-brand">We Serve.</span>
          </h2>
        </div>

        {/* ==========================================
            INDUSTRIES GRID LAYOUT
            ========================================== */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
            className="group relative overflow-hidden aspect-[4/5] cursor-pointer border border-navy-800 bg-navy-900/40 rounded-xl shadow-xl hover:border-lime-brand/30 transition-colors duration-500 flex flex-col justify-end"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            {/* Tactical Corner Grid Decorators */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-navy-800 group-hover:border-lime-brand/30 transition-colors" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-navy-800 group-hover:border-lime-brand/30 transition-colors" />

              {/* Core Industry Background Image */}
              <img
                src={ind.image}
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.55] grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-[0.35] transition-all duration-700 ease-out pointer-events-none"
              />

              {/* Lighting Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute inset-0 bg-radial from-lime-500/0 via-transparent to-transparent group-hover:from-lime-500/5 transition-all duration-500 pointer-events-none blur-xl" />

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
        </div>

      </div>

      {/* Bottom green accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent" />
    </section>
  )
}