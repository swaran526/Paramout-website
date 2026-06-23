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
    <section id="industries" ref={ref} className="py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-10 border-l-4 border-lime-brand pl-4">
          <h2 className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tight text-navy-800">
            Industries <span className="text-lime-brand">We Serve</span>
          </h2>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              className="group relative overflow-hidden aspect-[4/5] cursor-pointer border border-steel-200"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {/* Card Image */}
              <img
                src={ind.image}
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent group-hover:from-navy-950/95 transition-all duration-300" />

              {/* Title Plate (Centered on the bottom dark band) */}
              <div className="absolute bottom-0 left-0 right-0 bg-navy-950/80 group-hover:bg-navy-950 py-3.5 px-4 text-center border-t border-steel-800/40">
                <h3 className="font-display font-bold uppercase text-[10px] sm:text-xs tracking-wider text-white group-hover:text-lime-brand transition-colors duration-200">
                  {ind.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
