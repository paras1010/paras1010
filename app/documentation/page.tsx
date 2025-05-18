import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Documentation - Stable Vault",
  description: "Comprehensive documentation for the Stable Vault staking platform",
}

export default function DocumentationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex items-center space-x-2">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Image src="/logo.png" alt="Stable Vault Logo" width={40} height={40} className="h-10 w-auto" />
              </Link>
              <Link href="/" className="hidden font-bold text-foreground sm:inline-block">
                Stable Vault
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
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Stable Vault Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive guide to staking USDC on multiple chains with Stable Vault
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
                      <a href="#features" className="text-muted-foreground hover:text-primary">
                        Core Features
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
                  <h3 className="font-medium text-foreground">Using Stable Vault</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="#staking" className="text-muted-foreground hover:text-primary">
                        Staking USDC
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
                      <a href="#dashboard" className="text-muted-foreground hover:text-primary">
                        Understanding the Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#tvl" className="text-muted-foreground hover:text-primary">
                        TVL & Analytics
                      </a>
                    </li>
                    <li>
                      <a href="#technical" className="text-muted-foreground hover:text-primary">
                        Technical Architecture
                      </a>
                    </li>
                    <li>
                      <a href="#risks" className="text-muted-foreground hover:text-primary">
                        Risk Insight
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="space-y-12">
                <section id="introduction" className="scroll-mt-16">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">Introduction to Stable Vault</CardTitle>
                      <CardDescription>
                        Understanding the purpose and benefits of the Stable Vault platform
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-foreground">
                      <p>
                        Stable Vault is a decentralized staking platform designed for USDC holders seeking stable,
                        predictable returns across multiple blockchain networks. The platform offers high-yield staking
                        opportunities with a 0.35% daily APR (Annual Percentage Rate), amounting to approximately
                        127.75% APR over the 200-day staking period.
                      </p>
                      <p>
                        There is no sacrifice or loss of your initial capital. As you will have your original investment
                        returned to you when your stake expires. Interest payments are made to investors from the
                        profits of concentrated liquidity pools managed by the team of Stable Vault.
                      </p>
                      <p>
                        By leveraging the power of multiple blockchain networks (Base Chain, BNB Chain, and Sonic
                        Chain), Stable Vault allows users to diversify their staking positions across different
                        ecosystems, reducing risk while maintaining consistent rewards.
                      </p>
                      <p>
                        The platform is built with security, transparency, and user experience in mind, offering an
                        intuitive interface for both beginner and advanced DeFi users. With Stable Vault, you can stake
                        your USDC, earn daily rewards, participate in the referral program, and track your earnings
                        through comprehensive analytics.
                      </p>
                      <p>
                        Our team has over 3 years of experience in concentrated v3 farming. We are constantly evolving,
                        and fine tuning our strategies maximizing returns and providing the highest yield on the
                        blockchain.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section id="features" className="scroll-mt-16">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">Core Features</CardTitle>
                      <CardDescription>Key capabilities and benefits of the Stable Vault platform</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-foreground">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <div>
                            <h3 className="font-medium">Multi-Chain Staking</h3>
                            <p className="text-sm text-muted-foreground">
                              Stake your USDC across three blockchain networks: Base Chain, BNB Chain, and Sonic Chain
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <div>
                            <h3 className="font-medium">High APR</h3>
                            <p className="text-sm text-muted-foreground">
                              Earn 0.35% daily APR, equivalent to approximately 127.75% APR over the 200-day staking
                              period
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <div>
                            <h3 className="font-medium">Flexible Reward Collection</h3>
                            <p className="text-sm text-muted-foreground">
                              Collect your earned rewards anytime, with a detailed history of all collections
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <div>
                            <h3 className="font-medium">Lucrative Referral Program</h3>
                            <p className="text-sm text-muted-foreground">
                              Earn 2% of the deposit amount from users who stake using your referral link
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <div>
                            <h3 className="font-medium">Comprehensive Dashboard</h3>
                            <p className="text-sm text-muted-foreground">
                              Track your stakes, rewards, and referrals with intuitive visualizations
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <div>
                            <h3 className="font-medium">TVL Analytics</h3>
                            <p className="text-sm text-muted-foreground">
                              Monitor the platform's Total Value Locked (TVL) and growth trends
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section id="connect-wallet" className="scroll-mt-16">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">Connecting Your Wallet</CardTitle>
                      <CardDescription>Steps to connect your crypto wallet to Stable Vault</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-foreground">
                      <ol className="list-decimal space-y-4 pl-5">
                        <li>
                          <strong>Supported Wallets</strong>: Stable Vault supports major Web3 wallets including
                          MetaMask, Coinbase Wallet, and WalletConnect-compatible wallets.
                        </li>
                        <li>
                          <strong>Connection Process</strong>:
                          <ul className="list-disc space-y-2 pl-5 pt-2">
                            <li>Navigate to the Stable Vault homepage</li>
                            <li>Click the "Connect Wallet" button in the sidebar</li>
                            <li>Select your preferred wallet provider from the options</li>
                            <li>Approve the connection request in your wallet</li>
                            <li>Once connected, your wallet address will appear in the interface</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Network Configuration</strong>: Ensure your wallet is configured for the blockchain
                          networks supported by Stable Vault (Base Chain, BNB Chain, and Sonic Chain).
                        </li>
                        <li>
                          <strong>Disconnecting</strong>: To disconnect your wallet, click the "Disconnect" button in
                          the wallet section of the interface.
                        </li>
                      </ol>
                    </CardContent>
                  </Card>
                </section>

                <section id="staking" className="scroll-mt-16">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">Staking USDC</CardTitle>
                      <CardDescription>How to stake your USDC tokens on Stable Vault</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-foreground">
                      <p>
                        Staking your USDC on Stable Vault is a straightforward process that allows you to earn a 0.35%
                        daily APR over a 200-day period. Follow these steps to start staking:
                      </p>
                      <ol className="list-decimal space-y-4 pl-5">
                        <li>
                          <strong>Connect Your Wallet</strong>: First, connect your wallet by following the steps in the
                          "Connecting Your Wallet" section.
                        </li>
                        <li>
                          <strong>Navigate to the Stake Tab</strong>: Once connected, go to the "Stake" tab in the main
                          dashboard.
                        </li>
                        <li>
                          <strong>Select Network</strong>: Choose which blockchain network you want to stake on (Base
                          Chain, BNB Chain, or Sonic Chain) from the dropdown menu.
                        </li>
                        <li>
                          <strong>Enter Amount</strong>: Enter the amount of USDC you wish to stake. Note that the
                          minimum staking amount is 10 USDC.
                        </li>
                        <li>
                          <strong>Review Rewards Estimate</strong>: Before proceeding, review the estimated rewards
                          information showing your expected daily rewards and total rewards over the 200-day period.
                        </li>
                        <li>
                          <strong>Approve Token Spend (First-time only)</strong>: If this is your first time staking,
                          you'll need to approve the USDC token spend by confirming a transaction in your wallet.
                        </li>
                        <li>
                          <strong>Confirm Staking</strong>: Click the "Stake USDC" button and confirm the transaction in
                          your wallet.
                        </li>
                        <li>
                          <strong>Track Your Stake</strong>: Once the transaction is confirmed, you'll see your staked
                          amount and pending rewards in the "Your Staking Stats" section.
                        </li>
                      </ol>
                      <div className="rounded-md border border-border p-4">
                        <div className="flex items-center space-x-2">
                          <div className="rounded-full bg-primary/20 p-1 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <line x1="12" y1="8" x2="12" y2="12" />
                              <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                          </div>
                          <p className="text-sm font-medium">Important Notes</p>
                        </div>
                        <div className="mt-2 text-sm">
                          <ul className="list-disc space-y-1 pl-5">
                            <li>The staking period is 200 days</li>
                            <li>You earn rewards at a rate of 0.35% daily (approximately 70% APR)</li>
                            <li>Rewards begin accruing immediately after staking</li>
                            <li>You can stake multiple times and on multiple networks</li>
                            <li>Gas fees vary depending on the network you choose</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section id="rewards" className="scroll-mt-16">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">Collecting Rewards</CardTitle>
                      <CardDescription>How to view and collect your staking rewards</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-foreground">
                      <p>
                        Stable Vault allows you to collect your staking rewards at any time. Here's how to monitor and
                        collect your rewards:
                      </p>
                      <h3 className="mt-4 font-semibold">Viewing Your Rewards</h3>
                      <ol className="list-decimal space-y-2 pl-5">
                        <li>
                          Connect your wallet and navigate to the "Your Staking Stats" section on the Stake tab or the
                          "Rewards" tab.
                        </li>
                        <li>
                          You'll see your total staked amount and pending rewards across all chains, as well as a
                          breakdown by individual chain.
                        </li>
                        <li>
                          The "Daily Yield" tab in the Rewards section shows a detailed breakdown of your daily rewards
                          generation based on your staked amounts.
                        </li>
                      </ol>

                      <h3 className="mt-4 font-semibold">Collecting Your Rewards</h3>
                      <ol className="list-decimal space-y-2 pl-5">
                        <li>
                          To collect rewards, navigate to the "Your Staking Stats" section and select the tab for the
                          blockchain network you want to collect rewards from.
                        </li>
                        <li>
                          Click the "Collect [Amount] USDC" button for the specific chain. If you have no pending
                          rewards, the button will be disabled.
                        </li>
                        <li>Confirm the transaction in your wallet.</li>
                        <li>
                          Once the transaction is confirmed, your rewards will be transferred to your wallet, and the
                          collection will be recorded in your rewards history.
                        </li>
                      </ol>

                      <h3 className="mt-4 font-semibold">Rewards History</h3>
                      <ol className="list-decimal space-y-2 pl-5">
                        <li>
                          To view your complete rewards history, navigate to the "Rewards" tab and select "Collected
                          Rewards".
                        </li>
                        <li>
                          This section displays a chronological list of all your reward collections, including the date,
                          time, blockchain network, and amount collected.
                        </li>
                        <li>
                          You can also view daily yield generation information in the "Daily Yield" tab to track how
                          your rewards are accruing over time.
                        </li>
                      </ol>

                      <div className="rounded-md border border-border p-4">
                        <div className="flex items-center space-x-2">
                          <div className="rounded-full bg-primary/20 p-1 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </div>
                          <p className="text-sm font-medium">Pro Tips</p>
                        </div>
                        <div className="mt-2 text-sm">
                          <ul className="list-disc space-y-1 pl-5">
                            <li>
                              Consider gas fees when collecting rewards - it may be more efficient to collect larger
                              amounts less frequently
                            </li>
                            <li>
                              You can reinvest your collected rewards by staking them again to compound your returns
                            </li>
                            <li>
                              Rewards collection is separate for each blockchain network - you need to collect from each
                              network individually
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section id="referrals" className="scroll-mt-16">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">Referral Program</CardTitle>
                      <CardDescription>How to participate in the Stable Vault referral program</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-foreground">
                      <p>
                        Stable Vault offers a lucrative referral program that rewards you with 2% of the deposit amount
                        for any wallet that uses your referral link to make a deposit. Here's everything you need to
                        know about the referral program:
                      </p>

                      <h3 className="mt-4 font-semibold">How the Referral Program Works</h3>
                      <ol className="list-decimal space-y-2 pl-5">
                        <li>
                          <strong>Generating Your Referral Link</strong>: Connect your wallet and navigate to the
                          "Referrals" tab. Your unique referral link will be automatically generated based on your
                          wallet address.
                        </li>
                        <li>
                          <strong>Sharing Your Link</strong>: Use the copy button to copy your referral link, or share
                          it directly via the social sharing buttons (Facebook, Twitter, Email).
                        </li>
                        <li>
                          <strong>Earning Rewards</strong>: When someone uses your referral link to connect their wallet
                          and stake USDC, you'll earn 2% of their deposit amount as a referral reward.
                        </li>
                        <li>
                          <strong>Tracking Referrals</strong>: The referrals tab displays detailed information about
                          your referrals, including the referred wallet address, date, staked amount, your earnings, and
                          the status of the referral.
                        </li>
                        <li>
                          <strong>Claiming Rewards</strong>: Accumulated referral rewards can be claimed by clicking the
                          "Claim Rewards" button in the referral dashboard.
                        </li>
                      </ol>

                      <h3 className="mt-4 font-semibold">Referral Statistics and History</h3>
                      <p>
                        The referral dashboard provides comprehensive statistics about your referral performance,
                        including:
                      </p>
                      <ul className="list-disc space-y-2 pl-5">
                        <li>Total number of referrals</li>
                        <li>Number of active referrals</li>
                        <li>Total earnings from referrals</li>
                        <li>Claimable rewards amount</li>
                        <li>Total claimed rewards</li>
                      </ul>

                      <p>
                        Additionally, you can view your complete claim history in the "Claim History" tab, which shows
                        the date and amount of each referral reward claim.
                      </p>

                      <div className="rounded-md border border-border p-4">
                        <div className="flex items-center space-x-2">
                          <div className="rounded-full bg-primary/20 p-1 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <line x1="12" y1="8" x2="12" y2="12" />
                              <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                          </div>
                          <p className="text-sm font-medium">Important Notes</p>
                        </div>
                        <div className="mt-2 text-sm">
                          <ul className="list-disc space-y-1 pl-5">
                            <li>
                              The referral reward is 2% of the deposit amount, not the rewards earned by the referred
                              user
                            </li>
                            <li>Rewards are earned once the referred user successfully stakes USDC</li>
                            <li>There is no limit to how many users you can refer</li>
                            <li>
                              You must claim your referral rewards manually - they are not automatically sent to your
                              wallet
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section id="dashboard" className="scroll-mt-16">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">Understanding the Dashboard</CardTitle>
                      <CardDescription>How to interpret and use the Stable Vault dashboard</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-foreground">
                      <p>
                        The Stable Vault dashboard provides a comprehensive overview of your staking activities,
                        rewards, and platform metrics. Here's a breakdown of the various dashboard elements:
                      </p>

                      <h3 className="mt-4 font-semibold">Main Dashboard Sections</h3>
                      <ol className="list-decimal space-y-4 pl-5">
                        <li>
                          <strong>TVL Dashboard</strong>: Displays the Total Value Locked in the platform, daily rewards
                          being generated, and total rewards distributed to date. This section also includes visual
                          charts showing TVL trends, distribution across chains, and growth patterns.
                        </li>
                        <li>
                          <strong>Stake Tab</strong>: Contains the staking form, your staking statistics, and reward
                          collection options. This is where you'll perform most of your staking actions.
                        </li>
                        <li>
                          <strong>Rewards Tab</strong>: Shows your complete rewards history, including collected rewards
                          and daily yield generation breakdown.
                        </li>
                        <li>
                          <strong>Referrals Tab</strong>: Provides access to your referral link, referral statistics,
                          and reward claiming functionality.
                        </li>
                        <li>
                          <strong>Wallet Section</strong>: Displays your connected wallet information, referral earnings
                          summary, and staking details.
                        </li>
                      </ol>

                      <h3 className="mt-4 font-semibold">Key Elements and How to Use Them</h3>
                      <ul className="list-disc space-y-3 pl-5">
                        <li>
                          <strong>Network Selection Dropdown</strong>: Used to select which blockchain network you want
                          to stake on. Each network can have different staked amounts and rewards.
                        </li>
                        <li>
                          <strong>Staking Form</strong>: Enter the amount of USDC you wish to stake and review the
                          estimated rewards before confirming.
                        </li>
                        <li>
                          <strong>Your Staking Stats</strong>: Shows your total staked amount, pending rewards, and a
                          breakdown by chain. Use the tabs to switch between different chains and collect rewards.
                        </li>
                        <li>
                          <strong>Rewards History</strong>: A tabular view of all your reward collections, including
                          date, time, chain, and amount.
                        </li>
                        <li>
                          <strong>Daily Yield</strong>: Tracks your daily yield generation based on staked amounts,
                          showing which rewards have been claimed and which are pending.
                        </li>
                        <li>
                          <strong>Referral Dashboard</strong>: Displays your referral link, statistics, referral list,
                          and claim history. Use the "Claim Rewards" button to claim accumulated referral rewards.
                        </li>
                      </ul>

                      <div className="rounded-md border border-border p-4">
                        <div className="flex items-center space-x-2">
                          <div className="rounded-full bg-primary/20 p-1 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </div>
                          <p className="text-sm font-medium">Navigation Tips</p>
                        </div>
                        <div className="mt-2 text-sm">
                          <ul className="list-disc space-y-1 pl-5">
                            <li>
                              Use the tabs to switch between different sections of the dashboard (Stake, Rewards,
                              Referrals)
                            </li>
                            <li>
                              Charts in the TVL dashboard are interactive - hover over data points for more details
                            </li>
                            <li>
                              The sidebar wallet section provides quick access to your connection status and key metrics
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section id="tvl" className="scroll-mt-16">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">TVL & Analytics</CardTitle>
                      <CardDescription>Understanding the platform's metrics and data visualizations</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-foreground">
                      <p>
                        Stable Vault provides comprehensive analytics through the TVL Dashboard, helping you understand
                        platform performance and growth. Here's a guide to interpreting these data visualizations:
                      </p>

                      <h3 className="mt-4 font-semibold">TVL Dashboard Components</h3>
                      <ol className="list-decimal space-y-3 pl-5">
                        <li>
                          <strong>Key Metrics</strong>:
                          <ul className="list-disc space-y-1 pl-5 pt-2">
                            <li>
                              <strong>Total Value Locked (TVL)</strong>: The total amount of USDC staked across all
                              chains
                            </li>
                            <li>
                              <strong>Daily Rewards</strong>: Total rewards being generated daily across the platform
                            </li>
                            <li>
                              <strong>Total Distributed</strong>: Cumulative rewards distributed since platform launch
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>TVL Trend Chart</strong>: An area chart showing how the Total Value Locked has changed
                          over time. The blue line represents the total USDC locked in the platform, with the shaded
                          area below providing visual emphasis on growth trends.
                        </li>
                        <li>
                          <strong>Distribution Chart</strong>: A pie chart showing how the TVL is distributed across the
                          three blockchain networks (Base Chain, BNB Chain, and Sonic Chain). Each segment represents
                          the percentage of total funds on each chain.
                        </li>
                        <li>
                          <strong>Daily Rewards Chart</strong>: A bar chart displaying the daily rewards generated on
                          each blockchain network. The height of each bar represents the amount of rewards.
                        </li>
                        <li>
                          <strong>TVL Growth Chart</strong>: A stacked bar chart showing how TVL has grown over time,
                          with a breakdown by chain. Each colored segment in the stack represents a different blockchain
                          network.
                        </li>
                        <li>
                          <strong>Chain Distribution List</strong>: A detailed breakdown of each chain's TVL and daily
                          rewards generation, shown at the bottom of the dashboard.
                        </li>
                      </ol>

                      <h3 className="mt-4 font-semibold">How to Interpret the Data</h3>
                      <ul className="list-disc space-y-2 pl-5">
                        <li>
                          <strong>Growth Trends</strong>: The TVL Trend chart helps you identify overall growth
                          patterns. An upward trend indicates increasing platform adoption.
                        </li>
                        <li>
                          <strong>Chain Popularity</strong>: The Distribution chart shows which chains are most popular
                          among users. Larger segments indicate higher usage.
                        </li>
                        <li>
                          <strong>Reward Efficiency</strong>: The Daily Rewards chart helps you compare reward
                          generation across different chains, potentially guiding your staking decisions.
                        </li>
                        <li>
                          <strong>Historical Growth</strong>: The TVL Growth chart shows how the platform has grown over
                          time and how each chain has contributed to that growth.
                        </li>
                      </ul>

                      <div className="rounded-md border border-border p-4">
                        <div className="flex items-center space-x-2">
                          <div className="rounded-full bg-primary/20 p-1 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <line x1="12" y1="8" x2="12" y2="12" />
                              <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                          </div>
                          <p className="text-sm font-medium">Chart Interaction Tips</p>
                        </div>
                        <div className="mt-2 text-sm">
                          <ul className="list-disc space-y-1 pl-5">
                            <li>Hover over any data point to see exact values</li>
                            <li>Click on legend items to toggle the visibility of specific data series</li>
                            <li>
                              Use the tabs to switch between different chart views (TVL Trend, Distribution, Daily
                              Rewards, TVL Growth)
                            </li>
                            <li>Charts automatically update as new data becomes available</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section id="technical" className="scroll-mt-16">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">Technical Architecture</CardTitle>
                      <CardDescription>
                        Understanding the technical underpinnings of the Stable Vault platform
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-foreground">
                      <p>
                        Stable Vault is built on a robust technical architecture designed for security, scalability, and
                        cross-chain functionality. Here's an overview of the key technical components:
                      </p>

                      <h3 className="mt-4 font-semibold">Core Components</h3>
                      <ol className="list-decimal space-y-3 pl-5">
                        <li>
                          <strong>Smart Contracts</strong>: The platform is powered by smart contracts deployed on
                          multiple blockchain networks:
                          <ul className="list-disc space-y-1 pl-5 pt-2">
                            <li>
                              <strong>Staking Contract</strong>: Manages deposits, rewards calculation, and withdrawals
                            </li>
                            <li>
                              <strong>Referral Contract</strong>: Tracks referrals and manages referral rewards
                            </li>
                            <li>
                              <strong>Token Interface</strong>: Interacts with the USDC token contract on each supported
                              chain
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>Front-end Application</strong>: A responsive React application that provides the user
                          interface for interacting with the platform's smart contracts.
                        </li>
                        <li>
                          <strong>Cross-Chain Bridge Integration</strong>: Integration with cross-chain bridges to
                          facilitate communication between different blockchain networks.
                        </li>
                        <li>
                          <strong>Data Indexing Service</strong>: Indexes blockchain data to provide real-time analytics
                          and historical information.
                        </li>
                        <li>
                          <strong>Web3 Provider</strong>: Connects the front-end application to blockchain networks
                          through wallet interfaces.
                        </li>
                      </ol>

                      <h3 className="mt-4 font-semibold">Blockchain Networks</h3>
                      <p>Stable Vault operates on three blockchain networks:</p>
                      <ul className="list-disc space-y-2 pl-5">
                        <li>
                          <strong>Base Chain</strong>: An Ethereum Layer 2 scaling solution offering low fees and high
                          throughput
                        </li>
                        <li>
                          <strong>BNB Chain</strong>: Binance's blockchain network known for its low transaction costs
                          and high transaction speed
                        </li>
                        <li>
                          <strong>Sonic Chain</strong>: A high-performance blockchain optimized for DeFi applications
                        </li>
                      </ul>

                      <div className="rounded-md border border-border p-4">
                        <div className="flex items-center space-x-2">
                          <div className="rounded-full bg-primary/20 p-1 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </div>
                          <p className="text-sm font-medium">For Developers</p>
                        </div>
                        <div className="mt-2 text-sm">
                          <ul className="list-disc space-y-1 pl-5">
                            <li>
                              Smart contract source code is available for review on blockchain explorers for each
                              network
                            </li>
                            <li>
                              The platform API is documented for developers who wish to build integrations with Stable
                              Vault
                            </li>
                            <li>
                              A comprehensive technical whitepaper is available detailing the mathematical models for
                              reward calculation and distribution
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section id="risks" className="scroll-mt-16">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">Risk Insight: Know the Challenges</CardTitle>
                      <CardDescription>
                        Understanding the risks associated with concentrated liquidity provision
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-foreground">
                      <p>
                        While Stable Vault is designed to provide high yields with minimal risk to users, we believe in
                        full transparency about the underlying mechanisms that generate these returns. Our team manages
                        concentrated liquidity positions to generate the yields paid to stakers, and it's important to
                        understand the challenges associated with this strategy.
                      </p>

                      <h3 className="mt-4 font-semibold">Impermanent Loss</h3>
                      <p>
                        Concentrated liquidity providers encounter impermanent loss when the relative prices of assets
                        in their pool fluctuate, potentially yielding fewer total assets compared to holding them
                        independently. By focusing liquidity within a tight price range, providers face heightened
                        exposure to price swings, intensifying the impact of market volatility.
                      </p>

                      <h3 className="mt-4 font-semibold">Capital Requirements</h3>
                      <p>
                        Engaging in concentrated liquidity demands significant capital, as providers must allocate
                        substantial amounts of both assets at precise price points. This larger investment heightens
                        both potential gains and risks, especially in turbulent markets where rapid price shifts can
                        erode asset value.
                      </p>

                      <h3 className="mt-4 font-semibold">Platform and Opportunity Risks</h3>
                      <p>
                        Platform-related risks, such as technical glitches or security vulnerabilities, further threaten
                        invested capital. Moreover, tying up funds in concentrated liquidity may limit opportunities to
                        capitalize on wider market trends.
                      </p>

                      <div className="rounded-md border border-border p-4 mt-4">
                        <div className="flex items-center space-x-2">
                          <div className="rounded-full bg-primary/20 p-1 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <line x1="12" y1="8" x2="12" y2="12" />
                              <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                          </div>
                          <p className="text-sm font-medium">Important Note</p>
                        </div>
                        <div className="mt-2 text-sm">
                          <p>
                            While concentrated liquidity can deliver enhanced returns, it carries elevated risks,
                            including asset depreciation and capital erosion. Our experienced team actively manages
                            these risks to provide stable returns to our users.
                          </p>
                          <p className="mt-2">
                            <strong>How Stable Vault Protects You:</strong> As a Stable Vault user, you're shielded from
                            these direct risks. Your principal is guaranteed to be returned at the end of the staking
                            period, and our team absorbs the risks associated with concentrated liquidity management.
                            This allows you to enjoy high yields without the complexity and risks of direct DeFi
                            participation.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              </div>

              <div className="mt-12 flex items-center justify-between">
                <Link href="/faq" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
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
