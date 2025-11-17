import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-black/80 backdrop-blur border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]" />
            <div className="leading-tight">
              <p className="text-white font-bold text-sm tracking-wider">MAS Mail & Print Center</p>
              <p className="text-white/60 text-xs">Rockford, IL</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `relative text-sm font-medium transition-colors ${isActive ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'}`}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37] rounded"
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          exit={{ opacity: 0, scaleX: 0 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </AnimatePresence>
                  </>
                )}
              </NavLink>
            ))}
            <a href="tel:(815) 505-2509" className="flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-3 py-1.5 rounded-full hover:brightness-110 transition">
              <Phone size={16} /> (815) 505-2509
            </a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen(true)}>
            <Menu />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black/90 backdrop-blur p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex justify-between items-center">
              <p className="text-white font-bold">MAS Mail & Print Center</p>
              <button className="text-white" onClick={() => setOpen(false)}><X /></button>
            </div>
            <div className="mt-8 space-y-4">
              {navItems.map((item, i) => (
                <motion.div key={item.to} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                  <NavLink onClick={() => setOpen(false)} to={item.to} className={({ isActive }) => `block text-lg ${isActive ? 'text-[#D4AF37]' : 'text-white'}`}>
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <a href="tel:(815) 505-2509" className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-4 py-2 rounded-full">
                <Phone size={18} /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
