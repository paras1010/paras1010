import type { Metadata } from "next"
import StakingDashboard from "@/components/staking-dashboard"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Stable Vault - USDC Staking Platform",
  description: "Stake your USDC tokens across multiple chains with 0.35% daily APR",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex items-center space-x-2">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Stable Vault Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="hidden font-bold text-foreground sm:inline-block">Stable Vault</span>
            </div>
          </div>
          <nav className="flex flex-1 items-center justify-end space-x-4">
            <div className="hidden sm:flex sm:items-center sm:space-x-4">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="/documentation" className="text-sm font-medium transition-colors hover:text-primary">
                Docs
              </Link>
              <Link href="/faq" className="text-sm font-medium transition-colors hover:text-primary">
                FAQ
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <StakingDashboard />
      </main>
      <footer className="border-t border-border py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Stable Vault. All rights reserved.
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
