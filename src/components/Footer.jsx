export default function Footer(){
  return (
    <footer className="bg-black text-white py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
        <div>
          <p className="text-[#D4AF37] font-bold">MAS Mail & Print Center</p>
          <p className="text-white/70 mt-2">5970 E State St, Rockford, IL 61108</p>
          <a href="tel:(815) 505-2509" className="text-white/90 hover:text-[#D4AF37]">(815) 505-2509</a>
        </div>
        <div className="text-white/70 text-sm">© {new Date().getFullYear()} MAS Mail & Print Center. All rights reserved.</div>
        <div className="text-sm text-white/60">Open Mon–Sat • Closed Sun</div>
      </div>
    </footer>
  )
}
