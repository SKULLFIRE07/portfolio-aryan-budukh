'use client'

import { Calendar, MapPin, Building2, Code, Brain, Zap, Award, ArrowRight } from 'lucide-react'

const experiences = [
  {
    company: 'Google Developers Group',
    role: 'Core Technical Member (AI/ML Lead)',
    type: 'Remote',
    location: 'Pune, Maharashtra, India',
    duration: 'September 2025 – Present',
    status: 'Active',
    color: 'from-red-500 to-yellow-500',
    icon: Code,
    description: [
      'Leading AI/ML initiatives including workshops, hackathons, and community sessions focused on Artificial Intelligence and Machine Learning.',
      'Building a strong developer community by fostering collaboration and creating opportunities for learning and innovation.',
      'Bridging the gap between technology and real-world problem solving by guiding developers and enthusiasts in exploring the latest AI/ML tools and practices.'
    ],
    technologies: ['AI/ML Leadership', 'Community Building', 'Workshops', 'Hackathons', 'Developer Relations', 'Innovation']
  },
  {
    company: 'Reinvent Design Technologies',
    role: 'Intern',
    type: 'On-Site',
    location: 'Pune',
    duration: 'July 2024 – October 2024',
    status: 'Completed',
    color: 'from-blue-500 to-purple-500',
    icon: Building2,
    description: [
      'Developed a Flask-based application leveraging Google APIs (Slides, Drive) and OAuth 2.0 for automated Google Slides updates with dynamic image replacement and Google Sheets integration.',
      'Integrated ML libraries like Pandas for efficient CSV data processing and implemented error-handling mechanisms for robust operations.',
      'Worked with IES VE (Integrated Virtual Environment) for simulation-based building performance analysis.'
    ],
    technologies: ['Flask', 'Google APIs', 'OAuth 2.0', 'Pandas', 'Python', 'IES VE']
  },
  {
    company: 'Binghamton University x VU',
    role: 'Project Intern',
    type: 'On-Site',
    location: 'Pune',
    duration: 'August 2024 – December 2024',
    status: 'Completed',
    color: 'from-green-500 to-emerald-500',
    icon: Brain,
    description: [
      'Conducted dataset preparation, including sorting, annotation, and validation for MENDELEY research repository.',
      'Developed and trained deep learning models for disease detection in pea plants using convolutional neural networks for high-accuracy predictions.'
    ],
    technologies: ['Deep Learning', 'CNN', 'Dataset Preparation', 'Research', 'Plant Disease Detection']
  },
  {
    company: 'iNeuron.AI',
    role: 'Machine Learning Project Intern',
    type: 'Online',
    location: 'Remote',
    duration: 'June 2024 – January 2025',
    status: 'Active',
    color: 'from-purple-500 to-pink-500',
    icon: Code,
    description: [
      'Built a deep learning model for human activity recognition capable of identifying 100+ behaviors with applications in industrial productivity and security monitoring.',
      'Developed an integrated portal for real-time activity tracking, enhancing operational efficiency and mitigating unauthorized activities.'
    ],
    technologies: ['Deep Learning', 'Activity Recognition', 'Real-time Systems', 'Industrial AI', 'Security Monitoring']
  }
]

const achievements = [
  {
    title: 'AI/ML Fusion National Hackathon Winner',
    description: 'Won 10K cash prize, trip to Malvan, and Reliance goodies',
    icon: Award,
    color: 'from-yellow-500 to-orange-500',
    highlight: true
  },
  {
    title: 'Best Project Award',
    description: 'Vishwakarma University for Forest Fire Detection System',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Student Athlete Excellence',
    description: 'Maintaining 9.1 SGPA while excelling in athletics',
    icon: Award,
    color: 'from-green-500 to-emerald-500'
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
            My <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            From internships to hackathon victories - every experience has shaped me into the developer I am today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <div>
              <h3 className="text-3xl font-bold text-white mb-12 flex items-center">
                <Calendar className="w-8 h-8 text-blue-400 mr-3" />
                Professional Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="group relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50"></div>
                    
                    {/* Timeline dot */}
                    <div className={`absolute left-6 top-2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-black`}></div>
                    
                    <div className="ml-20">
                      <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} bg-opacity-20`}>
                              <exp.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                {exp.role}
                              </h4>
                              <p className="text-lg font-semibold text-gray-300">{exp.company}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-col lg:items-end space-y-2">
                            <div className="flex items-center space-x-2 text-sm text-gray-400">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                              <span>•</span>
                              <span>{exp.type}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-blue-400">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className={`px-3 py-1 text-xs font-bold rounded-full ${
                              exp.status === 'Active' 
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            }`}>
                              {exp.status}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <ul className="space-y-3 mb-6">
                          {exp.description.map((desc, descIndex) => (
                            <li
                              key={descIndex}
                              className="text-gray-300 leading-relaxed flex items-start"
                            >
                              <ArrowRight className="w-4 h-4 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                              {desc}
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Achievements & Skills */}
          <div className="space-y-8">
            {/* Key Achievements */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 text-yellow-400 mr-3" />
                Key Achievements
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl bg-gradient-to-br ${achievement.color} bg-opacity-20 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 ${
                      achievement.highlight ? 'ring-2 ring-yellow-500/50' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${achievement.color} bg-opacity-30`}>
                        <achievement.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-gray-300">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-6 h-6 text-purple-400 mr-3" />
                Quick Stats
              </h3>
              
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-blue-400 mb-2">4+</div>
                  <div className="text-sm text-gray-300">Professional Roles</div>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-green-400 mb-2">10K+</div>
                  <div className="text-sm text-gray-300">Hackathon Prize</div>
                </div>
                
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-purple-400 mb-2">9.1</div>
                  <div className="text-sm text-gray-300">Current SGPA</div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500/20 to-yellow-500/20 border border-red-500/30 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-red-400 mb-2">GDG</div>
                  <div className="text-sm text-gray-300">AI/ML Lead</div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-white mb-4">Let&apos;s Work Together!</h4>
              <p className="text-sm text-gray-300 mb-6">
                I&apos;m always excited to take on new challenges and create amazing solutions.
              </p>
              <a
                href="mailto:aryansbudukh@gmail.com"
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl text-center hover:from-blue-600 hover:to-purple-600 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}