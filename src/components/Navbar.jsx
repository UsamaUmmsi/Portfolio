import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Eye, EyeOff } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      {/* Toggle Button - Always visible when navbar is hidden */}
      {!isNavbarVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 right-4 z-[60] flex items-center gap-2 p-3 glass-dark rounded-full shadow-2xl backdrop-blur-xl border border-white/20"
        >
          <span className="text-xs text-white font-medium">NAV</span>
          <button
            onClick={() => setIsNavbarVisible(true)}
            className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none bg-gradient-to-r from-gray-600 to-gray-700"
            aria-label="Show navbar"
          >
            <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
          </button>
          <span className="text-xs text-white font-medium">OFF</span>
        </motion.div>
      )}

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ 
          y: isNavbarVisible ? 0 : -100,
          opacity: isNavbarVisible ? 1 : 0
        }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}
      >
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
        isScrolled 
          ? 'max-w-4xl' 
          : ''
      }`}>
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled 
            ? 'glass-dark rounded-full px-6 py-3 shadow-2xl backdrop-blur-xl border border-white/20' 
            : 'bg-transparent'
        }`}>
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent font-display">
            Ummsi....!
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center transition-all duration-500 ${
            isScrolled ? 'space-x-2' : 'space-x-8'
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span className={`text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                } ${
                  isScrolled ? 'px-4 py-2 rounded-full' : ''
                }`}>
                  {link.name}
                </span>
                <motion.span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300 ${
                    isScrolled ? 'left-4 right-4' : 'left-0 right-0'
                  }`}
                  initial={false}
                  animate={{ 
                    width: location.pathname === link.path ? (isScrolled ? 'calc(100% - 2rem)' : '100%') : '0%',
                    left: isScrolled ? '1rem' : '0'
                  }}
                />
              </Link>
            ))}
          </div>

          {/* Navbar Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Navbar Toggle Switch - Inside navbar */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-white font-medium hidden sm:block">NAV</span>
              <button
                onClick={() => setIsNavbarVisible(false)}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"
                aria-label="Hide navbar"
              >
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
              <span className="text-xs text-white font-medium hidden sm:block">ON</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-all duration-300 ${
                isScrolled 
                  ? 'rounded-full bg-white/10 hover:bg-white/20 border border-white/20' 
                  : 'rounded-lg glass hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        <motion.div
          initial={false}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            visibility: isMobileMenuOpen ? 'visible' : 'hidden',
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-lg"
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="flex flex-col items-center justify-center min-h-screen space-y-8 px-5">
            {/* Rotating Ummsi Circle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20 
              }}
              transition={{ delay: 0, duration: 0.3 }}
              className="mb-4"
            >
              <div className="relative w-32 h-32">
                <motion.div
                  className="w-full h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 p-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="w-full h-full rounded-full bg-gray-800 p-2">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 flex items-center justify-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Ummsi</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  y: isMobileMenuOpen ? 0 : 20 
                }}
                transition={{ delay: (index + 1) * 0.1, duration: 0.3 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl font-bold transition-colors block text-center ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent'
                      : 'text-white hover:bg-gradient-to-r hover:from-indigo-400 hover:via-purple-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            {/* Close button at bottom */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20 
              }}
              transition={{ delay: (navLinks.length + 1) * 0.1, duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 p-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
    </>
  )
}

export default Navbar

