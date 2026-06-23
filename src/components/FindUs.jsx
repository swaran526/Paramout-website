import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Zap } from 'lucide-react'

export default function FindUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      {/* ───── FIND US HERE ───── */}
      <section ref={ref} className="bg-offwhite py-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <motion.div
            className="flex items-center gap-2 mb-8 border-l-4 border-lime-brand pl-4"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <MapPin size={16} className="text-lime-brand" />
                <span className="font-display text-xs font-bold uppercase tracking-widest text-lime-brand">Our Location</span>
              </div>
              <h2 className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tight text-navy-800">
                Find Us <span className="text-lime-brand">Here</span>
              </h2>
            </div>
          </motion.div>

          {/* Map Container */}
          <motion.div
            className="relative w-full overflow-hidden border-2 border-steel-200 shadow-md"
            style={{ height: '420px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/*
              ─────────────────────────────────────────────────────────────
              TO INSERT YOUR MAP:
              Replace the src below with your Google Maps Embed URL.
              Example:
              src="https://www.google.com/maps/embed?pb=!1m18!1m12..."
              ─────────────────────────────────────────────────────────────
            */}
            <iframe
              title="Paramount Cutting Tools Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108842.51780428944!2d75.79834!3d30.90097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a0b%3A0x4fd579b8b2e6fb1d!2sLudhiana%2C%20Punjab%2C%20India!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Address Overlay Badge */}
            <div className="absolute bottom-4 left-4 bg-navy-900/95 backdrop-blur-sm px-4 py-3 border-l-2 border-lime-brand shadow-lg max-w-xs">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-lime-brand mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-display font-extrabold uppercase text-[10px] tracking-widest text-lime-brand mb-0.5">Paramount Cutting Tools</p>
                  <p className="text-steel-300 text-xs font-body leading-relaxed">
                    B-23, Industrial Area,<br />Ludhiana, Punjab, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── QUICK RESPONSE ───── */}
      <section className="bg-navy-800 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Left — Text Block */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-lime-brand/10 border border-lime-brand/30 mt-1">
                <Zap size={20} className="text-lime-brand" />
              </div>
              <div>
                <h3 className="font-display font-black uppercase text-xl lg:text-2xl text-white mb-3 tracking-tight">
                  Quick <span className="text-lime-brand">Response</span>
                </h3>
                <p className="text-steel-300 text-sm leading-relaxed max-w-xl">
                  Have an urgent requirement? Our team is available to respond within 24 hours.
                </p>
                <p className="text-steel-400 text-xs leading-relaxed mt-1 max-w-xl">
                  Call us directly for immediate assistance with tool specifications, custom orders, and delivery timelines.
                </p>
              </div>
            </div>

            {/* Right — Phone CTA */}
            <div className="flex-shrink-0 text-center lg:text-right">
              <p className="font-display font-bold text-[10px] uppercase tracking-widest text-steel-400 mb-2">Call Us Now</p>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-white hover:text-lime-brand transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-lime-brand flex items-center justify-center group-hover:bg-lime-brandHover transition-colors">
                  <Phone size={18} className="text-navy-900" />
                </div>
                <span className="font-display font-black text-2xl lg:text-3xl tracking-tight">
                  +91 98765 43210
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
