import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Users, Wrench, Globe } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'

const stats = [
  { value: 15, suffix: '+', label: 'Years of Experience', icon: Building2 },
  { value: 500, suffix: '+', label: 'Satisfied Customers', icon: Users },
  { value: 2000, suffix: '+', label: 'Products Delivered', icon: Wrench },
  { value: 25, suffix: '+', label: 'Countries Served', icon: Globe },
]

export default function StatsBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="bg-navy-900 border-y border-navy-700 py-10 relative overflow-hidden">
      {/* Subtle green top gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-brand to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="flex items-center gap-4 p-4 border-r last:border-r-0 border-navy-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Yellow/Green outline icon frame */}
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-none border border-lime-brand/50 text-lime-brand">
                  <Icon size={22} className="stroke-[1.5]" />
                </div>
                
                <div className="flex flex-col leading-none">
                  <div className="font-display font-black text-3xl sm:text-4xl text-white flex items-center">
                    {inView && (
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    )}
                  </div>
                  <p className="font-display font-bold text-[10px] sm:text-[11px] uppercase tracking-wider text-steel-400 mt-1.5">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />
    </section>
  )
}
