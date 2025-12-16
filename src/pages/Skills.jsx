import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import {
  Code, Smartphone, Database, Cloud, Palette, Settings
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const sectionRef = useRef(null)

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'Next.js', level: 85, icon: '▲' },
        { name: 'Vue.js', level: 80, icon: '🟢' },
        { name: 'JavaScript', level: 75, icon: '🟨' },
        { name: 'TypeScript', level: 88, icon: '📘' },
        { name: 'TailwindCSS', level: 92, icon: '🎨' },
      ],
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Node.js', level: 50, icon: '🟢' },
        { name: 'Express', level: 85, icon: '🚂' },
        { name: 'Python', level: 30, icon: '🐍' },
        { name: 'Django', level: 30, icon: '🎸' },
        { name: 'REST APIs', level: 90, icon: '🔌' },
        { name: 'GraphQL', level: 50, icon: '📊' },
      ],
    },
    {
      title: 'App Development',
      icon: Smartphone,
      color: 'from-purple-500 to-indigo-500',
      skills: [
        { name: 'React Native', level: 50, icon: '📱' },
        { name: 'Flutter', level: 30, icon: '🦋' },
        { name: 'iOS Development', level: 50, icon: '🍎' },
        { name: 'Android Development', level: 75, icon: '🤖' },
        { name: 'Expo', level: 82, icon: '⚡' },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: Settings,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Git', level: 90, icon: '🔀' },
        { name: 'Docker', level: 80, icon: '🐳' },
        { name: 'AWS', level: 75, icon: '☁️' },
        { name: 'CI/CD', level: 78, icon: '🔄' },
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'PostgreSQL', level: 82, icon: '🐘' },
      ],
    },
  ]

  useEffect(() => {
    // Animate skill levels on scroll
    const skillBars = document.querySelectorAll('.skill-bar')
    
    skillBars.forEach((bar) => {
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: bar.dataset.width,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div ref={sectionRef} className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-display">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing applications
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="glass rounded-xl p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`skill-bar h-full bg-gradient-to-r ${category.color} rounded-full`}
                        data-width={`${skill.level}%`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Additional Technologies</h3>
          <div className="glass rounded-xl p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'HTML5', 'CSS3', 'SASS', 'Bootstrap', 'Material-UI', 'Chakra UI',
                'Redux', 'Zustand', 'React Query', 'Apollo', 'Jest', 'Cypress',
                'Webpack', 'Vite', 'ESLint', 'Prettier', 'Figma', 'Adobe XD',
                'Firebase', 'Supabase', 'Vercel', 'Netlify', 'Jira', 'Trello'
              ].map((tech, index) => (
                <motion.div
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
                  className="p-4 rounded-lg text-center cursor-pointer text-gray-300 bg-gray-800/50 border border-gray-600/50 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-200"
                >
                  <span className="text-sm font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills

