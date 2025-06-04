"use client"

import { useState, useEffect } from "react"

interface HyperLP2DAnimationProps {
  animationType?: "fadeIn" | "slideIn" | "typewriter" | "particles" | "morphing"
  size?: number
  colorScheme?: "light" | "dark" | "gradient"
  duration?: number
  autoPlay?: boolean
  loop?: boolean
  onComplete?: () => void
}

export default function HyperLP2DAnimation({
  animationType = "fadeIn",
  size = 100,
  colorScheme = "gradient",
  duration = 3,
  autoPlay = true,
  loop = false,
  onComplete,
}: HyperLP2DAnimationProps) {
  const [animationKey, setAnimationKey] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

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

  useEffect(() => {
    if (autoPlay) {
      setIsVisible(true)
      if (onComplete) {
        const timer = setTimeout(onComplete, duration * 1000)
        return () => clearTimeout(timer)
      }
    }
  }, [autoPlay, duration, onComplete, animationKey])

  useEffect(() => {
    if (loop) {
      const timer = setTimeout(
        () => {
          setAnimationKey((prev) => prev + 1)
          setIsVisible(false)
          setTimeout(() => setIsVisible(true), 100)
        },
        duration * 1000 + 1000,
      )

      return () => clearTimeout(timer)
    }
  }, [animationKey, loop, duration])

  const FadeInAnimation = () => (
    <div
      key={animationKey}
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-lg">
        <defs>
          <linearGradient id={`primaryGradient-${animationKey}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.primary} />
            <stop offset="100%" stopColor={colors.secondary} />
          </linearGradient>
          <filter id={`glow-${animationKey}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          cx="50"
          cy="50"
          r="15"
          fill={`url(#primaryGradient-${animationKey})`}
          filter={`url(#glow-${animationKey})`}
        />

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

        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke={colors.secondary}
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
      </svg>
    </div>
  )

  const SlideInAnimation = () => (
    <div
      key={animationKey}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex items-center space-x-4">
        <svg width={size} height={size} viewBox="0 0 100 100">
          <defs>
            <linearGradient id={`slideGradient-${animationKey}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="100%" stopColor={colors.secondary} />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="15" fill={`url(#slideGradient-${animationKey})`} />
          <circle cx="75" cy="50" r="8" fill={colors.secondary} opacity="0.8" />
          <circle cx="25" cy="50" r="8" fill={colors.accent} opacity="0.8" />
        </svg>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <span className="text-2xl font-bold" style={{ color: colors.text }}>
            HyperLP
          </span>
        </div>
      </div>
    </div>
  )

  const TypewriterAnimation = () => {
    const [displayText, setDisplayText] = useState("")
    const fullText = "HyperLP"

    useEffect(() => {
      if (isVisible) {
        let currentIndex = 0
        const timer = setInterval(() => {
          if (currentIndex <= fullText.length) {
            setDisplayText(fullText.slice(0, currentIndex))
            currentIndex++
          } else {
            clearInterval(timer)
          }
        }, 200)

        return () => clearInterval(timer)
      }
    }, [isVisible, animationKey])

    return (
      <div key={animationKey} className="flex items-center space-x-4">
        <div className={`transition-all duration-500 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
          <svg width={size} height={size} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="15" fill={colors.primary} />
          </svg>
        </div>

        <div className="relative">
          <span className="text-2xl font-bold font-mono" style={{ color: colors.text }}>
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>
      </div>
    )
  }

  const ParticlesAnimation = () => (
    <div key={animationKey} className="relative">
      <svg width={size * 2} height={size * 2} viewBox="0 0 200 200">
        <defs>
          <radialGradient id={`particleGradient-${animationKey}`}>
            <stop offset="0%" stopColor={colors.primary} stopOpacity="1" />
            <stop offset="100%" stopColor={colors.primary} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Animated particles */}
        {Array.from({ length: 12 }, (_, i) => (
          <circle
            key={i}
            r="3"
            fill={i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.secondary : colors.accent}
            opacity="0.7"
          >
            <animateMotion
              dur={`${3 + i * 0.2}s`}
              repeatCount="indefinite"
              path={`M${100 + Math.cos((i * 30 * Math.PI) / 180) * 80},${100 + Math.sin((i * 30 * Math.PI) / 180) * 80} 
                     Q100,100 
                     ${100 + Math.cos(((i + 6) * 30 * Math.PI) / 180) * 80},${100 + Math.sin(((i + 6) * 30 * Math.PI) / 180) * 80}`}
            />
          </circle>
        ))}

        {/* Central logo */}
        <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <circle cx="100" cy="100" r="20" fill={colors.primary} />
          <text x="100" y="140" textAnchor="middle" fontSize="16" fontWeight="bold" fill={colors.text}>
            HyperLP
          </text>
        </g>
      </svg>
    </div>
  )

  const MorphingAnimation = () => (
    <div key={animationKey}>
      <svg width={size * 1.5} height={size} viewBox="0 0 150 100">
        <defs>
          <linearGradient id={`morphGradient-${animationKey}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.primary} />
            <stop offset="50%" stopColor={colors.secondary} />
            <stop offset="100%" stopColor={colors.accent} />
          </linearGradient>
        </defs>

        <path
          fill={`url(#morphGradient-${animationKey})`}
          d="M30,50 Q50,20 70,50 Q90,80 110,50 Q130,20 150,50 Q130,80 110,50 Q90,20 70,50 Q50,80 30,50"
        >
          <animate
            attributeName="d"
            dur="4s"
            repeatCount="indefinite"
            values="M30,50 Q50,20 70,50 Q90,80 110,50 Q130,20 150,50 Q130,80 110,50 Q90,20 70,50 Q50,80 30,50;
                    M30,50 Q50,80 70,50 Q90,20 110,50 Q130,80 150,50 Q130,20 110,50 Q90,80 70,50 Q50,20 30,50;
                    M30,50 Q50,20 70,50 Q90,80 110,50 Q130,20 150,50 Q130,80 110,50 Q90,20 70,50 Q50,80 30,50"
          />
        </path>

        <text
          x="75"
          y="85"
          textAnchor="middle"
          fontSize="12"
          fontWeight="bold"
          fill={colors.text}
          className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          HyperLP
        </text>
      </svg>
    </div>
  )

  const renderAnimation = () => {
    switch (animationType) {
      case "slideIn":
        return <SlideInAnimation />
      case "typewriter":
        return <TypewriterAnimation />
      case "particles":
        return <ParticlesAnimation />
      case "morphing":
        return <MorphingAnimation />
      case "fadeIn":
      default:
        return <FadeInAnimation />
    }
  }

  return <div className="flex items-center justify-center">{renderAnimation()}</div>
}
