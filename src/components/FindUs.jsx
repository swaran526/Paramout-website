import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'

// ─── Animation Variants ───────────────────────────────────────────────────────

const headerVariants = {
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

// ─── Component ────────────────────────────────────────────────────────────────

export default function FindUs() {
  return (
    <section
      id="find-us"
      className="bg-navy-900 text-white py-24 font-body relative overflow-hidden border-t border-navy-800"
    >
      {/* Background tech grid */}
      <div className="absolute inset-0 bg-grid-navy opacity-30 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-lime-brand/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ══════════════════════════════════════════════
            CENTERED HEADER — whileInView animated
            ══════════════════════════════════════════════ */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            variants={headerItemVariants}
            className="font-display font-black uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none"
          >
            Find Us <span className="text-lime-brand">Here</span>
          </motion.h2>

          <motion.p
            variants={headerItemVariants}
            className="text-steel-300 text-sm sm:text-base font-medium leading-relaxed border-t border-navy-800 pt-4"
          >
            Visit our facility in Bangalore — precision cutting tools, engineered and delivered from the heart of Karnataka.
          </motion.p>
        </motion.div>

        {/* ══════════════════════════════════════════════
            MAP + INFO GRID
            ══════════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* ── Map (col-span-8) ─────────────────────── */}
          <motion.div
            className="lg:col-span-8 relative w-full overflow-hidden border border-navy-800 rounded-2xl shadow-2xl group min-h-[460px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Animated top border sweep */}
            <motion.div
              className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent z-30 pointer-events-none"
              initial={{ width: '0%', opacity: 0 }}
              whileInView={{ width: '100%', opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
            />

            {/* Corner decorators */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/20 group-hover:border-lime-brand/60 transition-colors duration-300 z-20 pointer-events-none" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-lime-brand/60 transition-colors duration-300 z-20 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/20 group-hover:border-lime-brand/60 transition-colors duration-300 z-20 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/20 group-hover:border-lime-brand/60 transition-colors duration-300 z-20 pointer-events-none" />

            {/* Google Maps iframe */}
            <iframe
              title="Paramount Cutting Tools Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2922180970627!2d77.4997161748422!3d13.017054087302501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3db0308417b7%3A0xa5b3b5a71938133a!2sParamount%20Cutting%20Tools!5e0!3m2!1sen!2sin!4v1782337455800!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full"
            />

            {/* Floating address badge */}
            <motion.div
              className="absolute bottom-4 left-4 bg-navy-950/95 border border-navy-800/80 px-4 py-3 rounded-xl backdrop-blur-sm shadow-xl max-w-xs z-20 group-hover:border-lime-brand/25 transition-colors duration-300"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-start gap-3">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <MapPin size={16} className="text-lime-brand mt-0.5 flex-shrink-0" />
                </motion.div>
                <div>
                  <p className="font-display font-black uppercase text-[10px] tracking-widest text-white mb-0.5">
                    Paramount Cutting Tools
                  </p>
                  <p className="text-steel-300 text-xs font-medium leading-relaxed">
                    Bangalore, Karnataka, India
                  </p>
                </div>
              </div>
            </motion.div>

            {/* "Open in Maps" button */}
            <motion.a
              href="https://maps.google.com/?q=Paramount+Cutting+Tools+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-lime-brand text-navy-950 font-mono font-extrabold text-[10px] tracking-widest uppercase px-4 py-2 rounded-lg shadow-lg hover:bg-lime-brandHover transition-colors duration-200"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Navigation size={11} />
              Open in Maps
            </motion.a>
          </motion.div>

          {/* ── Info Panel (col-span-4) ───────────────── */}
          <motion.div
            className="lg:col-span-4 flex flex-col gap-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >

            {/* Address Card */}
            <motion.div
              className="bg-navy-950/60 border border-navy-800 rounded-2xl p-6 relative overflow-hidden group hover:border-lime-brand/30 transition-colors duration-300 flex-1"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-lime-brand/60 via-lime-brand to-lime-brand/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-radial from-lime-500/0 via-transparent to-transparent group-hover:from-lime-500/4 transition-all duration-500 pointer-events-none blur-xl" />

              <div className="flex items-start gap-4 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-navy-950 border border-navy-800 group-hover:border-lime-brand/40 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(163,230,53,0.12)]">
                  <MapPin size={18} className="text-lime-brand" />
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-lime-brand">Address</p>
                  <h3 className="font-display font-black uppercase text-base text-white group-hover:text-lime-300 transition-colors duration-300">
                    Our Location
                  </h3>
                  <p className="text-steel-300 text-sm font-medium leading-relaxed">
                    Paramount Cutting Tools<br />
                    Bangalore, Karnataka<br />
                    India
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Working Hours Card */}
            <motion.div
              className="bg-navy-950/60 border border-navy-800 rounded-2xl p-6 relative overflow-hidden group hover:border-lime-brand/30 transition-colors duration-300"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-lime-brand/60 via-lime-brand to-lime-brand/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-radial from-lime-500/0 via-transparent to-transparent group-hover:from-lime-500/4 transition-all duration-500 pointer-events-none blur-xl" />

              <div className="flex items-start gap-4 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-navy-950 border border-navy-800 group-hover:border-lime-brand/40 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(163,230,53,0.12)]">
                  <Clock size={18} className="text-lime-brand" />
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-lime-brand">Working Hours</p>
                  <h3 className="font-display font-black uppercase text-base text-white group-hover:text-lime-300 transition-colors duration-300">
                    Open Hours
                  </h3>
                  <p className="text-steel-300 text-sm font-medium leading-relaxed">
                    Mon – Sat: 9:00 AM – 6:00 PM<br />
                    <span className="text-steel-500">Sunday: Closed</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              className="bg-navy-950/60 border border-navy-800 rounded-2xl p-6 relative overflow-hidden group hover:border-lime-brand/30 transition-colors duration-300"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-lime-brand/60 via-lime-brand to-lime-brand/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-radial from-lime-500/0 via-transparent to-transparent group-hover:from-lime-500/4 transition-all duration-500 pointer-events-none blur-xl" />

              <div className="flex items-start gap-4 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-navy-950 border border-navy-800 group-hover:border-lime-brand/40 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(163,230,53,0.12)]">
                  <Phone size={18} className="text-lime-brand" />
                </div>
                <div className="space-y-1 flex-1">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-lime-brand">Call Us</p>
                  <a
                    href="tel:+919900858297"
                    className="block font-display font-black text-xl text-white hover:text-lime-400 transition-colors duration-300 tracking-tight"
                  >
                    +91 99008 58297
                  </a>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>

      {/* Bottom lime accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-brand to-transparent" />
    </section>
  )
}
