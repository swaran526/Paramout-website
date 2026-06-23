import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Cpu, Settings, Truck, ArrowRight } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Premium Quality',
    desc: 'High-grade raw material and strict quality control',
  },
  {
    icon: Cpu,
    title: 'Precision Engineering',
    desc: 'Advanced technology for tight tolerances',
  },
  {
    icon: Settings,
    title: 'Custom Solutions',
    desc: 'Tailor-made tools to meet your specific needs',
  },
  {
    icon: Truck,
    title: 'Timely Delivery',
    desc: 'On-time dispatch with reliable logistics',
  },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section 
      id="about" 
      ref={ref} 
      className="relative overflow-hidden w-full lg:bg-gradient-to-r lg:from-navy-800 lg:from-[48%] lg:to-white lg:to-[48%] bg-navy-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 items-stretch">
          
          {/* Left Column — About Us (Dark Navy background on mobile) */}
          <div className="px-6 py-20 lg:py-28 lg:pr-20 text-white bg-navy-800 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="font-display text-xs font-bold tracking-widest text-lime-brand mb-4 uppercase">
                ◆ About Us
              </p>
              
              <h2 className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mb-6">
                Engineered for Precision.<br />
                Built for <span className="text-lime-brand">Excellence.</span>
              </h2>
              
              <p className="text-steel-300 leading-relaxed mb-8 text-sm sm:text-base font-light">
                Paramount Cutting Tools is a trusted manufacturer of high-quality cutting tools serving automotive, engineering and manufacturing industries. We combine advanced technology with uncompromising quality to deliver tools that enhance productivity and performance.
              </p>

              <div>
                <a href="#contact" className="btn-primary group">
                  Know More About Us
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Why Choose Us (White background) */}
          <div className="px-6 py-20 lg:py-28 lg:pl-16 bg-white flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="font-display text-xs font-bold tracking-widest text-steel-500 mb-4 uppercase">
                ◆ Core Competence
              </p>
              
              <h2 className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-navy-900 mb-12">
                Why <span className="text-lime-brand">Choose Us</span>
              </h2>

              {/* Grid of features */}
              <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
                {reasons.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    {/* Circle icon frame matching screenshot */}
                    <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-navy-800 text-lime-brand border-2 border-lime-brand shadow-sm">
                      <Icon size={18} />
                    </div>
                    
                    <div>
                      <h3 className="font-display font-extrabold uppercase text-xs sm:text-sm text-navy-900 tracking-wide mb-1">
                        {title}
                      </h3>
                      <p className="text-steel-500 text-xs sm:text-sm leading-relaxed font-light">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
