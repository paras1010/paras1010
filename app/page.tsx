import type { Metadata } from "next"
import StakingDashboard from "@/components/staking-dashboard"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "HYPERLP - AI-Powered Liquidity Platform",
  description: "AI-driven liquidity provision across multiple chains with intelligent trading strategies",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="absolute top-0 z-50 w-full bg-transparent">
        <div className="container flex h-20 items-center">
          <div className="mr-4 flex items-center space-x-2">
            <div className="flex items-center space-x-3">
              <div className="bg-teal-600 rounded-lg p-2">
                <Image src="/logo.png" alt="HYPERLP Logo" width={24} height={24} className="h-6 w-6" />
              </div>
              <span className="font-bold text-white text-xl">HYPERLP</span>
            </div>
          </div>
          <nav className="flex flex-1 items-center justify-center space-x-8">
            <Link href="/" className="text-white font-medium hover:text-blue-300 transition-colors">
              Dashboard
            </Link>
            <Link href="/documentation" className="text-blue-300 font-medium hover:text-white transition-colors">
              Docs
            </Link>
            <Link href="/faq" className="text-blue-300 font-medium hover:text-white transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-6">Connect Wallet</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <StakingDashboard />
      </main>
      <footer className="border-t border-border py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 HYPERLP. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
