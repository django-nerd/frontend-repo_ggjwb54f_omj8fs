import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }){
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  )
}
