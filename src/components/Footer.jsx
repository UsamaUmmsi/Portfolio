import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/UsamaUmmsi', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/usama-khan-131b93384', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/ummsikhan', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/ummsi_usamakhan', label: 'Instagram' },
    { icon: Mail, href: 'mailto:ummsikhan@gmail.com', label: 'Email' },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900/50 relative py-12 mt-20 before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-indigo-500 before:to-transparent"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent font-display hover:scale-105 transition-transform cursor-pointer"
            >
              Let's Find Us
            </Link>
          </motion.div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full glass hover:bg-white/5 transition-colors"
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="w-5 h-5 text-gray-100 hover:text-purple-400 transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-sm text-center"
          >
            © {new Date().getFullYear()} Let's Find Us. All rights reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

