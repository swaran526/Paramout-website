import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import logoImg from '../assets/images/logo.png'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact Us', href: '#contact' },
]

const productCategories = [
  'SOLID CARBIDE TOOLS',
  'CUSTOMIZED FORM TOOLS',
  'CERMET,PCD AND CARBIDE EXPENDABLE REAMER',
  'PCD BORING TOOLS',
  'HOB AND FIRTREE',
  'PCD AND PCBN SPL INSERTS',
  'FINE BORING GUIDE PAD TOOLS',
  'SPL PCD WIPER CARTRIDGE',
  'MICRO TOOLS AND BLANK PREPARATION',
  'CUSTOMIZED FORM CUTTER'
]

export default function Navbar({ onSelectCategory }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-800/98 backdrop-blur-md border-b border-navy-700/60 shadow-lg' : 'bg-navy-800'
          }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Styled Logo matching screenshot (rotating green ring with triangle/A indicator) */}
            <img
              src={logoImg}
              alt="Paramount Cutting Tools Logo"
              className="h-12 w-auto object-contain flex-shrink-0 logo-img"
            />
            <div className="flex flex-col leading-[1.1]">
              <span className="font-display font-extrabold text-base lg:text-lg uppercase tracking-wider text-white">
                Paramount
              </span>
              <span className="font-display font-bold text-[10px] lg:text-[11px] uppercase tracking-widest text-lime-brand">
                Cutting Tools
              </span>
              <span className="font-mono text-[7px] lg:text-[8px] uppercase tracking-wider text-steel-400 mt-1">
                Precision In Every Cut
              </span>
            </div>
          </a>

          {/* Desktop Nav Links & CTA (Right) */}
          <div className="hidden xl:flex items-center gap-8">
            <nav className="flex items-center gap-7">
              {navLinks.map((link) => {
                if (link.label === 'Products') {
                  return (
                    <div
                      key={link.label}
                      className="relative group py-2"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <a
                        href={link.href}
                        className={`font-display font-bold uppercase text-[11px] lg:text-xs tracking-wider transition-colors duration-200 flex items-center gap-1 ${
                          dropdownOpen ? 'text-lime-brand' : 'text-white hover:text-lime-brand'
                        }`}
                        onClick={(e) => {
                          e.preventDefault()
                          if (onSelectCategory) onSelectCategory('ALL PRODUCTS')
                        }}
                      >
                        {link.label}
                        <ChevronDown size={12} className={`text-white/70 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-lime-brand' : ''}`} />
                      </a>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="absolute left-0 mt-3 w-80 bg-navy-950 border border-navy-800 rounded-xl shadow-2xl p-4 z-50 shadow-[0_20px_50px_rgba(3,12,23,0.9)]"
                          >
                            <div className="flex flex-col gap-1">
                              {productCategories.map((cat) => (
                                <button
                                  key={cat}
                                  onClick={() => {
                                    if (onSelectCategory) onSelectCategory(cat)
                                    setDropdownOpen(false)
                                  }}
                                  className="text-left font-mono text-[10px] tracking-wider uppercase px-3 py-2 text-steel-400 hover:text-lime-brand hover:bg-navy-800/50 rounded-lg transition-all duration-200 border-l border-transparent hover:border-lime-brand/50 pl-4"
                                >
                                  {cat}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <div key={link.label} className="relative group py-2">
                    <a
                      href={link.href}
                      className="font-display font-bold uppercase text-[11px] lg:text-xs tracking-wider text-white hover:text-lime-brand transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                    {/* Micro-underline on active/hover */}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-lime-brand group-hover:w-full transition-all duration-200" />
                  </div>
                )
              })}
            </nav>

            <a
              href="#contact"
              className="bg-lime-brand hover:bg-lime-brandHover text-navy-900 font-display font-extrabold uppercase text-[11px] tracking-wider px-5 py-3 rounded-none shadow-md hover:shadow-lime-brand/20 transition-all duration-200 flex-shrink-0"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-white hover:text-lime-brand transition-colors p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-navy-900/98 backdrop-blur-xl flex flex-col pt-24 px-8 pb-10 overflow-y-auto"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-2 mt-4">
              {navLinks.map((link, i) => {
                if (link.label === 'Products') {
                  return (
                    <div key={link.label} className="border-b border-navy-800">
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="w-full flex items-center justify-between font-display font-extrabold uppercase text-2xl text-white hover:text-lime-brand transition-colors py-2.5"
                      >
                        <span>{link.label}</span>
                        <ChevronDown size={20} className={`text-white transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180 text-lime-brand' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden bg-navy-950/40 rounded-lg px-2 py-1 flex flex-col gap-1 mb-2"
                          >
                            {productCategories.map((cat) => (
                              <button
                                key={cat}
                                onClick={() => {
                                  if (onSelectCategory) onSelectCategory(cat)
                                  setMobileOpen(false)
                                }}
                                className="text-left font-mono text-xs tracking-wider uppercase py-2 px-3 text-steel-400 hover:text-lime-brand border-l border-navy-800/50 pl-4"
                              >
                                {cat}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display font-extrabold uppercase text-2xl text-white hover:text-lime-brand transition-colors py-2.5 border-b border-navy-800"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                )
              })}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-lime-brand hover:bg-lime-brandHover text-navy-900 font-display font-black uppercase text-center py-4 tracking-wider text-xs shadow-md transition-all duration-200"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
