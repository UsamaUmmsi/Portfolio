import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, Code, Smartphone } from 'lucide-react'
import gsap from 'gsap'
import Hero3D from '../components/Hero3D'

const Home = () => {
  const heroRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    // GSAP animations for hero section
    const tl = gsap.timeline()
    
    tl.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    })
    .from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5')
    .from('.hero-description', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5')
    .from('.hero-buttons', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5')
    .from('.scroll-indicator', {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.3')

    // Floating animation for scroll indicator
    gsap.to('.scroll-indicator', {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })
  }, [])

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Hero3D />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-900 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ zIndex: 30 }}>
        <div className="hero-panel px-6 sm:px-10 py-10 sm:py-12 mx-auto max-w-4xl">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Name */}
          <motion.div
            className="hero-name text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ 
              color: '#ffffff',
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)'
            }}
          >
            Hi, I'm <span className="text-purple-600" style={{ filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.8))' }}>Usama Khan</span>
          </motion.div>

          {/* Job Titles */}
          <motion.div
            className="hero-subtitle flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ 
              color: '#ffffff',
              textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
            }}
          >
            <Code className="w-5 h-5 text-blue-300" />
            <span className="text-lg sm:text-xl text-gray-100 font-medium">
              Web Developer
            </span>
            <span className="text-gray-400">•</span>
            <Smartphone className="w-5 h-5 text-indigo-300" />
            <span className="text-lg sm:text-xl text-gray-100 font-medium">
              App Developer
            </span>
          </motion.div>


          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center relative z-50">
            <Link to="/projects" className="relative z-50">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg font-semibold text-white shadow-2xl hover:shadow-indigo-500/50 transition-all relative z-50"
                style={{ 
                  color: '#ffffff',
                  fontWeight: '600'
                }}
              >
                View Projects
              </motion.button>
            </Link>
            <Link to="/contact" className="relative z-50">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-900/80 backdrop-blur-md border-2 border-white/30 rounded-lg font-semibold text-white shadow-2xl hover:bg-gray-800/90 hover:border-white/50 transition-all relative z-50"
                style={{ 
                  color: '#ffffff',
                  fontWeight: '600'
                }}
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <ChevronDown className="w-6 h-6 text-white animate-bounce drop-shadow-lg" />
        </motion.div>
      </div>
    </div>
  )
}

export default Home

