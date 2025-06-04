"use client"

import { useState } from "react"

interface HyperLPLogo2DProps {
  size?: number
  colorScheme?: "light" | "dark" | "gradient"
  variant?: "icon" | "full" | "text"
  className?: string
}

export default function HyperLPLogo2D({
  size = 100,
  colorScheme = "gradient",
  variant = "full",
  className = "",
}: HyperLPLogo2DProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getColors = () => {
    switch (colorScheme) {
      case "light":
        return {
          primary: "#2563eb",
          secondary: "#06b6d4",
          accent: "#8b5cf6",
          text: "#1f2937",
        }
      case "dark":
        return {
          primary: "#60a5fa",
          secondary: "#22d3ee",
          accent: "#a78bfa",
          text: "#f9fafb",
        }
      default:
        return {
          primary: "#3b82f6",
          secondary: "#06b6d4",
          accent: "#8b5cf6",
          text: "#3b82f6",
        }
    }
  }

  const colors = getColors()

  const IconSVG = () => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`transition-transform duration-300 ${isHovered ? "scale-110" : ""} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <defs>
        <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.primary} />
          <stop offset="100%" stopColor={colors.secondary} />
        </linearGradient>
        <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.secondary} />
          <stop offset="100%" stopColor={colors.accent} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Central Core */}
      <circle cx="50" cy="50" r="15" fill="url(#primaryGradient)" filter="url(#glow)" className="animate-pulse" />

      {/* Orbiting Elements */}
      <circle cx="75" cy="50" r="8" fill={colors.secondary} opacity="0.8">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="25" cy="50" r="8" fill={colors.accent} opacity="0.8">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 50 50"
          to="-360 50 50"
          dur="6s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Connecting Rings */}
      <circle
        cx="50"
        cy="50"
        r="30"
        fill="none"
        stroke="url(#secondaryGradient)"
        strokeWidth="2"
        opacity="0.6"
        strokeDasharray="5,5"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="8s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="50"
        cy="50"
        r="22"
        fill="none"
        stroke={colors.primary}
        strokeWidth="1.5"
        opacity="0.4"
        strokeDasharray="3,3"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 50 50"
          to="-360 50 50"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )

  const TextSVG = () => (
    <svg
      width={size * 2}
      height={size * 0.4}
      viewBox="0 0 200 40"
      className={`transition-all duration-300 ${isHovered ? "scale-105" : ""} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={colors.primary} />
          <stop offset="50%" stopColor={colors.secondary} />
          <stop offset="100%" stopColor={colors.accent} />
        </linearGradient>
      </defs>
      <text
        x="100"
        y="28"
        textAnchor="middle"
        fontSize="24"
        fontWeight="bold"
        fontFamily="Inter, sans-serif"
        fill={colorScheme === "gradient" ? "url(#textGradient)" : colors.text}
        className="select-none"
      >
        HyperLP
      </text>
    </svg>
  )

  const FullLogo = () => (
    <div
      className={`flex items-center space-x-4 transition-all duration-300 ${isHovered ? "scale-105" : ""} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconSVG />
      <TextSVG />
    </div>
  )

  switch (variant) {
    case "icon":
      return <IconSVG />
    case "text":
      return <TextSVG />
    case "full":
    default:
      return <FullLogo />
  }
}
