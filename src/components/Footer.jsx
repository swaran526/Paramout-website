import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  Products: ['PCD & CBN Tools', 'Indexable Tools', 'Solid Carbide Tools', 'Rotary Files', 'Gear Cutting Tools', 'Special Tools'],
  Industries: ['Automotive', 'Aerospace', 'Engineering', 'Die & Mould', 'Energy', 'General Machining'],
  Company: ['About Us', 'Manufacturing Process', 'Contact Us'],
}

const getLinkHref = (link) => {
  switch (link) {
    case 'About Us':
    case 'Manufacturing Process':
      return '#about'
    case 'Contact Us':
      return '#contact'
    case 'PCD & CBN Tools':
    case 'Indexable Tools':
    case 'Solid Carbide Tools':
    case 'Rotary Files':
    case 'Gear Cutting Tools':
    case 'Special Tools':
      return '#products'
    case 'Automotive':
    case 'Aerospace':
    case 'Engineering':
    case 'Die & Mould':
    case 'Energy':
    case 'General Machining':
      return '#industries'
    default:
      return '#'
  }
}

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-700 relative overflow-hidden">
      {/* Top accent green line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-lime-brand via-lime-brandHover to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 flex-shrink-0">
                <div className="absolute inset-0 rounded-full border-4 border-lime-brand/30 border-t-lime-brand animate-[spin_8s_linear_infinite]" />
                <div className="absolute inset-1.5 rounded-full bg-lime-brand flex items-center justify-center">
                  <span className="font-display font-black text-navy-950 text-sm">P</span>
                </div>
              </div>
              <div className="flex flex-col leading-[1.1]">
                <span className="font-display font-extrabold text-lg uppercase tracking-wider text-white">Paramount</span>
                <span className="font-display font-bold text-[10px] uppercase tracking-widest text-lime-brand">Cutting Tools</span>
              </div>
            </div>

            <p className="text-steel-400 text-sm leading-relaxed mb-6 max-w-xs">
              Delivering precision cutting solutions that drive performance and productivity across industries.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 mb-6">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-steel-300 hover:text-lime-brand transition-colors text-sm">
                <Phone size={14} className="text-lime-brand flex-shrink-0" />
                +91 98765 43210
              </a>
              <a href="mailto:info@paramountco.in" className="flex items-center gap-3 text-steel-300 hover:text-lime-brand transition-colors text-sm">
                <Mail size={14} className="text-lime-brand flex-shrink-0" />
                info@paramountco.in
              </a>
              <div className="flex items-start gap-3 text-steel-400 text-sm">
                <MapPin size={14} className="text-lime-brand flex-shrink-0 mt-0.5" />
                B-23, Industrial Area,<br />Ludhiana, Punjab, India
              </div>
            </div>
          </div>

          {/* Footer Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display font-extrabold uppercase text-xs tracking-wider text-white mb-4 flex items-center gap-2 after:flex-1 after:h-px after:bg-navy-700">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href={getLinkHref(link)} 
                      className="text-steel-400 hover:text-lime-brand transition-colors text-xs font-body flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-lime-brand/30 group-hover:bg-lime-brand transition-colors flex-shrink-0" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-steel-500 text-xs font-body">
          <p>© {new Date().getFullYear()} Paramount Cutting Tools. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-lime-brand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-lime-brand transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-lime-brand transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
