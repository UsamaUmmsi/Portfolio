import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, User, Clock, Trash2 } from 'lucide-react'

const ContactSubmissions = () => {
  const [submissions, setSubmissions] = useState([])

  useEffect(() => {
    const loadSubmissions = () => {
      const stored = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
      setSubmissions(stored.reverse()) // Show newest first
    }
    
    loadSubmissions()
    
    // Refresh every 5 seconds to check for new submissions
    const interval = setInterval(loadSubmissions, 5000)
    return () => clearInterval(interval)
  }, [])

  const deleteSubmission = (id) => {
    const updated = submissions.filter(sub => sub.id !== id)
    setSubmissions(updated)
    localStorage.setItem('contactSubmissions', JSON.stringify(updated.reverse()))
  }

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString()
  }

  if (submissions.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Submissions</h2>
            <p className="text-gray-400">No submissions yet.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Submissions</h2>
          <p className="text-gray-400">Total submissions: {submissions.length}</p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {submissions.map((submission, index) => (
            <motion.div
              key={submission.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <User className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{submission.name}</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Mail className="w-4 h-4" />
                      {submission.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    {formatDate(submission.timestamp)}
                  </div>
                  <button
                    onClick={() => deleteSubmission(submission.id)}
                    className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-800/30 rounded-lg p-4">
                <p className="text-gray-300 whitespace-pre-wrap">{submission.message}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactSubmissions