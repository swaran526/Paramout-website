import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'

const products = [
  {
    name: 'PCD Reamer',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  },
  {
    name: 'Indexable Boring Tool',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&q=80',
  },
  {
    name: 'Solid Carbide End Mill',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
  },
  {
    name: 'Gear Hob Cutter',
    image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=400&q=80',
  },
  {
    name: 'PCD Face Mill',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80',
  },
  {
    name: 'Special Form Tool',
    image: 'https://images.unsplash.com/photo-1565372782-afd738b5eee6?w=400&q=80',
  },
]

export default function FeaturedProducts() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section ref={ref} className="py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2 border-l-4 border-lime-brand pl-4">
            <h2 className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tight text-navy-800">
              Featured <span className="text-lime-brand">Products</span>
            </h2>
          </div>

          {/* Navigation Arrows (Decorative matching client screenshot) */}
          <div className="flex gap-2">
            <button className="w-9 h-9 rounded-full border border-navy-800/30 flex items-center justify-center text-navy-800 hover:bg-navy-800 hover:text-white transition-colors duration-200">
              <ArrowLeft size={16} />
            </button>
            <button className="w-9 h-9 rounded-full bg-navy-800 border border-navy-800 flex items-center justify-center text-white hover:bg-navy-900 transition-colors duration-200">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              className="group bg-white border border-steel-200 hover:border-lime-brand shadow-sm hover:shadow-md transition-all duration-300 flex flex-col p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {/* Product Image Container */}
              <div className="relative aspect-square w-full mb-4 bg-offwhite overflow-hidden flex items-center justify-center border border-steel-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Product Info Block (Centered text and green link) */}
              <div className="text-center flex flex-col flex-1 mt-2">
                <h3 className="font-display font-black uppercase text-[10px] lg:text-[11px] tracking-wider text-navy-900 mb-2 line-clamp-2 min-h-[32px]">
                  {product.name}
                </h3>

                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center justify-center gap-1.5 font-display font-bold uppercase text-[9px] tracking-widest text-lime-brand group-hover:text-lime-brandHover transition-colors"
                >
                  View Details
                  <ArrowUpRight size={11} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
