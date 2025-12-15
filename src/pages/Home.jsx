import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, Code, Smartphone, Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import gsap from 'gsap'
import Hero3D from '../components/Hero3D'

const Home = () => {
  const heroRef = useRef(null)

  const socialLinks = [
    { icon: Github, href: 'https://github.com/UsamaUmmsi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/usama-khan-131b93384', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/ummsi_usamakhan', label: 'Instagram' },
  ]

  useEffect(() => {
    // Simple floating animation for scroll indicator
    const scrollElement = document.querySelector('.scroll-indicator')
    if (scrollElement) {
      gsap.to(scrollElement, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
          <Hero3D />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(147,51,234,0.3),transparent_50%)] z-10" />

        {/* Hero Content */}
        <div className="relative z-30 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8" style={{ zIndex: 30 }}>
          <div className="hero-panel px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
              
              {/* Left Side - Picture */}
              <div className="flex justify-center lg:justify-start order-1 lg:order-none">
                <div className="relative">
                  <div className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full shadow-2xl glass-avatar overflow-hidden">
                    <img 
                      src="/219251270.jpg" 
                      alt="Usama Khan - Frontend & Mobile App Developer"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                  
                  {/* Floating Tech Icons */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 p-3 bg-blue-500/20 backdrop-blur-md rounded-full border border-blue-400/30"
                  >
                    <Code className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-4 -left-4 p-3 bg-purple-500/20 backdrop-blur-md rounded-full border border-purple-400/30"
                  >
                    <Smartphone className="w-6 h-6 text-purple-400" />
                  </motion.div>
                </div>
              </div>

              {/* Right Side - Text Content */}
              <div className="text-center lg:text-left order-2 lg:order-none">
                {/* Name */}
                <div
                  className="hero-name text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4"
                  style={{ 
                    textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
                    opacity: 1,
                    visibility: 'visible'
                  }}
                >
                  <span className="text-white">Hi, I'm</span> <span className="text-indigo-500 font-bold" style={{ filter: 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.8))' }}>Usama Khan</span>
                  <p className='text-xs xs:text-sm sm:text-base font-extralight text-center lg:text-left mt-4 sm:mt-6 text-zinc-300 px-2 sm:px-0' style={{ color: '#d4d4d8 !important', opacity: 1, visibility: 'visible' }}>
                    I am a Frontend and Mobile App Developer, creating responsive and visually stunning digital experiences. I turn designs into functional websites and apps using modern technologies like HTML, CSS, JavaScript, React, and Flutter. My goal is to deliver seamless, efficient, and high-quality solutions for every user.
                  </p>
                </div>

                {/* Job Titles */}
                <div
                  className="hero-subtitle flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6"
                  style={{ 
                    color: '#ffffff !important',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                    opacity: 1,
                    visibility: 'visible'
                  }}
                >
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                  <span className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-100 font-medium" style={{ color: '#f3f4f6 !important' }}>
                    Web Developer
                  </span>
                  <span className="text-gray-400 hidden xs:inline" style={{ color: '#9ca3af !important' }}>•</span>
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-300" />
                  <span className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-100 font-medium" style={{ color: '#f3f4f6 !important' }}>
                    App Developer
                  </span>
                </div>

                {/* CTA Buttons - Inside hero panel, left aligned */}
                <motion.div 
                  className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center lg:items-start mt-6 sm:mt-8 relative" 
                  style={{ zIndex: 10000, position: 'relative' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <Link to="/projects" className="block w-full sm:w-auto">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg font-semibold text-white shadow-2xl hover:shadow-indigo-500/50 transition-all cursor-pointer text-center text-sm sm:text-base"
                      style={{ 
                        color: '#ffffff !important',
                        fontWeight: '600',
                        zIndex: 10000,
                        pointerEvents: 'auto',
                        position: 'relative',
                        display: 'block'
                      }}
                    >
                      View Projects
                    </motion.div>
                  </Link>

                  {/* Arrow between buttons */}
                  <div
                    className="scroll-indicator flex justify-center items-center z-30 sm:block hidden"
                    style={{ opacity: 1, visibility: 'visible' }}
                  >
                    <ChevronDown className="w-6 h-6 text-white animate-bounce drop-shadow-lg" />
                  </div>

                  <Link to="/contact" className="block w-full sm:w-auto">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-900/80 backdrop-blur-md border-2 border-white/30 rounded-lg font-semibold text-white shadow-2xl hover:bg-gray-800/90 hover:border-white/50 transition-all cursor-pointer text-center text-sm sm:text-base"
                      style={{ 
                        color: '#ffffff !important',
                        fontWeight: '600',
                        zIndex: 10000,
                        pointerEvents: 'auto',
                        position: 'relative',
                        display: 'block'
                      }}
                    >
                      Contact Me
                    </motion.div>
                  </Link>
                </motion.div>


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Divider Line */}
      <div className="relative flex justify-center py-6 sm:py-8 md:py-12">
        <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>

      {/* About Me Section */}
      <div className="relative py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-panel px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              
              {/* Left Side - Content */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center lg:text-left"
                  style={{ opacity: 1, visibility: 'visible' }}
                >
                  <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">LET ME</span> <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">INTRODUCE MYSELF</span>
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-3 sm:space-y-4 text-gray-300"
                  style={{ opacity: 1, visibility: 'visible' }}
                >
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left" style={{ color: '#d4d4d8 !important' }}>
                    I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                  </p>
                  
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left" style={{ color: '#d4d4d8 !important' }}>
                    I am fluent in classics like <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent font-semibold">Javascript</span>, <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent font-semibold">ReactJs</span> and <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent font-semibold">React Native</span>.
                  </p>
                  
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left" style={{ color: '#d4d4d8 !important' }}>
                    My field of Interest's are building new <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent font-semibold">Web Technologies and Products</span> and also in areas related to <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent font-semibold">Deep Learning</span> and <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent font-semibold">Natural Language Processing</span>.
                  </p>
                  
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left" style={{ color: '#d4d4d8 !important' }}>
                    Whenever possible, I also apply my passion for developing products with Modern Javascript Library and Frameworks like <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent font-semibold">React.js</span>
                  </p>
                </motion.div>
              </div>

              {/* Right Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center lg:justify-end order-1 lg:order-none"
              >
                <div className="relative">
                  <div className="w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl glass-avatar">
                    <img 
                      src="/develpper.png" 
                      alt="Usama Khan - Developer"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                  
                  {/* Floating Tech Icons */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 p-3 bg-blue-500/20 backdrop-blur-md rounded-full border border-blue-400/30"
                  >
                    <Code className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-4 -left-4 p-3 bg-purple-500/20 backdrop-blur-md rounded-full border border-purple-400/30"
                  >
                    <Smartphone className="w-6 h-6 text-purple-400" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>




      </div>
    </>
  )
}

export default Home