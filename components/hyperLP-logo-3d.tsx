"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Text3D, MeshTransmissionMaterial } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

interface HyperLPLogo3DProps {
  autoRotate?: boolean
  size?: number
  colorScheme?: "light" | "dark" | "gradient"
}

function LogoGeometry({ colorScheme = "gradient", size = 1 }: { colorScheme: string; size: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const sphereRef = useRef<THREE.Mesh>(null)
  const torusRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.3
      sphereRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.4
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  const getColors = () => {
    switch (colorScheme) {
      case "light":
        return {
          primary: "#2563eb",
          secondary: "#06b6d4",
          accent: "#8b5cf6",
        }
      case "dark":
        return {
          primary: "#60a5fa",
          secondary: "#22d3ee",
          accent: "#a78bfa",
        }
      default:
        return {
          primary: "#3b82f6",
          secondary: "#06b6d4",
          accent: "#8b5cf6",
        }
    }
  }

  const colors = getColors()

  return (
    <group ref={groupRef} scale={size}>
      {/* Central Core - Representing the LP token */}
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

      {/* Orbiting Spheres - Representing liquidity flows */}
      <group ref={sphereRef}>
        <mesh position={[2, 0, 0]}>
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
        <mesh position={[-2, 0, 0]}>
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
      </group>

      {/* Connecting Torus - Representing interconnected liquidity */}
      <mesh ref={torusRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.1, 16, 100]} />
        <meshStandardMaterial
          color={colors.secondary}
          metalness={0.8}
          roughness={0.3}
          emissive={colors.secondary}
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Additional connecting rings */}
      <mesh rotation={[0, 0, Math.PI / 3]}>
        <torusGeometry args={[1.5, 0.05, 8, 50]} />
        <meshStandardMaterial
          color={colors.accent}
          metalness={0.9}
          roughness={0.1}
          emissive={colors.accent}
          emissiveIntensity={0.03}
        />
      </mesh>

      <mesh rotation={[Math.PI / 3, Math.PI / 3, 0]}>
        <torusGeometry args={[1.2, 0.05, 8, 50]} />
        <meshStandardMaterial
          color={colors.primary}
          metalness={0.9}
          roughness={0.1}
          emissive={colors.primary}
          emissiveIntensity={0.03}
        />
      </mesh>
    </group>
  )
}

function LogoText({ colorScheme = "gradient", size = 1 }: { colorScheme: string; size: number }) {
  const textRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    }
  })

  const getTextColor = () => {
    switch (colorScheme) {
      case "light":
        return "#1f2937"
      case "dark":
        return "#f9fafb"
      default:
        return "#3b82f6"
    }
  }

  return (
    <group ref={textRef} position={[0, -3, 0]} scale={size}>
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
          color={getTextColor()}
          metalness={0.5}
          roughness={0.3}
          emissive={getTextColor()}
          emissiveIntensity={0.05}
        />
      </Text3D>
    </group>
  )
}

export default function HyperLPLogo3D({ autoRotate = true, size = 1, colorScheme = "gradient" }: HyperLPLogo3DProps) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />
        <pointLight position={[10, -10, 5]} intensity={0.5} color="#8b5cf6" />

        <LogoGeometry colorScheme={colorScheme} size={size} />
        <LogoText colorScheme={colorScheme} size={size} />

        <Environment preset="city" />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate={autoRotate}
          autoRotateSpeed={2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}
