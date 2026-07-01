import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, MessageSquare } from 'lucide-react'

export default function BottomCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="relative py-20 bg-navy-900 overflow-hidden border-t border-navy-800">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-navy opacity-30 pointer-events-none" />
      
      {/* Highlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-brand/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top green accent gradient line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-lime-brand mb-4 block">Get Started Today</span>
          
          <h2 className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight tracking-tight">
            Ready to Optimize Your <span className="text-lime-brand">Production?</span>
          </h2>
          
          <p className="text-steel-200 text-sm sm:text-base leading-relaxed mb-10 max-w-xl mx-auto font-medium">
            Bring your blueprints, material specifications, and cycle times to our engineering team. We deliver custom solutions held to aerospace tolerances.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4">
            <a href="#contact" className="btn-primary group py-4 px-8 flex items-center justify-center text-center w-full sm:w-auto">
              Request a Quote
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+919900858297" className="btn-outline-white py-4 px-8 flex items-center justify-center text-center w-full sm:w-auto gap-2">
              <MessageSquare size={14} className="text-lime-brand" />
              Talk to an Engineer
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom green accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-lime-brand via-lime-brandHover to-transparent" />
    </section>
  )
}
