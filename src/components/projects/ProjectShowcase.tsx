'use client'

import { useState, useMemo } from 'react'
import { Project } from '@/types'
import { projects as hardcodedProjects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'
import { Search, Filter, Zap, Trophy, Brain, Code, Globe } from 'lucide-react'

export function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const projectTypes = useMemo(() => {
    const types = new Set<string>()
    hardcodedProjects.forEach(p => types.add(p.projectType))
    return ['all', ...Array.from(types)].map(type => {
      const typeConfig = {
        'all': { label: 'All Projects', icon: Filter, color: 'from-blue-500 to-purple-500' },
        'hackathon-winner': { label: 'Hackathon Winners', icon: Trophy, color: 'from-yellow-500 to-orange-500' },
        'machine-learning': { label: 'Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
        'computer-vision': { label: 'Computer Vision', icon: Zap, color: 'from-blue-500 to-cyan-500' },
        'web-development': { label: 'Web Development', icon: Code, color: 'from-green-500 to-emerald-500' }
      }
      
      return {
        value: type,
        ...typeConfig[type as keyof typeof typeConfig] || { label: type, icon: Globe, color: 'from-gray-500 to-gray-600' }
      }
    })
  }, [])

  const filteredProjects = useMemo(() => {
    let filtered = hardcodedProjects

    if (activeFilter !== 'all') {
      filtered = filtered.filter(p => p.projectType === activeFilter)
    }

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (typeof p.description === 'string' && p.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }
    return filtered
  }, [activeFilter, searchTerm])

  const stats = useMemo(() => {
    const totalProjects = hardcodedProjects.length
    const hackathonWins = hardcodedProjects.filter(p => p.isHackathon).length
    const mlProjects = hardcodedProjects.filter(p => 
      p.projectType === 'machine-learning' || p.projectType === 'computer-vision'
    ).length
    const webProjects = hardcodedProjects.filter(p => p.projectType === 'web-development').length

    return { totalProjects, hackathonWins, mlProjects, webProjects }
  }, [])

  return (
    <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
            My <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Creations</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Revolutionary projects that showcase the power of AI, Machine Learning, and cutting-edge web technologies
          </p>
        </div>

        {/* Project Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-blue-400 mb-2">{stats.totalProjects}</div>
            <div className="text-sm text-gray-300 font-medium">Total Projects</div>
          </div>
          
          <div className="p-8 rounded-3xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 backdrop-blur-sm text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-yellow-400 mb-2">{stats.hackathonWins}</div>
            <div className="text-sm text-gray-300 font-medium">Hackathon Wins</div>
          </div>
          
          <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-400 mb-2">{stats.mlProjects}</div>
            <div className="text-sm text-gray-300 font-medium">ML/AI Projects</div>
          </div>
          
          <div className="p-8 rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-green-400 mb-2">{stats.webProjects}</div>
            <div className="text-sm text-gray-300 font-medium">Web Projects</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-16">
          {/* Search Bar */}
          <div className="relative mb-8 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search projects by title, technology, or tags..."
                className="w-full px-14 py-5 rounded-2xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {projectTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setActiveFilter(type.value)}
                className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-3 cursor-pointer ${
                  activeFilter === type.value
                    ? `bg-gradient-to-r ${type.color} text-white shadow-xl scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20 backdrop-blur-sm hover:scale-105'
                }`}
              >
                <type.icon className="w-5 h-5" />
                <span>{type.label}</span>
                {type.value !== 'all' && (
                  <span className="ml-2 px-2 py-1 text-xs bg-white/20 rounded-full">
                    {hardcodedProjects.filter(p => p.projectType === type.value).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project._id}
                project={project}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="space-y-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                <Search className="w-16 h-16 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-300">No projects found</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Try adjusting your search term or filter to discover amazing projects!
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setActiveFilter('all')
                }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Show All Projects
              </button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Want to collaborate?</h3>
            <p className="text-gray-300 mb-6">
              I&apos;m always excited to work on innovative projects that push the boundaries of technology!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:aryansbudukh@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-600 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Let&apos;s Connect
              </a>
              <a
                href="https://github.com/SKULLFIRE07"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}