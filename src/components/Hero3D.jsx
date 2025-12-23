import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Create circular texture once and reuse
const createCircularTexture = () => {
  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 64
  const context = canvas.getContext('2d')
  
  // Create radial gradient
  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32)
  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)')
  gradient.addColorStop(1, 'rgba(255,255,255,0)')
  
  context.fillStyle = gradient
  context.fillRect(0, 0, 64, 64)
  
  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

function AnimatedSphere() {
  const particlesRef = useRef()
  const count = 1000
  
  const circularTexture = useMemo(() => createCircularTexture(), [])
  
  // Create sphere made of particles
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    
    // Create points on sphere surface using spherical coordinates
    const radius = 3.0 + Math.random() * 0.5 // Slight variation in radius
    const theta = Math.random() * Math.PI * 2 // Horizontal angle
    const phi = Math.acos(2 * Math.random() - 1) // Vertical angle for uniform distribution
    
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i3 + 2] = radius * Math.cos(phi)
    
    // Color particles with theme colors
    const color = new THREE.Color()
    const colors_array = ['#8b5cf6', '#a855f7', '#9333ea', '#7c3aed']
    color.set(colors_array[Math.floor(Math.random() * colors_array.length)])
    
    colors[i3] = color.r
    colors[i3 + 1] = color.g
    colors[i3 + 2] = color.b
  }

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = clock.getElapsedTime() * 0.1
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.2
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        vertexColors={true}
        transparent={true}
        opacity={1.0}
        sizeAttenuation={true}
        map={circularTexture}
        alphaTest={0.001}
      />
    </points>
  )
}

function GalaxyParticles() {
  const particlesRef = useRef()
  const count = 2000
  
  const circularTexture = useMemo(() => createCircularTexture(), [])
  
  // Create galaxy spiral pattern
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    
    // Create spiral arms
    const radius = Math.random() * 5
    const spinAngle = radius * 0.5
    const branchAngle = (i % 3) * ((Math.PI * 2) / 3) + spinAngle
    
    const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.2
    const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.2
    const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.2
    
    positions[i3] = Math.cos(branchAngle) * radius + randomX
    positions[i3 + 1] = randomY * 0.3
    positions[i3 + 2] = Math.sin(branchAngle) * radius + randomZ
    
    // Color based on distance from center
    const mixedColor = new THREE.Color()
    const innerColor = new THREE.Color('#8b5cf6') // Purple
    const outerColor = new THREE.Color('#3b82f6') // Blue
    
    mixedColor.lerpColors(innerColor, outerColor, radius / 5)
    
    colors[i3] = mixedColor.r
    colors[i3 + 1] = mixedColor.g
    colors[i3 + 2] = mixedColor.b
  }

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.02} 
        vertexColors={true}
        transparent={true}
        opacity={0.8}
        sizeAttenuation={true}
        map={circularTexture}
        alphaTest={0.001}
      />
    </points>
  )
}

function StarField() {
  const starsRef = useRef()
  const count = 500
  
  const circularTexture = useMemo(() => createCircularTexture(), [])
  
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 12
  }

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.02
    }
  })

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.01} 
        color="#ffffff"
        transparent={true}
        opacity={0.6}
        map={circularTexture}
        alphaTest={0.001}
      />
    </points>
  )
}

const Hero3D = () => {
  return (
    <Canvas 
      camera={{ position: [0, 2, 8], fov: 75 }}
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        zIndex: -1,
        pointerEvents: 'none',
        width: '100%',
        height: '100%'
      }}
      eventSource={undefined}
      eventPrefix="client"
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[0, 0, 0]} intensity={1} color="#8b5cf6" />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#3b82f6" />
      
      <AnimatedSphere />
      <GalaxyParticles />
      <StarField />
    </Canvas>
  )
}

export default Hero3D

