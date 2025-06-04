import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle, Bot, Brain, TrendingUp, DollarSign, Users } from "lucide-react"
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

                  <section id="staking" className="scroll-mt-16">
                    <Card className="glass-card border-border">
                      <CardHeader>
                        <CardTitle className="text-2xl flex items-center">
                          <TrendingUp className="mr-2 h-6 w-6 text-green-400" />
                          AI-Powered Staking
                        </CardTitle>
                        <CardDescription>How to stake USDC and let AI maximize your returns</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 text-foreground">
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Getting Started with Staking</h3>
                          <p>
                            Staking on HYPERLP is designed to be simple while leveraging sophisticated AI technology
                            behind the scenes. Here's how to get started:
                          </p>

                          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="glass-card p-4 text-center">
                              <div className="text-2xl font-bold text-blue-400 mb-2">1</div>
                              <div className="text-sm font-medium">Connect Wallet</div>
                              <div className="text-xs text-muted-foreground mt-1">Link your Web3 wallet</div>
                            </div>
                            <div className="glass-card p-4 text-center">
                              <div className="text-2xl font-bold text-purple-400 mb-2">2</div>
                              <div className="text-sm font-medium">Choose Network</div>
                              <div className="text-xs text-muted-foreground mt-1">Select blockchain network</div>
                            </div>
                            <div className="glass-card p-4 text-center">
                              <div className="text-2xl font-bold text-teal-400 mb-2">3</div>
                              <div className="text-sm font-medium">Stake USDC</div>
                              <div className="text-xs text-muted-foreground mt-1">Minimum 10 USDC</div>
                            </div>
                            <div className="glass-card p-4 text-center">
                              <div className="text-2xl font-bold text-green-400 mb-2">4</div>
                              <div className="text-sm font-medium">AI Optimizes</div>
                              <div className="text-xs text-muted-foreground mt-1">Earn up to 127.75% APR</div>
                            </div>
                          </div>

                          <h3 className="text-lg font-medium mt-6">Staking Terms & Conditions</h3>
                          <div className="glass-card p-6">
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <h4 className="font-medium text-blue-400 mb-2">Staking Period</h4>
                                <p className="text-sm text-muted-foreground">
                                  200 days for full maturity and maximum returns
                                </p>
                              </div>
                              <div>
                                <h4 className="font-medium text-purple-400 mb-2">Daily APR</h4>
                                <p className="text-sm text-muted-foreground">0.35% daily through AI optimization</p>
                              </div>
                              <div>
                                <h4 className="font-medium text-teal-400 mb-2">Total APR</h4>
                                <p className="text-sm text-muted-foreground">Up to 127.75% over 200 days</p>
                              </div>
                              <div>
                                <h4 className="font-medium text-green-400 mb-2">Minimum Stake</h4>
                                <p className="text-sm text-muted-foreground">10 USDC per transaction</p>
                              </div>
                            </div>
                          </div>

                          <h3 className="text-lg font-medium">Early Withdrawal Options</h3>
                          <p>HYPERLP offers flexible withdrawal options to accommodate different user needs:</p>
                          <div className="space-y-3">
                            <div className="glass-card p-4">
                              <h4 className="font-medium text-yellow-400 mb-2">Early Withdrawal (After 150 Days)</h4>
                              <p className="text-sm text-muted-foreground">
                                Withdraw with a 15% fee on your initial deposit. After submitting your withdrawal
                                request, there is a mandatory 48-hour waiting period before you can claim your funds.
                                You receive 85% of your principal plus all AI-generated rewards after this waiting
                                period.
                              </p>
                            </div>
                            <div className="glass-card p-4">
                              <h4 className="font-medium text-green-400 mb-2">Normal Withdrawal (After 200 Days)</h4>
                              <p className="text-sm text-muted-foreground">
                                Withdraw your complete initial deposit plus all AI-generated rewards with no fees.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </section>

                  <section id="rewards" className="scroll-mt-16">
                    <Card className="glass-card border-border">
                      <CardHeader>
                        <CardTitle className="text-2xl flex items-center">
                          <DollarSign className="mr-2 h-6 w-6 text-yellow-400" />
                          Collecting AI-Generated Rewards
                        </CardTitle>
                        <CardDescription>Understanding how rewards are generated and collected</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 text-foreground">
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">How AI Generates Rewards</h3>
                          <p>
                            Your staked USDC is actively managed by our AI systems to generate returns through
                            sophisticated liquidity provision strategies. The AI continuously analyzes market conditions
                            and executes optimal trading strategies across multiple blockchain networks.
                          </p>

                          <div className="glass-card p-6">
                            <h4 className="font-medium text-teal-400 mb-4">AI Reward Generation Process</h4>
                            <div className="space-y-3 text-sm">
                              <div className="flex items-start">
                                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                                  <span className="text-xs text-blue-400">1</span>
                                </div>
                                <div>
                                  <strong>Market Analysis:</strong> AI scans for high-volume trading opportunities
                                  across networks
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                                  <span className="text-xs text-purple-400">2</span>
                                </div>
                                <div>
                                  <strong>Strategy Execution:</strong> AI applies learned patterns from professional LPs
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center mr-3 mt-0.5">
                                  <span className="text-xs text-teal-400">3</span>
                                </div>
                                <div>
                                  <strong>Profit Distribution:</strong> Generated profits are allocated to user reward
                                  balances
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                                  <span className="text-xs text-green-400">4</span>
                                </div>
                                <div>
                                  <strong>Flexible Collection:</strong> Users can collect rewards at any time
                                </div>
                              </div>
                            </div>
                          </div>

                          <h3 className="text-lg font-medium">Collecting Your Rewards</h3>
                          <p>
                            Unlike many platforms that lock rewards until maturity, HYPERLP allows you to collect your
                            AI-generated rewards at any time during the staking period.
                          </p>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="glass-card p-4">
                              <h4 className="font-medium text-blue-400 mb-2">Flexible Collection</h4>
                              <p className="text-sm text-muted-foreground">
                                Collect your accrued rewards whenever you want. No waiting periods or restrictions.
                              </p>
                            </div>
                            <div className="glass-card p-4">
                              <h4 className="font-medium text-purple-400 mb-2">Compound Option</h4>
                              <p className="text-sm text-muted-foreground">
                                Reinvest collected rewards to create additional AI-managed positions for compound
                                growth.
                              </p>
                            </div>
                          </div>

                          <h3 className="text-lg font-medium">Reward Tracking & History</h3>
                          <p>The HYPERLP dashboard provides comprehensive tracking of your AI-generated rewards:</p>
                          <ul className="list-disc space-y-2 pl-5 text-sm">
                            <li>Real-time display of pending rewards across all networks</li>
                            <li>Daily yield generation tracking with detailed history</li>
                            <li>Complete collection history with timestamps and amounts</li>
                            <li>Network-specific reward breakdown and performance metrics</li>
                            <li>AI performance analytics and strategy insights</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </section>

                  <section id="referrals" className="scroll-mt-16">
                    <Card className="glass-card border-border">
                      <CardHeader>
                        <CardTitle className="text-2xl flex items-center">
                          <Users className="mr-2 h-6 w-6 text-orange-400" />
                          Referral Program
                        </CardTitle>
                        <CardDescription>Earn 2% of every referral's deposit amount</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 text-foreground">
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">How the Referral Program Works</h3>
                          <p>
                            The HYPERLP referral program rewards you for bringing new users to the platform. You earn 2%
                            of the deposit amount for every user who stakes USDC using your unique referral link.
                          </p>

                          <div className="glass-card p-6">
                            <h4 className="font-medium text-orange-400 mb-4">Referral Rewards Structure</h4>
                            <div className="grid gap-4 sm:grid-cols-3">
                              <div className="text-center">
                                <div className="text-3xl font-bold text-orange-400 mb-2">2%</div>
                                <div className="text-sm font-medium">Referral Rate</div>
                                <div className="text-xs text-muted-foreground">Of deposit amount</div>
                              </div>
                              <div className="text-center">
                                <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
                                <div className="text-sm font-medium">No Limits</div>
                                <div className="text-xs text-muted-foreground">Unlimited referrals</div>
                              </div>
                              <div className="text-center">
                                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                                <div className="text-sm font-medium">Instant Rewards</div>
                                <div className="text-xs text-muted-foreground">Immediate crediting</div>
                              </div>
                            </div>
                          </div>

                          <h3 className="text-lg font-medium">Getting Started with Referrals</h3>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mr-3 mt-0.5">
                                <span className="text-sm text-orange-400">1</span>
                              </div>
                              <div>
                                <strong>Connect Your Wallet:</strong> Your unique referral link is generated based on
                                your wallet address
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                                <span className="text-sm text-blue-400">2</span>
                              </div>
                              <div>
                                <strong>Share Your Link:</strong> Use the built-in sharing tools for social media,
                                email, or direct messaging
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                                <span className="text-sm text-green-400">3</span>
                              </div>
                              <div>
                                <strong>Earn Rewards:</strong> Receive 2% of every deposit made through your link
                              </div>
                            </div>
                          </div>

                          <h3 className="text-lg font-medium">Referral Dashboard Features</h3>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="glass-card p-4">
                              <h4 className="font-medium text-blue-400 mb-2">Comprehensive Tracking</h4>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• Total and active referral counts</li>
                                <li>• Individual referral performance</li>
                                <li>• Earnings breakdown by referral</li>
                                <li>• Complete claim history</li>
                              </ul>
                            </div>
                            <div className="glass-card p-4">
                              <h4 className="font-medium text-purple-400 mb-2">Easy Management</h4>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• One-click link copying</li>
                                <li>• Social media sharing tools</li>
                                <li>• Flexible reward claiming</li>
                                <li>• Real-time earnings updates</li>
                              </ul>
                            </div>
                          </div>

                          <div className="glass-card p-6">
                            <h4 className="font-medium text-teal-400 mb-4">Example Referral Earnings</h4>
                            <div className="space-y-3 text-sm">
                              <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded">
                                <span>Referral stakes 500 USDC</span>
                                <span className="text-green-400 font-medium">You earn: 10 USDC</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded">
                                <span>Referral stakes 1,000 USDC</span>
                                <span className="text-green-400 font-medium">You earn: 20 USDC</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-slate-800/30 rounded">
                                <span>Referral stakes 2,500 USDC</span>
                                <span className="text-green-400 font-medium">You earn: 50 USDC</span>
                              </div>
                            </div>
                          </div>

                          <h3 className="text-lg font-medium">Important Notes</h3>
                          <div className="space-y-2 text-sm">
                            <p>
                              <strong>One-time Reward:</strong> You earn 2% of the initial deposit amount only. You
                              don't earn from the AI-generated profits of your referrals.
                            </p>
                            <p>
                              <strong>Multiple Deposits:</strong> If a referred user makes additional deposits, you earn
                              the 2% reward on each new deposit.
                            </p>
                            <p>
                              <strong>Instant Crediting:</strong> Referral rewards are added to your claimable balance
                              immediately after the referred user's successful deposit.
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
