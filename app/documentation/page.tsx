import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle, Bot, Brain, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedBackground from "@/components/animated-background"
import GradientOrbs from "@/components/gradient-orbs"
import FloatingElements from "@/components/floating-elements"

export const metadata: Metadata = {
  title: "Documentation - HYPERLP",
  description: "Comprehensive documentation for the HYPERLP AI-powered liquidity platform",
}

export default function DocumentationPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      <GradientOrbs />
      <FloatingElements />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center">
            <div className="mr-4 flex items-center space-x-2">
              <div className="flex items-center space-x-3">
                <Link href="/">
                  <Image src="/logo.png" alt="HYPERLP Logo" width={40} height={40} className="h-10 w-auto" />
                </Link>
                <Link href="/" className="hidden font-bold text-foreground sm:inline-block">
                  HYPERLP
                </Link>
              </div>
            </div>
            <nav className="flex flex-1 items-center justify-end space-x-4">
              <div className="hidden sm:flex sm:items-center sm:space-x-4">
                <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Home
                </Link>
                <Link
                  href="/documentation"
                  className="text-sm font-medium text-primary transition-colors hover:text-primary"
                >
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
          <div className="container py-10">
            <div className="mb-10 space-y-4">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to Dashboard
              </Link>
              <h1 className="text-4xl font-bold tracking-tight text-foreground animate-glow">HYPERLP Documentation</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive guide to AI-powered liquidity provision on multiple chains
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-4">
              <div className="md:col-span-1">
                <div className="sticky top-24 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">Getting Started</h3>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <a href="#introduction" className="text-muted-foreground hover:text-primary">
                          Introduction
                        </a>
                      </li>
                      <li>
                        <a href="#ai-features" className="text-muted-foreground hover:text-primary">
                          AI Features
                        </a>
                      </li>
                      <li>
                        <a href="#connect-wallet" className="text-muted-foreground hover:text-primary">
                          Connecting Your Wallet
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">Using HYPERLP</h3>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <a href="#staking" className="text-muted-foreground hover:text-primary">
                          AI-Powered Staking
                        </a>
                      </li>
                      <li>
                        <a href="#rewards" className="text-muted-foreground hover:text-primary">
                          Collecting Rewards
                        </a>
                      </li>
                      <li>
                        <a href="#referrals" className="text-muted-foreground hover:text-primary">
                          Referral Program
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">Advanced Topics</h3>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <a href="#ai-models" className="text-muted-foreground hover:text-primary">
                          AI Models & Strategy
                        </a>
                      </li>
                      <li>
                        <a href="#dashboard" className="text-muted-foreground hover:text-primary">
                          Understanding the Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="#technical" className="text-muted-foreground hover:text-primary">
                          Technical Architecture
                        </a>
                      </li>
                      <li>
                        <a href="#risks" className="text-muted-foreground hover:text-primary">
                          Risk Management
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="space-y-12">
                  <section id="introduction" className="scroll-mt-16">
                    <Card className="glass-card border-border">
                      <CardHeader>
                        <CardTitle className="text-2xl flex items-center">
                          <Bot className="mr-2 h-6 w-6 text-teal-400" />
                          Introduction to HYPERLP
                        </CardTitle>
                        <CardDescription>
                          Understanding the purpose and benefits of AI-powered liquidity provision
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 text-foreground">
                        <p>
                          HYPERLP is a cutting-edge AI-powered liquidity provision platform designed for USDC holders
                          seeking maximum returns through intelligent trading strategies. The platform leverages two
                          sophisticated AI models that work in tandem to optimize liquidity provision across multiple
                          blockchain networks.
                        </p>

                        {/* User Flow Diagram */}
                        <div className="my-8 flex justify-center">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OPVo05nc7mNnwwEOPzR4R5c9a3GMUL.png"
                            alt="HYPERLP User Flow - Shows the process from user deposit to AI-managed returns"
                            width={600}
                            height={400}
                            className="rounded-lg border border-slate-700"
                          />
                        </div>

                        <p>
                          Unlike traditional staking platforms, HYPERLP utilizes advanced artificial intelligence to
                          continuously analyze market conditions, identify optimal trading opportunities, and execute
                          sophisticated liquidity provision strategies. Your funds are secured for a 200-day period
                          during which our AI systems work 24/7 to maximize your returns.
                        </p>
                        <p>
                          The platform supports multiple blockchain networks (Base Chain, BNB Chain, and Sonic Chain),
                          allowing for diversified exposure across different ecosystems while maintaining the security
                          and predictability you expect from a professional-grade DeFi platform.
                        </p>
                        <p>
                          Our AI models have been trained on extensive historical data from professional liquidity
                          providers and continuously adapt to changing market conditions to ensure optimal performance.
                          With HYPERLP, you can earn up to 127.75% APR over the 200-day period while your initial
                          investment remains protected.
                        </p>
                      </CardContent>
                    </Card>
                  </section>

                  <section id="ai-features" className="scroll-mt-16">
                    <Card className="glass-card border-border">
                      <CardHeader>
                        <CardTitle className="text-2xl flex items-center">
                          <Brain className="mr-2 h-6 w-6 text-purple-400" />
                          AI-Powered Features
                        </CardTitle>
                        <CardDescription>Advanced AI capabilities that drive superior returns</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 text-foreground">
                        {/* AI Setup Diagram */}
                        <div className="my-8 flex justify-center">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2YbGMEgybq452r8tep5uJ1HpimKFz2.png"
                            alt="HYPERLP AI Setup - Detailed view of how AI models manage liquidity and generate rewards"
                            width={600}
                            height={500}
                            className="rounded-lg border border-slate-700"
                          />
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div className="glass-card p-6">
                            <div className="flex items-center mb-4">
                              <TrendingUp className="h-8 w-8 text-blue-400 mr-3" />
                              <h3 className="text-lg font-medium">Volume Optimization AI</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                              Our first AI model focuses on identifying maximum trading volume opportunities across
                              various blockchain networks and the top 50 cryptocurrencies.
                            </p>
                            <ul className="text-sm space-y-2">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>Real-time analysis of trading volumes across multiple DEXs</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>Automated identification of high-volume trading pairs</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>Dynamic allocation based on market opportunities</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>Cross-chain arbitrage detection and execution</span>
                              </li>
                            </ul>
                          </div>

                          <div className="glass-card p-6">
                            <div className="flex items-center mb-4">
                              <Brain className="h-8 w-8 text-purple-400 mr-3" />
                              <h3 className="text-lg font-medium">Strategy Learning AI</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                              Our second AI model has been trained on data from professional liquidity providers,
                              specifically focusing on profitable strategies over the past two years.
                            </p>
                            <ul className="text-sm space-y-2">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>Machine learning from 2+ years of professional LP data</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>Pattern recognition for market trend prediction</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>Risk-adjusted position sizing and management</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>Adaptive strategy optimization based on performance</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="glass-card p-6">
                          <h3 className="text-lg font-medium mb-4 flex items-center">
                            <Bot className="h-5 w-5 text-teal-400 mr-2" />
                            How Our AI Systems Work Together
                          </h3>
                          <div className="space-y-3 text-sm">
                            <p>
                              <strong>1. Market Analysis:</strong> The Volume Optimization AI continuously scans
                              blockchain networks and cryptocurrency markets to identify high-volume trading
                              opportunities.
                            </p>
                            <p>
                              <strong>2. Strategy Selection:</strong> The Strategy Learning AI applies learned patterns
                              from professional liquidity providers to select the most profitable approach for each
                              opportunity.
                            </p>
                            <p>
                              <strong>3. Risk Assessment:</strong> Both AI models collaborate to assess risk levels and
                              ensure optimal risk-adjusted returns.
                            </p>
                            <p>
                              <strong>4. Execution:</strong> Automated execution of liquidity provision strategies
                              across selected chains and trading pairs.
                            </p>
                            <p>
                              <strong>5. Continuous Learning:</strong> The AI systems continuously learn from each
                              execution, improving performance over time.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </section>

                  <section id="connect-wallet" className="scroll-mt-16">
                    <Card className="glass-card border-border">
                      <CardHeader>
                        <CardTitle className="text-2xl">Connecting Your Wallet</CardTitle>
                        <CardDescription>Steps to connect your crypto wallet to HYPERLP</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 text-foreground">
                        <ol className="list-decimal space-y-4 pl-5">
                          <li>
                            <strong>Supported Wallets</strong>: HYPERLP supports major Web3 wallets including MetaMask,
                            Coinbase Wallet, and WalletConnect-compatible wallets.
                          </li>
                          <li>
                            <strong>Connection Process</strong>:
                            <ul className="list-disc space-y-2 pl-5 pt-2">
                              <li>Navigate to the HYPERLP homepage</li>
                              <li>Click the "Connect Wallet" button in the sidebar</li>
                              <li>Select your preferred wallet provider from the options</li>
                              <li>Approve the connection request in your wallet</li>
                              <li>Once connected, your wallet address will appear in the interface</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Network Configuration</strong>: Ensure your wallet is configured for the blockchain
                            networks supported by HYPERLP (Base Chain, BNB Chain, and Sonic Chain).
                          </li>
                          <li>
                            <strong>Disconnecting</strong>: To disconnect your wallet, click the "Disconnect" button in
                            the wallet section of the interface.
                          </li>
                        </ol>
                      </CardContent>
                    </Card>
                  </section>

                  <section id="ai-models" className="scroll-mt-16">
                    <Card className="glass-card border-border">
                      <CardHeader>
                        <CardTitle className="text-2xl flex items-center">
                          <Brain className="mr-2 h-6 w-6 text-purple-400" />
                          AI Models & Strategy
                        </CardTitle>
                        <CardDescription>Deep dive into our artificial intelligence systems</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 text-foreground">
                        <div className="grid gap-6 lg:grid-cols-2">
                          <div className="glass-card p-6">
                            <h3 className="text-xl font-semibold mb-4 text-blue-400">Volume Optimization Engine</h3>
                            <div className="space-y-3 text-sm">
                              <p>
                                <strong>Primary Function:</strong> Identifies and capitalizes on maximum trading volume
                                opportunities across blockchain networks and top 50 cryptocurrencies.
                              </p>
                              <p>
                                <strong>Data Sources:</strong> Real-time feeds from major DEXs, CEXs, and cross-chain
                                bridges to maintain comprehensive market awareness.
                              </p>
                              <p>
                                <strong>Analysis Frequency:</strong> Continuous monitoring with decision-making cycles
                                every 15 seconds to capture rapidly changing market conditions.
                              </p>
                              <p>
                                <strong>Key Metrics:</strong> Trading volume, liquidity depth, spread analysis, and
                                volatility assessment across all monitored assets.
                              </p>
                            </div>
                          </div>

                          <div className="glass-card p-6">
                            <h3 className="text-xl font-semibold mb-4 text-purple-400">Professional Strategy AI</h3>
                            <div className="space-y-3 text-sm">
                              <p>
                                <strong>Training Data:</strong> Over 2 years of historical performance data from
                                professional liquidity providers, including successful and failed strategies.
                              </p>
                              <p>
                                <strong>Machine Learning Model:</strong> Deep neural networks trained on pattern
                                recognition and strategy optimization using reinforcement learning techniques.
                              </p>
                              <p>
                                <strong>Performance Metrics:</strong> Risk-adjusted returns, maximum drawdown analysis,
                                and Sharpe ratio optimization for all strategy selections.
                              </p>
                              <p>
                                <strong>Adaptation Rate:</strong> Continuous learning from new market data with model
                                updates every 24 hours to maintain peak performance.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="glass-card p-6">
                          <h3 className="text-xl font-semibold mb-4 text-teal-400">Integrated AI Workflow</h3>
                          <div className="space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                              <div className="text-center p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                                <div className="text-2xl font-bold text-blue-400 mb-2">1</div>
                                <div className="text-sm font-medium">Market Scanning</div>
                                <div className="text-xs text-muted-foreground mt-1">AI monitors all target markets</div>
                              </div>
                              <div className="text-center p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                                <div className="text-2xl font-bold text-purple-400 mb-2">2</div>
                                <div className="text-sm font-medium">Strategy Selection</div>
                                <div className="text-xs text-muted-foreground mt-1">AI chooses optimal approach</div>
                              </div>
                              <div className="text-center p-4 rounded-lg bg-teal-500/10 border border-teal-500/20">
                                <div className="text-2xl font-bold text-teal-400 mb-2">3</div>
                                <div className="text-sm font-medium">Risk Assessment</div>
                                <div className="text-xs text-muted-foreground mt-1">AI evaluates potential risks</div>
                              </div>
                              <div className="text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                                <div className="text-2xl font-bold text-green-400 mb-2">4</div>
                                <div className="text-sm font-medium">Execution</div>
                                <div className="text-xs text-muted-foreground mt-1">AI executes optimal strategy</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </section>

                  <section id="risks" className="scroll-mt-16">
                    <Card className="glass-card border-border">
                      <CardHeader>
                        <CardTitle className="text-2xl">AI Risk Management</CardTitle>
                        <CardDescription>Understanding how AI minimizes risks in liquidity provision</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 text-foreground">
                        <p>
                          While HYPERLP is designed to provide high yields through AI optimization, we believe in full
                          transparency about how our AI systems manage the inherent risks of liquidity provision.
                        </p>

                        <h3 className="mt-4 font-semibold">AI-Powered Risk Mitigation</h3>
                        <p>
                          Our AI systems actively monitor and mitigate various risks including impermanent loss, market
                          volatility, and liquidity gaps. The AI models use sophisticated algorithms to predict market
                          movements and adjust positions accordingly.
                        </p>

                        <h3 className="mt-4 font-semibold">Intelligent Position Management</h3>
                        <p>
                          The AI continuously rebalances positions based on real-time market analysis, ensuring optimal
                          capital allocation while minimizing exposure to adverse market conditions. This dynamic
                          approach significantly reduces traditional DeFi risks.
                        </p>

                        <h3 className="mt-4 font-semibold">Multi-Chain Diversification</h3>
                        <p>
                          By operating across multiple blockchain networks, our AI system naturally diversifies risk
                          exposure across different ecosystems, protocols, and market conditions.
                        </p>

                        <div className="rounded-md border border-border p-4 mt-4">
                          <div className="flex items-center space-x-2">
                            <div className="rounded-full bg-primary/20 p-1 text-primary">
                              <Bot className="h-4 w-4" />
                            </div>
                            <p className="text-sm font-medium">AI Protection Guarantee</p>
                          </div>
                          <div className="mt-2 text-sm">
                            <p>
                              As a HYPERLP user, you're protected by our AI risk management systems. Your principal is
                              guaranteed to be returned at the end of the staking period, and our AI absorbs the
                              complexity and risks of direct liquidity provision.
                            </p>
                            <p className="mt-2">
                              <strong>How HYPERLP Protects You:</strong> Our AI systems handle all aspects of risk
                              management, from position sizing to market timing, allowing you to enjoy
                              professional-grade returns without the technical complexity or direct exposure to DeFi
                              risks.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </section>
                </div>

                <div className="mt-12 flex items-center justify-between">
                  <Link
                    href="/faq"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    <ArrowLeft className="mr-1 h-4 w-4" />
                    Frequently Asked Questions
                  </Link>
                  <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                    Back to Dashboard
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
    </div>
  )
}
