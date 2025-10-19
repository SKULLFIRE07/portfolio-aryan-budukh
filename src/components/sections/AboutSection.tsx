'use client'

import { motion } from 'framer-motion'
import { Award, GraduationCap, Trophy, Brain, Zap, Code } from 'lucide-react'

const achievements = [
  {
    icon: Award,
    title: 'AI/ML Fusion National Hackathon Winner',
    description: 'Won 10K cash prize, trip to Malvan, and Reliance goodies',
    highlight: true,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Trophy,
    title: 'Best Project Award',
    description: 'Vishwakarma University for Forest Fire Detection System',
    highlight: false,
    color: 'from-blue-400 to-purple-500'
  },
  {
    icon: GraduationCap,
    title: 'Student Athlete',
    description: 'Balancing academics with athletic excellence - SGPA: 9.1',
    highlight: false,
    color: 'from-green-400 to-cyan-500'
  }
]

const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'JavaScript', 'C++', 'SQL', 'Bash Scripting'],
    icon: Code,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Machine Learning & AI',
    items: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'EfficientNet', 'Transfer Learning'],
    icon: Brain,
    color: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Computer Vision',
    items: ['OpenCV', 'Mediapipe', 'ORB', 'SIFT', 'HOG', 'Facial Action Coding Systems'],
    icon: Zap,
    color: 'from-green-500 to-emerald-500'
  },
  {
    category: 'Web Development',
    items: ['Flask', 'FastAPI', 'Next.js', 'React', 'REST APIs', 'Docker'],
    icon: Code,
    color: 'from-orange-500 to-red-500'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
            About <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate Computer Science student and hackathon winner, bringing innovative AI solutions to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-8">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p className="text-xl">
                Hey there! I&apos;m <span className="text-blue-400 font-semibold">Aryan Budukh</span>, a Computer Science student 
                who&apos;s absolutely <span className="text-purple-400 font-semibold">obsessed</span> with pushing the boundaries of 
                Machine Learning and Computer Vision.
              </p>
              
              <p>
                When I&apos;m not coding up a storm or training neural networks, you&apos;ll find me on the field as a 
                <span className="text-green-400 font-semibold"> student athlete</span>, proving that you can excel 
                both in academics and sports with an impressive <span className="text-yellow-400 font-bold">SGPA of 9.1</span>.
              </p>

              <p>
                My biggest achievement? Winning the <span className="text-yellow-400 font-bold">AI/ML Fusion National Hackathon</span> 
                with a massive <span className="text-green-400 font-bold">10K cash prize</span>! 
                That experience taught me the power of teamwork and innovation.
              </p>

              <p>
                I&apos;m driven by the endless possibilities of AI and love building solutions that make a real difference 
                in people&apos;s lives. From fault prediction systems to mental health assessment tools, 
                every project is a new adventure!
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
                Major Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                      achievement.highlight 
                        ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30' 
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} bg-opacity-20`}>
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                        <p className="text-gray-400">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Brain className="w-8 h-8 text-purple-400 mr-3" />
              Technical Skills
            </h3>
            
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-20 mr-4`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">{skill.category}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {skill.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className={`px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r ${skill.color} bg-opacity-20 text-white border border-white/20 hover:bg-opacity-30 transition-all duration-300 cursor-default`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Fun Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
                <div className="text-sm text-gray-400">Hackathon Prize</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30">
                <div className="text-3xl font-bold text-green-400 mb-2">9.1</div>
                <div className="text-sm text-gray-400">SGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}