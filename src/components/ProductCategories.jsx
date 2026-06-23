import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const categories = [
  {
    name: 'PCD & CBN Tools',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  },
  {
    name: 'Indexable Tools',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&q=80',
  },
  {
    name: 'Solid Carbide Tools',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
  },
  {
    name: 'Rotary Files',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80',
  },
  {
    name: 'Gear Cutting Tools',
    image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=400&q=80',
  },
  {
    name: 'Special Tools',
    image: 'https://images.unsplash.com/photo-1565372782-afd738b5eee6?w=400&q=80',
  },
]

export default function ProductCategories() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="products" ref={ref} className="py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-10 border-l-4 border-lime-brand pl-4">
          <h2 className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tight text-navy-800">
            Our Product <span className="text-lime-brand">Categories</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="group bg-white border border-steel-200 hover:border-lime-brand shadow-sm hover:shadow-md transition-all duration-300 flex flex-col p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {/* Image Frame */}
              <div className="relative aspect-square w-full mb-4 bg-offwhite overflow-hidden flex items-center justify-center border border-steel-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Title (Centered below image) */}
              <div className="text-center mt-auto">
                <h3 className="font-display font-bold uppercase text-[11px] lg:text-xs tracking-wider text-navy-900 group-hover:text-lime-brand transition-colors duration-200 line-clamp-2">
                  {cat.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
