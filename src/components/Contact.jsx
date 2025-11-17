import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'

export default function Contact(){
  return (
    <div className="bg-black text-white">
      <section className="pt-24 pb-8 max-w-6xl mx-auto px-6">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-4xl font-extrabold">Contact Us</motion.h1>
        <p className="mt-2 text-white/80">Wed love to help. Reach out or stop by.</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 pb-16">
        <div className="space-y-4">
          <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=5970%20E%20State%20St,%20Rockford,%20IL%2061108&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="space-y-2 text-white/80">
            <p className="flex items-center gap-2"><MapPin size={18} className="text-[#D4AF37]"/>5970 E State St, Rockford, IL 61108</p>
            <a href="tel:(815) 505-2509" className="flex items-center gap-2 hover:text-[#D4AF37]"><Phone size={18} className="text-[#D4AF37]"/>(815) 505-2509</a>
            <a href="mailto:info@masmailprint.com" className="flex items-center gap-2 hover:text-[#D4AF37]"><Mail size={18} className="text-[#D4AF37]"/>info@masmailprint.com</a>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="hover:text-[#D4AF37]"><Facebook/></a>
              <a href="#" className="hover:text-[#D4AF37]"><Instagram/></a>
            </div>
          </div>
        </div>

        <form className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="relative">
              <input placeholder=" " className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#D4AF37]"/>
              <span className="pointer-events-none absolute -top-2 left-3 text-xs bg-black px-1 text-white/60">First Name</span>
            </div>
            <div className="relative">
              <input placeholder=" " className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#D4AF37]"/>
              <span className="pointer-events-none absolute -top-2 left-3 text-xs bg-black px-1 text-white/60">Last Name</span>
            </div>
          </div>
          <div className="relative">
            <input placeholder=" " className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#D4AF37]"/>
            <span className="pointer-events-none absolute -top-2 left-3 text-xs bg-black px-1 text-white/60">Email</span>
          </div>
          <div className="relative">
            <textarea rows={4} placeholder=" " className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#D4AF37]"/>
            <span className="pointer-events-none absolute -top-2 left-3 text-xs bg-black px-1 text-white/60">Message</span>
          </div>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-black font-semibold px-5 py-3 rounded-lg w-full">Send Message</motion.button>
        </form>
      </section>
    </div>
  )
}
