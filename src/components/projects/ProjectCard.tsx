'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Award, Zap, Brain, Code, Globe, Trophy, Star } from 'lucide-react'
import Image from 'next/image'
import { Project } from '@/types'
import { urlFor } from '@/lib/sanity'
import { useAppStore } from '@/lib/store'

interface ProjectCardProps {
  project: Project
  index: number
}

const getProjectIcon = (type: string) => {
  switch (type) {
    case 'hackathon-winner':
      return <Trophy className="w-5 h-5 text-yellow-400" />
    case 'machine-learning':
      return <Brain className="w-5 h-5 text-purple-400" />
    case 'computer-vision':
      return <Zap className="w-5 h-5 text-blue-400" />
    case 'web-development':
      return <Globe className="w-5 h-5 text-green-400" />
    default:
      return <Code className="w-5 h-5 text-gray-400" />
  }
}

const getProjectGradient = (type: string) => {
  switch (type) {
    case 'hackathon-winner':
      return 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
    case 'machine-learning':
      return 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
    case 'computer-vision':
      return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
    case 'web-development':
      return 'from-green-500/20 to-emerald-500/20 border-green-500/30'
    default:
      return 'from-gray-500/20 to-slate-500/20 border-gray-500/30'
  }
}

// Robust image component that handles loading errors gracefully
function ProjectImage({ src, title, projectType }: { src: string | null, title: string, projectType: string }) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // If no src or error occurred, show fallback
  if (!src || imageError) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center">
        <motion.div 
          className="text-center text-gray-400"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            {getProjectIcon(projectType)}
          </div>
          <p className="text-sm font-medium">Project Preview</p>
        </motion.div>
      </div>
    )
  }

  return (
    <>
      <div className="relative w-full h-full">
        {/* Fallback div for aspect ratio */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900" />
        
        {/* Image with error handling */}
        <Image
          src={src}
          alt={`${title} preview`}
          fill
          className={`object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
          loading="lazy"
          unoptimized={true}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
        
        {/* Loading state */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        
        {/* Beautiful overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
      </div>
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
    </>
  )
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { setCursor } = useAppStore()

  // Helper function to check if URL is valid
  const isValidUrl = (url: string | undefined): boolean => {
    if (!url || url === undefined || url.trim() === '' || url === '#') {
      return false
    }
    try {
      new URL(url)
      return true
    } catch {
      // Even if URL constructor fails, if it starts with http/https, it's probably valid
      return url.startsWith('http://') || url.startsWith('https://')
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    setCursor({
      isHovering: true,
      variant: 'project',
      text: isValidUrl(project.liveUrl) ? 'Visit Live Site' : 'View Details'
    })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setCursor({
      isHovering: false,
      variant: 'default',
      text: ''
    })
  }

  const getImageSrc = () => {
    try {
      if (typeof project.coverImage === 'string') {
        return project.coverImage
      }
      if (project.coverImage?.asset && project.coverImage !== undefined) {
        return urlFor(project.coverImage).width(800).height(450).url()
      }
    } catch (error) {
      console.log('Error getting image src:', error)
    }
    return null
  }

  const getDescription = () => {
    if (typeof project.description === 'string') {
      return project.description
    }
    if (Array.isArray(project.description) && project.description[0]?.children?.[0]?.text) {
      return project.description[0].children[0].text
    }
    return 'An innovative project showcasing cutting-edge technology and creative problem-solving.'
  }

  const description = getDescription()
  const truncatedDescription = description.length > 150 ? description.substring(0, 150) + '...' : description

  return (
    <motion.div
      className="group h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor="project"
      data-cursor-text={isValidUrl(project.liveUrl) ? 'Visit Live Site' : 'View Details'}
    >
      <motion.div 
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${getProjectGradient(project.projectType)} border border-white/10 h-full flex flex-col transition-all duration-500 group-hover:border-white/30 group-hover:shadow-2xl`}
        whileHover={{ 
          y: -10, 
          scale: 1.02,
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)"
        }}
      >
        {/* Project Image/Preview */}
        <div className="relative aspect-video overflow-hidden">
          <ProjectImage src={getImageSrc()} title={project.title} projectType={project.projectType} />
          
          {/* Hackathon Winner Badge */}
          {project.isHackathon && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-4 left-4 z-10"
            >
              <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-yellow-950 text-sm font-bold rounded-full shadow-lg">
                <Award className="w-4 h-4" />
                <span>🏆 Winner!</span>
              </div>
            </motion.div>
          )}

          {/* Featured Badge */}
          {project.featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute top-4 right-4 z-10"
            >
              <div className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
                <Star className="w-3 h-3" />
                <span>Featured</span>
              </div>
            </motion.div>
          )}

          {/* Hover Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <div className="absolute bottom-4 left-4 right-4 pointer-events-auto">
              <div className="flex space-x-3">
                {isValidUrl(project.liveUrl) ? (
                  <a
                    href={project.liveUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-300 cursor-pointer z-50"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      console.log('Opening live demo:', project.liveUrl)
                      window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                ) : null}
                {project.githubUrl && project.githubUrl !== undefined ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm font-medium hover:bg-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer z-50"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      window.open(project.githubUrl, '_blank', 'noopener,noreferrer')
                    }}
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-8 flex flex-col flex-grow">
          {/* Project Type and Prize */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              {getProjectIcon(project.projectType)}
              <span className="text-sm font-medium text-gray-300 capitalize">
                {project.projectType.replace('-', ' ')}
              </span>
            </div>
            {project.prize && (
              <div className="flex items-center space-x-1 px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
                <Zap className="w-3 h-3" />
                <span>{project.prize}</span>
              </div>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
            {truncatedDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 4).map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: tagIndex * 0.1 }}
                className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
              >
                {tag}
              </motion.span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-3 py-1 text-xs bg-white/10 text-gray-400 rounded-full">
                +{project.tags.length - 4} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-auto">
            {/* Live Demo Button */}
            {isValidUrl(project.liveUrl) ? (
              <a
                href={project.liveUrl!}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer relative z-50"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  console.log('Opening live demo:', project.liveUrl)
                  window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
                }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <div className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gray-600/50 text-gray-400 font-semibold rounded-2xl cursor-not-allowed opacity-60">
                <ExternalLink className="w-4 h-4" />
                <span>Not Available</span>
              </div>
            )}
            
            {/* GitHub Code Button */}
            {project.githubUrl && project.githubUrl !== undefined ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-white/10 text-gray-300 font-semibold rounded-2xl hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20 cursor-pointer relative z-50"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  window.open(project.githubUrl, '_blank', 'noopener,noreferrer')
                }}
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            ) : (
              <div className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-600/30 text-gray-500 font-semibold rounded-2xl cursor-not-allowed opacity-60 border border-gray-600/30">
                <Github className="w-4 h-4" />
                <span>Private</span>
              </div>
            )}
          </div>
        </div>

        {/* Animated border effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3))',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude'
          }}
        />
      </motion.div>
    </motion.div>
  )
}