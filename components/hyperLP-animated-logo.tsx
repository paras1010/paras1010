"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, Text3D, MeshTransmissionMaterial } from "@react-three/drei"
import { useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { gsap } from "gsap"

interface AnimatedLogoProps {
  animationType?: "intro" | "loading" | "reveal" | "pulse" | "orbit" | "morph"
  duration?: number
  autoPlay?: boolean
  loop?: boolean
  colorScheme?: "light" | "dark" | "gradient"
  onComplete?: () => void
}

function IntroAnimation({
  colorScheme = "gradient",
  duration = 4,
  onComplete,
}: {
  colorScheme: string
  duration: number
  onComplete?: () => void
}) {
  const groupRef = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const sphere1Ref = useRef<THREE.Mesh>(null)
  const sphere2Ref = useRef<THREE.Mesh>(null)
  const torus1Ref = useRef<THREE.Mesh>(null)
  const torus2Ref = useRef<THREE.Mesh>(null)
  const torus3Ref = useRef<THREE.Mesh>(null)
  const textRef = useRef<THREE.Group>(null)
  const [animationStarted, setAnimationStarted] = useState(false)

  const getColors = () => {
    switch (colorScheme) {
      case "light":
        return { primary: "#2563eb", secondary: "#06b6d4", accent: "#8b5cf6" }
      case "dark":
        return { primary: "#60a5fa", secondary: "#22d3ee", accent: "#a78bfa" }
      default:
        return { primary: "#3b82f6", secondary: "#06b6d4", accent: "#8b5cf6" }
    }
  }

  const colors = getColors()

  useEffect(() => {
    if (!animationStarted && groupRef.current) {
      setAnimationStarted(true)

      // Initial positions (off-screen/invisible)
      if (coreRef.current) {
        coreRef.current.scale.setScalar(0)
        coreRef.current.rotation.set(0, 0, 0)
      }
      if (sphere1Ref.current) sphere1Ref.current.position.set(10, 0, 0)
      if (sphere2Ref.current) sphere2Ref.current.position.set(-10, 0, 0)
      if (torus1Ref.current) torus1Ref.current.scale.setScalar(0)
      if (torus2Ref.current) torus2Ref.current.scale.setScalar(0)
      if (torus3Ref.current) torus3Ref.current.scale.setScalar(0)
      if (textRef.current) {
        textRef.current.position.y = -10
        textRef.current.scale.setScalar(0)
      }

      // Animation timeline
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete()
        },
      })

      // Core appears with scale and rotation
      tl.to(coreRef.current?.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
        .to(
          coreRef.current?.rotation,
          {
            x: Math.PI * 2,
            y: Math.PI * 2,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5",
        )

        // Spheres fly in from sides
        .to(
          sphere1Ref.current?.position,
          {
            x: 2,
            y: 0,
            z: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .to(
          sphere2Ref.current?.position,
          {
            x: -2,
            y: 0,
            z: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=1",
        )

        // Torus rings appear in sequence
        .to(
          torus1Ref.current?.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.3",
        )
        .to(
          torus2Ref.current?.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.4",
        )
        .to(
          torus3Ref.current?.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.4",
        )

        // Text slides up and scales in
        .to(
          textRef.current?.position,
          {
            y: -3,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .to(
          textRef.current?.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.8",
        )

        // Final rotation of entire group
        .to(
          groupRef.current?.rotation,
          {
            y: Math.PI * 2,
            duration: 1.5,
            ease: "power2.inOut",
          },
          "-=0.5",
        )
    }
  }, [animationStarted, onComplete])

  useFrame((state) => {
    if (animationStarted && sphere1Ref.current && sphere2Ref.current) {
      // Continuous orbital motion after intro
      const time = state.clock.elapsedTime
      sphere1Ref.current.position.x = 2 * Math.cos(time * 0.5)
      sphere1Ref.current.position.z = 2 * Math.sin(time * 0.5)
      sphere2Ref.current.position.x = -2 * Math.cos(time * 0.3)
      sphere2Ref.current.position.z = -2 * Math.sin(time * 0.3)
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central Core */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial
          color={colors.primary}
          metalness={0.7}
          roughness={0.2}
          emissive={colors.primary}
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Orbiting Spheres */}
      <mesh ref={sphere1Ref}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <MeshTransmissionMaterial
          color={colors.secondary}
          thickness={0.5}
          roughness={0.1}
          transmission={0.9}
          ior={1.5}
          chromaticAberration={0.02}
        />
      </mesh>
      <mesh ref={sphere2Ref}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <MeshTransmissionMaterial
          color={colors.accent}
          thickness={0.5}
          roughness={0.1}
          transmission={0.9}
          ior={1.5}
          chromaticAberration={0.02}
        />
      </mesh>

      {/* Connecting Torus */}
      <mesh ref={torus1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.1, 16, 100]} />
        <meshStandardMaterial
          color={colors.secondary}
          metalness={0.8}
          roughness={0.3}
          emissive={colors.secondary}
          emissiveIntensity={0.05}
        />
      </mesh>

      <mesh ref={torus2Ref} rotation={[0, 0, Math.PI / 3]}>
        <torusGeometry args={[1.5, 0.05, 8, 50]} />
        <meshStandardMaterial
          color={colors.accent}
          metalness={0.9}
          roughness={0.1}
          emissive={colors.accent}
          emissiveIntensity={0.03}
        />
      </mesh>

      <mesh ref={torus3Ref} rotation={[Math.PI / 3, Math.PI / 3, 0]}>
        <torusGeometry args={[1.2, 0.05, 8, 50]} />
        <meshStandardMaterial
          color={colors.primary}
          metalness={0.9}
          roughness={0.1}
          emissive={colors.primary}
          emissiveIntensity={0.03}
        />
      </mesh>

      {/* Text */}
      <group ref={textRef} position={[0, -3, 0]}>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={0.8}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          HyperLP
          <meshStandardMaterial
            color={colors.primary}
            metalness={0.5}
            roughness={0.3}
            emissive={colors.primary}
            emissiveIntensity={0.05}
          />
        </Text3D>
      </group>
    </group>
  )
}

function LoadingAnimation({
  colorScheme = "gradient",
}: {
  colorScheme: string
}) {
  const groupRef = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const ringsRef = useRef<THREE.Group>(null)

  const getColors = () => {
    switch (colorScheme) {
      case "light":
        return { primary: "#2563eb", secondary: "#06b6d4", accent: "#8b5cf6" }
      case "dark":
        return { primary: "#60a5fa", secondary: "#22d3ee", accent: "#a78bfa" }
      default:
        return { primary: "#3b82f6", secondary: "#06b6d4", accent: "#8b5cf6" }
    }
  }

  const colors = getColors()

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.5
      coreRef.current.rotation.y = time * 0.3

      // Pulsing effect
      const pulse = 1 + Math.sin(time * 2) * 0.1
      coreRef.current.scale.setScalar(pulse)
    }

    if (ringsRef.current) {
      ringsRef.current.rotation.y = time * 0.8
      ringsRef.current.rotation.z = time * 0.4
    }
  })

  return (
    <group ref={groupRef}>
      {/* Pulsing Core */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshStandardMaterial
          color={colors.primary}
          metalness={0.7}
          roughness={0.2}
          emissive={colors.primary}
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Rotating Rings */}
      <group ref={ringsRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.2, 0.05, 8, 50]} />
          <meshStandardMaterial
            color={colors.secondary}
            metalness={0.9}
            roughness={0.1}
            emissive={colors.secondary}
            emissiveIntensity={0.1}
          />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[1.5, 0.05, 8, 50]} />
          <meshStandardMaterial
            color={colors.accent}
            metalness={0.9}
            roughness={0.1}
            emissive={colors.accent}
            emissiveIntensity={0.1}
          />
        </mesh>
        <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[1.8, 0.05, 8, 50]} />
          <meshStandardMaterial
            color={colors.primary}
            metalness={0.9}
            roughness={0.1}
            emissive={colors.primary}
            emissiveIntensity={0.1}
          />
        </mesh>
      </group>
    </group>
  )
}

function RevealAnimation({
  colorScheme = "gradient",
  onComplete,
}: {
  colorScheme: string
  onComplete?: () => void
}) {
  const groupRef = useRef<THREE.Group>(null)
  const particlesRef = useRef<THREE.Group>(null)
  const logoRef = useRef<THREE.Group>(null)
  const [animationStarted, setAnimationStarted] = useState(false)

  const getColors = () => {
    switch (colorScheme) {
      case "light":
        return { primary: "#2563eb", secondary: "#06b6d4", accent: "#8b5cf6" }
      case "dark":
        return { primary: "#60a5fa", secondary: "#22d3ee", accent: "#a78bfa" }
      default:
        return { primary: "#3b82f6", secondary: "#06b6d4", accent: "#8b5cf6" }
    }
  }

  const colors = getColors()

  useEffect(() => {
    if (!animationStarted && groupRef.current) {
      setAnimationStarted(true)

      // Start with particles scattered
      if (particlesRef.current) {
        particlesRef.current.children.forEach((particle, index) => {
          const angle = (index / particlesRef.current!.children.length) * Math.PI * 2
          const radius = 5 + Math.random() * 3
          particle.position.set(Math.cos(angle) * radius, (Math.random() - 0.5) * 4, Math.sin(angle) * radius)
        })
      }

      if (logoRef.current) {
        logoRef.current.scale.setScalar(0)
      }

      // Animation timeline
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete()
        },
      })

      // Particles converge to center
      if (particlesRef.current) {
        particlesRef.current.children.forEach((particle, index) => {
          tl.to(
            particle.position,
            {
              x: 0,
              y: 0,
              z: 0,
              duration: 1.5,
              ease: "power2.inOut",
              delay: index * 0.05,
            },
            0,
          )
        })
      }

      // Logo appears from particles
      tl.to(
        logoRef.current?.scale,
        {
          x: 1,
          y: 1,
          z: 1,
          duration: 1,
          ease: "back.out(1.7)",
        },
        1,
      )

      // Particles fade out
      if (particlesRef.current) {
        tl.to(
          particlesRef.current,
          {
            opacity: 0,
            duration: 0.5,
          },
          1.5,
        )
      }
    }
  }, [animationStarted, onComplete])

  // Create particles
  const particles = Array.from({ length: 20 }, (_, i) => (
    <mesh key={i}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshStandardMaterial
        color={i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.secondary : colors.accent}
        emissive={i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.secondary : colors.accent}
        emissiveIntensity={0.3}
      />
    </mesh>
  ))

  return (
    <group ref={groupRef}>
      <group ref={particlesRef}>{particles}</group>

      <group ref={logoRef}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[0.8, 1]} />
          <meshStandardMaterial
            color={colors.primary}
            metalness={0.7}
            roughness={0.2}
            emissive={colors.primary}
            emissiveIntensity={0.1}
          />
        </mesh>

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.8, 0.1, 16, 100]} />
          <meshStandardMaterial
            color={colors.secondary}
            metalness={0.8}
            roughness={0.3}
            emissive={colors.secondary}
            emissiveIntensity={0.05}
          />
        </mesh>
      </group>
    </group>
  )
}

export default function HyperLPAnimatedLogo({
  animationType = "intro",
  duration = 4,
  autoPlay = true,
  loop = false,
  colorScheme = "gradient",
  onComplete,
}: AnimatedLogoProps) {
  const [key, setKey] = useState(0)

  const restartAnimation = () => {
    setKey((prev) => prev + 1)
  }

  useEffect(() => {
    if (loop && onComplete) {
      const timer = setTimeout(
        () => {
          restartAnimation()
        },
        duration * 1000 + 1000,
      ) // Add 1 second buffer

      return () => clearTimeout(timer)
    }
  }, [key, loop, duration, onComplete])

  const renderAnimation = () => {
    switch (animationType) {
      case "loading":
        return <LoadingAnimation colorScheme={colorScheme} />
      case "reveal":
        return <RevealAnimation colorScheme={colorScheme} onComplete={onComplete} />
      case "intro":
      default:
        return <IntroAnimation colorScheme={colorScheme} duration={duration} onComplete={onComplete} />
    }
  }

  return (
    <div className="w-full h-full" key={key}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />
        <pointLight position={[10, -10, 5]} intensity={0.5} color="#8b5cf6" />

        {renderAnimation()}

        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
