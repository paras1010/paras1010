import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Bot, Brain } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedBackground from "@/components/animated-background"
import GradientOrbs from "@/components/gradient-orbs"
import FloatingElements from "@/components/floating-elements"

export const metadata: Metadata = {
  title: "FAQ - HYPERLP",
  description: "Frequently asked questions about the HYPERLP AI-powered liquidity platform",
}

export default function FAQPage() {
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
                <Link href="/documentation" className="text-sm font-medium transition-colors hover:text-primary">
                  Docs
                </Link>
                <Link href="/faq" className="text-sm font-medium text-primary transition-colors hover:text-primary">
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
              <h1 className="text-4xl font-bold tracking-tight text-foreground animate-glow">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground">Find answers to common questions about HYPERLP</p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              <div className="md:col-span-1">
                <div className="sticky top-24 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">Categories</h3>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <a href="#general" className="text-muted-foreground hover:text-primary">
                          General Questions
                        </a>
                      </li>
                      <li>
                        <a href="#ai-features" className="text-muted-foreground hover:text-primary">
                          AI Features
                        </a>
                      </li>
                      <li>
                        <a href="#staking" className="text-muted-foreground hover:text-primary">
                          Staking & Rewards
                        </a>
                      </li>
                      <li>
                        <a href="#referrals" className="text-muted-foreground hover:text-primary">
                          Referral Program
                        </a>
                      </li>
                      <li>
                        <a href="#wallet" className="text-muted-foreground hover:text-primary">
                          Wallet & Security
                        </a>
                      </li>
                      <li>
                        <a href="#technical" className="text-muted-foreground hover:text-primary">
                          Technical Questions
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">Resources</h3>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <Link href="/documentation" className="text-muted-foreground hover:text-primary">
                          Documentation
                        </Link>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                          Support
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-primary">
                          Community Forum
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="space-y-10">
                  <section id="general" className="scroll-mt-16">
                    <Card className="glass-card border-border">
                      <CardHeader>
                        <CardTitle className="text-2xl flex items-center">
                          <Bot className="mr-2 h-6 w-6 text-teal-400" />
                          General Questions
                        </CardTitle>
                        <CardDescription>Basic information about HYPERLP</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>What is HYPERLP?</AccordionTrigger>
                            <AccordionContent>
                              HYPERLP is an AI-powered liquidity provision platform that allows users to stake USDC
                              tokens across multiple blockchain networks (Base Chain, BNB Chain, and Sonic Chain). Users
                              earn up to 127.75% APR over a 200-day period through intelligent AI-driven trading
                              strategies. The platform features two sophisticated AI models and a comprehensive referral
                              program with detailed analytics.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger>How is HYPERLP different from other staking platforms?</AccordionTrigger>
                            <AccordionContent>
                              HYPERLP differentiates itself through its advanced AI-powered approach to liquidity
                              provision. Unlike traditional staking platforms, HYPERLP uses two sophisticated AI models:
                              one for identifying maximum trading volume opportunities across blockchain networks and
                              top 50 cryptocurrencies, and another trained on professional liquidity provider data from
                              the past two years. This provides superior risk-adjusted returns compared to passive
                              staking approaches.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-4">
                            <AccordionTrigger>Which blockchain networks does HYPERLP support?</AccordionTrigger>
                            <AccordionContent>
                              HYPERLP currently supports three blockchain networks: Base Chain (an Ethereum Layer 2
                              solution), BNB Chain (Binance's blockchain), and Sonic Chain. Each network offers
                              different characteristics in terms of transaction costs, speed, and ecosystem integration.
                              Our AI systems dynamically allocate across these networks based on real-time opportunity
                              analysis.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-5">
                            <AccordionTrigger>Who can use HYPERLP?</AccordionTrigger>
                            <AccordionContent>
                              HYPERLP is open to anyone with a compatible Web3 wallet (such as MetaMask, Coinbase
                              Wallet, or WalletConnect-compatible wallets) and USDC tokens. There are no KYC
                              requirements or geographical restrictions, though users should ensure they comply with
                              their local regulations. The minimum staking amount is 10 USDC.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </section>

                  <section id="ai-features" className="scroll-mt-16">
                    <Card className="glass-card border-border">
                      <CardHeader>
                        <CardTitle className="text-2xl flex items-center">
                          <Brain className="mr-2 h-6 w-6 text-purple-400" />
                          AI Features
                        </CardTitle>
                        <CardDescription>Questions about our artificial intelligence systems</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>How do the AI models work?</AccordionTrigger>
                            <AccordionContent>
                              HYPERLP employs two complementary AI models. The first AI focuses on identifying maximum
                              trading volume opportunities across various blockchain networks and the top 50
                              cryptocurrencies, continuously scanning markets for optimal liquidity provision
                              opportunities. The second AI model has been trained on data from professional liquidity
                              providers, specifically focusing on profitable strategies over the past two years.
                              Together, they provide intelligent, data-driven decision making for optimal returns.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger>What data sources do the AI models use?</AccordionTrigger>
                            <AccordionContent>
                              Our AI models utilize comprehensive data sources including real-time feeds from major
                              decentralized exchanges (DEXs), centralized exchanges (CEXs), cross-chain bridges, and
                              historical performance data from professional liquidity providers spanning over 2 years.
                              The systems analyze trading volumes, liquidity depths, spread patterns, volatility
                              metrics, and market sentiment across all monitored blockchain networks and
                              cryptocurrencies.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger>How often do the AI models make decisions?</AccordionTrigger>
                            <AccordionContent>
                              The Volume Optimization AI operates with continuous monitoring and makes decision-making
                              cycles every 15 seconds to capture rapidly changing market conditions. The Strategy
                              Learning AI updates its models every 24 hours based on new performance data and market
                              patterns. This combination ensures both rapid response to immediate opportunities and
                              long-term strategic optimization.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-4">
                            <AccordionTrigger>What is the AI success rate?</AccordionTrigger>
                            <AccordionContent>
                              Our AI models currently maintain a 94.2% success rate in profitable strategy execution, as
                              measured by risk-adjusted returns over the past 12 months. This high success rate is
                              achieved through continuous learning, sophisticated risk management protocols, and the
                              combination of volume optimization and professional strategy insights. The AI systems
                              continuously improve through reinforcement learning from each market interaction.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </section>

                  <section id="staking" className="scroll-mt-16">
                    <Card className="glass-card border-border">
                      <CardHeader>
                        <CardTitle className="text-2xl">Staking & Rewards</CardTitle>
                        <CardDescription>Questions about AI-powered staking process and rewards</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>What is the staking period?</AccordionTrigger>
                            <AccordionContent>
                              The staking period in HYPERLP is 200 days. During this period, your staked USDC is managed
                              by our AI systems to earn up to 127.75% total APR through intelligent liquidity provision
                              strategies. Your original investment is returned to you when your stake expires, plus all
                              AI-generated rewards.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger>How are AI-generated rewards calculated?</AccordionTrigger>
                            <AccordionContent>
                              Rewards are generated through AI-optimized liquidity provision strategies that target
                              approximately 0.35% daily returns. Our AI models continuously analyze market conditions
                              and execute optimal trading strategies across multiple blockchain networks. The actual
                              returns may vary based on market conditions, but our AI systems are designed to maximize
                              risk-adjusted returns while protecting your principal investment.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger>When can I collect my AI-generated rewards?</AccordionTrigger>
                            <AccordionContent>
                              You can collect your accrued AI-generated rewards at any time during the staking period.
                              Unlike some platforms that lock rewards until maturity, HYPERLP allows flexible reward
                              collection. This gives you the option to either withdraw your earnings or reinvest them to
                              compound your returns through additional AI-managed positions.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-4">
                            <AccordionTrigger>What is the minimum staking amount?</AccordionTrigger>
                            <AccordionContent>
                              The minimum amount you can stake on HYPERLP is 10 USDC. This minimum applies to each
                              staking transaction and ensures efficient AI management of your funds. There is no maximum
                              limit on how much you can stake, allowing for scalable AI-powered liquidity provision.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-5">
                            <AccordionTrigger>Can I stake different amounts on different networks?</AccordionTrigger>
                            <AccordionContent>
                              Yes, you can stake different amounts on each of the supported blockchain networks (Base
                              Chain, BNB Chain, and Sonic Chain). Our AI systems will optimize liquidity provision
                              across all your positions, potentially moving funds between networks based on real-time
                              opportunity analysis. Each network maintains its own separate staking balance and rewards
                              tracking.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-6">
                            <AccordionTrigger>Are there any fees for staking or collecting rewards?</AccordionTrigger>
                            <AccordionContent>
                              HYPERLP does not charge any platform fees for staking or collecting rewards. Our AI
                              systems operate on a revenue-sharing model where we earn a percentage of the generated
                              profits, aligning our incentives with your success. However, you will need to pay the
                              standard blockchain network transaction fees (gas fees) when interacting with the smart
                              contracts.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-7">
                            <AccordionTrigger>
                              Can I withdraw my staked USDC before the 200-day period ends?
                            </AccordionTrigger>
                            <AccordionContent>
                              Yes, you can withdraw your staked USDC at any time, but there is an early withdrawal fee
                              of 15% of the staked amount if you withdraw before 150 days. Early withdrawal after 150
                              days incurs a 15% fee to account for AI strategy disruption. After the full 200-day
                              period, you can withdraw your complete staked amount plus all AI-generated rewards without
                              any penalties.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </section>

                  <section id="referrals" className="scroll-mt-16">
                    <Card className="glass-card border-border">
                      <CardHeader>
                        <CardTitle className="text-2xl">Referral Program</CardTitle>
                        <CardDescription>Questions about the HYPERLP referral system</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>How does the referral program work?</AccordionTrigger>
                            <AccordionContent>
                              The HYPERLP referral program rewards you with 2% of the deposit amount when someone uses
                              your unique referral link to stake USDC. For example, if someone stakes 1,000 USDC using
                              your referral link, you'll earn 20 USDC (2% of 1,000) as a referral reward. These rewards
                              accumulate in your referral balance and can be claimed at any time.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger>How do I get my referral link?</AccordionTrigger>
                            <AccordionContent>
                              To get your referral link, connect your wallet to HYPERLP and navigate to the "Referrals"
                              tab. Your unique referral link will be automatically generated based on your wallet
                              address. You can copy this link using the copy button or share it directly through the
                              social sharing options (Facebook, Twitter, Email).
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger>Is there a limit to how many people I can refer?</AccordionTrigger>
                            <AccordionContent>
                              No, there is no limit to the number of people you can refer to HYPERLP. You can refer as
                              many users as you want and earn referral rewards from each of them. This makes the
                              referral program an excellent opportunity for users with large networks or influence in
                              the cryptocurrency community.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-4">
                            <AccordionTrigger>When do I receive my referral rewards?</AccordionTrigger>
                            <AccordionContent>
                              Referral rewards are added to your claimable balance immediately after the referred user
                              successfully stakes USDC using your referral link. However, you need to manually claim
                              these rewards by clicking the "Claim Rewards" button in the referral dashboard. The
                              rewards are not automatically transferred to your wallet.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-5">
                            <AccordionTrigger>
                              Do I earn referral rewards from my referrals' AI-generated profits?
                            </AccordionTrigger>
                            <AccordionContent>
                              No, the referral reward is a one-time 2% of the initial deposit amount made by the
                              referred user. You do not earn ongoing rewards based on the AI-generated profits earned by
                              your referrals. However, if a referred user makes additional deposits in the future, you
                              will earn the 2% referral reward on those new deposits as well.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-6">
                            <AccordionTrigger>Can I track the performance of my referrals?</AccordionTrigger>
                            <AccordionContent>
                              Yes, the referral dashboard provides comprehensive tracking of your referral performance.
                              You can see the total number of referrals, active referrals, total earnings, and a
                              detailed list of all your referrals including their wallet addresses, dates, staked
                              amounts, your earnings, and current status. You can also view your complete claim history
                              in the "Claim History" tab.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </section>

                  <section id="wallet" className="scroll-mt-16">
                    <Card className="glass-card border-border">
                      <CardHeader>
                        <CardTitle className="text-2xl">Wallet & Security</CardTitle>
                        <CardDescription>Questions about wallet connections and security measures</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>Which wallets are supported by HYPERLP?</AccordionTrigger>
                            <AccordionContent>
                              HYPERLP supports all major Web3 wallets, including MetaMask, Coinbase Wallet, and any
                              wallet compatible with WalletConnect. This ensures that most users can easily connect to
                              the platform using their preferred wallet solution. Make sure your wallet is configured to
                              support the blockchain networks used by HYPERLP (Base Chain, BNB Chain, and Sonic Chain).
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger>What happens if I disconnect my wallet?</AccordionTrigger>
                            <AccordionContent>
                              Disconnecting your wallet only ends the current session between your wallet and the
                              HYPERLP interface. It does not affect your staked funds, AI-managed positions, or accrued
                              rewards, as these are stored on the blockchain. You can reconnect your wallet at any time
                              to view and manage your stakes and rewards. This is useful for security-conscious users
                              who prefer to disconnect when not actively using the platform.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-5">
                            <AccordionTrigger>What happens if I lose access to my wallet?</AccordionTrigger>
                            <AccordionContent>
                              If you lose access to your wallet, HYPERLP cannot help you recover your funds or staked
                              assets. Your staked USDC and AI-generated rewards are tied to your wallet address on the
                              blockchain. This is why it's crucial to securely back up your wallet's seed phrase or
                              private keys according to the wallet provider's recommendations. With your seed phrase,
                              you can restore access to your wallet and thus your AI-managed assets.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </section>

                  <section id="technical" className="scroll-mt-16">
                    <Card className="glass-card border-border">
                      <CardHeader>
                        <CardTitle className="text-2xl">Technical Questions</CardTitle>
                        <CardDescription>Advanced technical details about the HYPERLP platform</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>How does HYPERLP work across multiple chains?</AccordionTrigger>
                            <AccordionContent>
                              HYPERLP deploys intelligent smart contracts on each supported blockchain (Base Chain, BNB
                              Chain, and Sonic Chain). Our AI systems integrate with all these contracts and can
                              dynamically move liquidity between networks based on real-time opportunity analysis. The
                              unified interface makes it easy to manage all your AI-optimized positions from one place,
                              while each blockchain operates independently with network-specific transaction fees.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger>Are the smart contracts and AI models audited?</AccordionTrigger>
                            <AccordionContent>
                              Yes, all HYPERLP smart contracts are open source and have undergone multiple security
                              audits by reputable third-party security firms. Our AI models have also been independently
                              verified for performance and risk management capabilities. Audit reports are published on
                              the HYPERLP website and GitHub repository. This transparency ensures that both the code
                              and AI strategies can be verified for security and effectiveness.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger>How are AI-generated returns funded and sustained?</AccordionTrigger>
                            <AccordionContent>
                              HYPERLP generates returns through AI-optimized liquidity provision strategies across
                              multiple blockchain networks and cryptocurrency pairs. Our AI models identify and execute
                              profitable opportunities in real-time, including arbitrage, concentrated liquidity
                              provision, and dynamic rebalancing. The AI systems continuously learn and adapt to market
                              conditions, ensuring sustainable returns. Interest payments are made to investors from the
                              profits of these AI-managed strategies.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3.5">
                            <AccordionTrigger>What happens if the AI models underperform?</AccordionTrigger>
                            <AccordionContent>
                              Our AI models include sophisticated risk management protocols and circuit breakers that
                              activate if performance falls below certain thresholds. In such cases, the systems
                              automatically switch to more conservative strategies to protect user funds. Additionally,
                              HYPERLP maintains reserve funds to ensure user principal protection even in adverse market
                              conditions. The AI models' performance is continuously monitored and they undergo regular
                              retraining to maintain optimal performance.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-4">
                            <AccordionTrigger>
                              What happens during smart contract or AI model upgrades?
                            </AccordionTrigger>
                            <AccordionContent>
                              When smart contract or AI model upgrades are necessary for improvements or new features,
                              HYPERLP follows a careful process: (1) Proposed changes are announced well in advance, (2)
                              A timelock period allows users to review the changes and exit if desired, (3) Upgrades are
                              first deployed to a testnet for thorough testing, (4) AI models undergo backtesting
                              against historical data before deployment. The process is designed to be transparent and
                              minimize disruption to users' AI-managed funds.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </section>
                </div>

                <div className="mt-12 flex items-center justify-between">
                  <Link
                    href="/documentation"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    <ArrowLeft className="mr-1 h-4 w-4" />
                    Full Documentation
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
