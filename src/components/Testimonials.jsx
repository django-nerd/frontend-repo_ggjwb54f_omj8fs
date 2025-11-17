import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: 'Friendly, fast, and super professional. My flyers looked amazing and they shipped my packages in minutes!',
    name: 'Jessica M.',
  },
  {
    quote: 'Best local print shop. Great prices and the notary service saved my day.',
    name: 'Andre M.',
  },
  {
    quote: 'Mailbox rental with real street address is perfect for my small business.',
    name: 'Lena K.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-b from-black to-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-6">What Customers Say</h3>
        <div className="relative h-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-white/90"
            >
              “{testimonials[index].quote}”
              <div className="mt-3 text-[#D4AF37] font-semibold">— {testimonials[index].name}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
