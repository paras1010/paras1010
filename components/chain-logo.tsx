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
