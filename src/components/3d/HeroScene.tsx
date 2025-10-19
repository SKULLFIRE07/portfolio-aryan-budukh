'use client'

import { Suspense, useRef, useState, useEffect } from 'react'
// @ts-ignore
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { useAppStore } from '@/lib/store'

// Animated geometric shape component
function GeometricShape() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)
  const { viewport } = useThree()

  useFrame((state: any, delta: number) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
      meshRef.current.rotation.z += delta * 0.1
      
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1)
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
      }
    }
  })

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      position={[0, 0, 0]}
    >
      <icosahedronGeometry args={[2, 1]} />
      <meshStandardMaterial
        color="#3b82f6"
        wireframe
        roughness={0.1}
        metalness={0.8}
        opacity={0.8}
        transparent
      />
    </mesh>
  )
}

// Particle system component
function Particles() {
  const pointsRef = useRef<THREE.Points>(null!)
  const particleCount = 1000
  
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    
    colors[i * 3] = Math.random() * 0.3 + 0.2 // Red
    colors[i * 3 + 1] = Math.random() * 0.5 + 0.5 // Green
    colors[i * 3 + 2] = Math.random() * 0.3 + 0.7 // Blue
  }

  useFrame((state: any) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} vertexColors sizeAttenuation transparent opacity={0.6} />
    </points>
  )
}

// Mouse interaction component
function MouseInteraction() {
  const { camera, mouse, viewport } = useThree()
  
  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * viewport.width * 0.1, 0.1)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * viewport.height * 0.1, 0.1)
    camera.lookAt(0, 0, 0)
  })

  return null
}

// Scene component
function Scene() {
  const { setSceneReady } = useAppStore()
  
  useEffect(() => {
    setSceneReady(true)
  }, [setSceneReady])

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      <GeometricShape />
      <Particles />
      <MouseInteraction />
    </>
  )
}

// Main Hero Scene component
export function HeroScene() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Always visible background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* 3D Canvas - with error handling */}
      <div className="absolute inset-0 pointer-events-none">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Scene />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
              autoRotate={true}
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </Suspense>
      </div>
      
      {/* Beautiful animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Enhanced gradient orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/4 w-48 h-48 bg-cyan-500/15 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/3 w-32 h-32 bg-pink-500/10 rounded-full blur-xl"
          animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, delay: 3 }}
        ></motion.div>
        
        {/* Enhanced floating geometric shapes */}
        {[...Array(12)].map((_, i) => {
          const sizeClass = i % 3 === 0 ? 'w-3 h-3' : i % 3 === 1 ? 'w-2 h-2' : 'w-1 h-1'
          const colorClass = i % 4 === 0 ? 'bg-blue-400/40' : 
                           i % 4 === 1 ? 'bg-purple-400/40' : 
                           i % 4 === 2 ? 'bg-cyan-400/40' : 'bg-pink-400/40'
          
          return (
            <motion.div
              key={i}
              className={`absolute ${sizeClass} ${colorClass} rounded-full`}
              style={{
                left: `${10 + (i * 7) % 80}%`,
                top: `${10 + (i * 11) % 70}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.sin(i) * 20, 0],
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          )
        })}
        
        {/* Floating connections */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`connection-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i * 7) % 50}%`,
              width: `${100 + i * 20}px`,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center space-y-8 max-w-5xl mx-auto px-4 pointer-events-auto relative z-30">
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl md:text-8xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ARYAN</span>
            <br />
            <span className="text-white">BUDUKH</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Computer Science Student & Student Athlete
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Specializing in Machine Learning, Deep Learning, and Computer Vision.
              Building innovative solutions for real-world problems.
            </p>
          </motion.div>

          {/* Achievements highlight */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div 
              className="px-6 py-3 glass rounded-full border border-yellow-500/30 bg-yellow-500/10"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-sm font-medium text-yellow-400 flex items-center space-x-2">
                <span>🏆</span>
                <span>AI/ML Fusion National Hackathon Winner</span>
                <span className="text-green-400 font-bold">• 10K Prize</span>
              </p>
            </motion.div>
            <motion.div 
              className="px-6 py-3 glass rounded-full border border-blue-500/30 bg-blue-500/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <p className="text-sm font-medium text-blue-400 flex items-center space-x-2">
                <span>🎓</span>
                <span>SGPA: 9.1</span>
                <span>• Student Athlete</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400"
          >
            <a 
              href="mailto:aryansbudukh@gmail.com" 
              className="hover:text-blue-400 transition-colors cursor-pointer relative z-10 px-2 py-1 rounded hover:bg-white/5"
            >
              aryansbudukh@gmail.com
            </a>
            <span className="hidden sm:block">•</span>
            <a 
              href="tel:+919322973362" 
              className="hover:text-blue-400 transition-colors cursor-pointer relative z-10 px-2 py-1 rounded hover:bg-white/5"
            >
              9322973362
            </a>
            <span className="hidden sm:block">•</span>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/aryanbudukh2710/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors cursor-pointer relative z-10 px-2 py-1 rounded hover:bg-white/5"
              >
                LINKEDIN
              </a>
              <span>•</span>
              <a 
                href="https://github.com/SKULLFIRE07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors cursor-pointer relative z-10 px-2 py-1 rounded hover:bg-white/5"
              >
                GITHUB
              </a>
            </div>
          </motion.div>

          {/* Call to action buttons */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8"
          >
            <a
              href="#about"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 cursor-pointer relative z-20"
            >
              <span>About Me</span>
              <span className="animate-bounce">↓</span>
            </a>
            
            <a
              href="#projects"
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm flex items-center space-x-2 cursor-pointer relative z-20"
            >
              <span>View My Projects</span>
            </a>

            <a
              href="/resume.pdf"
              download="Aryan_Budukh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                // Ensure the download works by creating a proper link
                if (e.currentTarget.href) {
                  const link = document.createElement('a')
                  link.href = '/resume.pdf'
                  link.download = 'Aryan_Budukh_Resume.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }
              }}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 cursor-pointer relative z-20"
            >
              <span>📄 Resume</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Additional beautiful elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
            style={{
              top: `${20 + i * 30}%`,
              left: '10%',
              right: '10%',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 3 + i * 0.5 }}
          />
        ))}
        
        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-blue-400/50"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-purple-400/50"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-cyan-400/50"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-pink-400/50"></div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none z-10"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-500 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
