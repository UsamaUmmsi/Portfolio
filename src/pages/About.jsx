import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Code, Smartphone, Database, Cloud, Award, Calendar } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const skillsRef = useRef(null)

  useEffect(() => {
    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress-bar')
    
    progressBars.forEach((bar) => {
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: bar.dataset.width,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  const skills = [
    { name: 'React', level: 90, icon: Code },
    { name: 'JavaScript', level: 75, icon: Code },
    { name: 'TypeScript', level: 80, icon: Code },
    { name: 'Node.js', level: 50, icon: Database },
    { name: 'React Native', level: 50, icon: Smartphone },
    { name: 'Flutter', level: 30, icon: Smartphone },
    { name: 'MongoDB', level: 30, icon: Database },
    { name: 'AWS', level: 20, icon: Cloud },
  ]

  const experiences = [
    {
      year: '2024 - Present',
      title: 'Frontend Developer',
      company: 'Digital Gravity',
      description: 'Leading development of web applications using HTML, CSS, JavaScript, Reactjs, Wordpress , elementor,and cloud technologies.',
      icon: Award,
    },
    {
      year: '2022 - 2023',
      title: 'Frontend Developer',
      company: 'Service Now (Freelance)',
      description: 'Developed scalable web applications and RESTful APIs. Collaborated with cross-functional teams.',
      icon: Code,
    },
    {
      year: '2016 - 2022',
      title: 'Phone Banking Specialist',
      company: 'Silk Bank and Mobilink',
      description: 'Delivered efficient phone banking support and solutions, enhancing customer experience and streamlining banking operations. Collaborated on cross-functional projects to improve service quality and client satisfaction.',
      icon: Smartphone,
    },
  ]

  const tools = [
    'HTML','CSS','JavaScript','React', 'Next.js', 'Vue.js', 'Angular', 'React Native', 'Flutter',
    'Node.js', 'Express', 'Python', 'Django', 'MongoDB', 'PostgreSQL',
    'AWS', 'Docker', 'Git', 'Figma', 'Adobe XD', 'Jira'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div ref={sectionRef} className="min-h-screen pt-24 pb-8 sm:pb-12 md:pb-20">
      <div className="container mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-display">
            <span className="text-gradient">About</span> Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer crafting digital experiences
          </p>
        </motion.div>

        {/* About Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          {/* Photo & Description */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="relative w-64 h-64 mx-auto md:mx-0">
              <motion.div
                className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full bg-gray-800 p-2">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center">
                    <div className="text-6xl font-bold text-gradient">Ummsi</div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="glass rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                I'm <span className="text-blue-400 font-semibold">Usama Khan</span>, a passionate Web and App Developer 
                with a love for creating beautiful, functional, and user-friendly applications. With expertise
                in modern web technologies and mobile development, I bring ideas to
                life through clean code and innovative solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                When I'm not coding, I enjoy exploring new technologies, contributing
                to open-source projects, and sharing knowledge with the developer community. 
                My goal is to create digital experiences that make a difference.
              </p>
            </div>
          </motion.div>

          {/* Skills Progress */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <skill.icon className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="progress-bar h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    data-width={`${skill.level}%`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-12 text-center">Experience</h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2" />
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-4 sm:pr-8 text-right' : 'pl-4 sm:pl-8'}`}>
                    <div className={`glass rounded-xl p-4 sm:p-6 max-w-xs sm:max-w-sm md:max-w-md ${index % 2 === 0 ? 'ml-auto mr-0' : 'mr-auto ml-0'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <exp.icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                        <span className="text-xs sm:text-sm text-purple-400 font-medium">{exp.year}</span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{exp.title}</h4>
                      <p className="text-blue-400 mb-1 sm:mb-2 text-sm">{exp.company}</p>
                      <p className="text-gray-400 text-xs sm:text-sm leading-tight text-left">{exp.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Tools & Technologies</h3>
          <div className="glass rounded-xl p-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {tools.map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg text-sm font-medium cursor-pointer text-gray-300 bg-gray-800/50 border border-gray-600/50 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-200"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

