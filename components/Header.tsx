import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Nexus</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Services
            </a>
            <a href="#team" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Team
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="gradient-bg text-white px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </nav>
          
          <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}