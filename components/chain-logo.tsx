import Image from "next/image"

interface ChainLogoProps {
  chain: string
  size?: number
  className?: string
}

export default function ChainLogo({ chain, size = 20, className = "" }: ChainLogoProps) {
  const getLogoPath = (chainName: string): string => {
    const normalizedChain = chainName.toLowerCase().trim()

    if (normalizedChain.includes("base")) {
      return "/images/base-chain-logo.png"
    } else if (normalizedChain.includes("bnb")) {
      return "/images/bnb-chain-logo.png"
    } else if (normalizedChain.includes("sonic")) {
      return "/images/sonic-chain-logo.png"
    }

    // Fallback
    return "/images/base-chain-logo.png"
  }

  // Chain-specific colors
  const getChainColor = (chainName: string): string => {
    const normalizedChain = chainName.toLowerCase().trim()

    if (normalizedChain.includes("base")) {
      return "#b0e0e6" // Powder blue
    } else if (normalizedChain.includes("bnb")) {
      return "#f0c010" // Yellow
    } else if (normalizedChain.includes("sonic")) {
      return "#ffffff" // White
    }

    // Fallback
    return "#0ea5e9" // Default blue
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <Image
        src={getLogoPath(chain) || "/placeholder.svg"}
        alt={`${chain} logo`}
        width={size}
        height={size}
        className="rounded-full mr-2"
      />
    </div>
  )
}
