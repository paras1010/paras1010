import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "FAQ - Stable Vault",
  description: "Frequently asked questions about the Stable Vault staking platform",
}

export default function FAQPage() {
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
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">Find answers to common questions about Stable Vault</p>
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
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">General Questions</CardTitle>
                      <CardDescription>Basic information about Stable Vault</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>What is Stable Vault?</AccordionTrigger>
                          <AccordionContent>
                            Stable Vault is a decentralized staking platform that allows users to stake USDC tokens
                            across multiple blockchain networks (Base Chain, BNB Chain, and Sonic Chain). Users earn a
                            0.35% daily APR over a 200-day period, resulting in approximately 70% total APR. The
                            platform also features a referral program and comprehensive analytics.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger>
                            How is Stable Vault different from other staking platforms?
                          </AccordionTrigger>
                          <AccordionContent>
                            Stable Vault differentiates itself through its multi-chain approach, allowing users to stake
                            across three different blockchain networks from a single interface. This provides
                            diversification benefits and flexibility. Additionally, the platform offers a higher APR
                            than many competitors, a generous referral program that rewards 2% of deposit amounts, and
                            detailed analytics for tracking performance.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                          <AccordionTrigger>Which blockchain networks does Stable Vault support?</AccordionTrigger>
                          <AccordionContent>
                            Stable Vault currently supports three blockchain networks: Base Chain (an Ethereum Layer 2
                            solution), BNB Chain (Binance's blockchain), and Sonic Chain. Each network offers different
                            characteristics in terms of transaction costs, speed, and ecosystem integration.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                          <AccordionTrigger>Who can use Stable Vault?</AccordionTrigger>
                          <AccordionContent>
                            Stable Vault is open to anyone with a compatible Web3 wallet (such as MetaMask, Coinbase
                            Wallet, or WalletConnect-compatible wallets) and USDC tokens. There are no KYC requirements
                            or geographical restrictions, though users should ensure they comply with their local
                            regulations. The minimum staking amount is 10 USDC.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </section>

                <section id="staking" className="scroll-mt-16">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">Staking & Rewards</CardTitle>
                      <CardDescription>Questions about staking process and rewards</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>What is the staking period?</AccordionTrigger>
                          <AccordionContent>
                            The staking period in Stable Vault is 200 days. During this period, your staked USDC earns a
                            daily APR of 0.35%, which amounts to approximately 127.75% total APR over the full staking
                            period. Your original investment is returned to you when your stake expires.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger>How are rewards calculated?</AccordionTrigger>
                          <AccordionContent>
                            Rewards are calculated at a rate of 0.35% of your staked amount per day. For example, if you
                            stake 1,000 USDC, you'll earn 3.5 USDC in rewards per day (1,000 * 0.0035). Over the 200-day
                            staking period, you would earn approximately 1,277.5 USDC in total rewards (127.75% APR).
                            Your original investment is returned to you when your stake expires, so there is no loss of
                            initial capital.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger>When can I collect my rewards?</AccordionTrigger>
                          <AccordionContent>
                            You can collect your accrued rewards at any time. Unlike some staking platforms that lock
                            rewards until the end of the staking period, Stable Vault allows you to collect your rewards
                            whenever you choose. This gives you the flexibility to either withdraw your earnings or
                            reinvest them to compound your returns.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                          <AccordionTrigger>What is the minimum staking amount?</AccordionTrigger>
                          <AccordionContent>
                            The minimum amount you can stake on Stable Vault is 10 USDC. This minimum applies to each
                            staking transaction. There is no maximum limit on how much you can stake.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                          <AccordionTrigger>Can I stake different amounts on different networks?</AccordionTrigger>
                          <AccordionContent>
                            Yes, you can stake different amounts on each of the supported blockchain networks (Base
                            Chain, BNB Chain, and Sonic Chain). This allows you to diversify your staking across
                            networks based on your preference for each ecosystem, gas fees, or other factors. Each
                            network maintains its own separate staking balance and rewards.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                          <AccordionTrigger>Are there any fees for staking or collecting rewards?</AccordionTrigger>
                          <AccordionContent>
                            Stable Vault does not charge any platform fees for staking or collecting rewards. However,
                            you will need to pay the standard blockchain network transaction fees (gas fees) when
                            interacting with the smart contracts. These fees vary depending on the network and current
                            network congestion.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                          <AccordionTrigger>
                            Can I withdraw my staked USDC before the 200-day period ends?
                          </AccordionTrigger>
                          <AccordionContent>
                            Yes, you can withdraw your staked USDC at any time, but there is an early withdrawal fee of
                            10% of the staked amount if you withdraw before the 200-day period is completed. This fee
                            helps maintain the stability of the staking ecosystem. After the 200-day period, you can
                            withdraw your full staked amount without any penalties.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </section>

                <section id="referrals" className="scroll-mt-16">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">Referral Program</CardTitle>
                      <CardDescription>Questions about the referral system</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>How does the referral program work?</AccordionTrigger>
                          <AccordionContent>
                            The Stable Vault referral program rewards you with 2% of the deposit amount when someone
                            uses your unique referral link to stake USDC. For example, if someone stakes 1,000 USDC
                            using your referral link, you'll earn 20 USDC (2% of 1,000) as a referral reward. These
                            rewards accumulate in your referral balance and can be claimed at any time.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger>How do I get my referral link?</AccordionTrigger>
                          <AccordionContent>
                            To get your referral link, connect your wallet to Stable Vault and navigate to the
                            "Referrals" tab. Your unique referral link will be automatically generated based on your
                            wallet address. You can copy this link using the copy button or share it directly through
                            the social sharing options (Facebook, Twitter, Email).
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger>Is there a limit to how many people I can refer?</AccordionTrigger>
                          <AccordionContent>
                            No, there is no limit to the number of people you can refer to Stable Vault. You can refer
                            as many users as you want and earn referral rewards from each of them. This makes the
                            referral program an excellent opportunity for users with large networks or influence in the
                            cryptocurrency community.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                          <AccordionTrigger>When do I receive my referral rewards?</AccordionTrigger>
                          <AccordionContent>
                            Referral rewards are added to your claimable balance immediately after the referred user
                            successfully stakes USDC using your referral link. However, you need to manually claim these
                            rewards by clicking the "Claim Rewards" button in the referral dashboard. The rewards are
                            not automatically transferred to your wallet.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                          <AccordionTrigger>
                            Do I earn referral rewards from my referrals' ongoing staking activities?
                          </AccordionTrigger>
                          <AccordionContent>
                            No, the referral reward is a one-time 2% of the initial deposit amount made by the referred
                            user. You do not earn ongoing rewards based on the staking rewards earned by your referrals.
                            However, if a referred user makes additional deposits in the future, you will earn the 2%
                            referral reward on those new deposits as well.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                          <AccordionTrigger>Can I track the performance of my referrals?</AccordionTrigger>
                          <AccordionContent>
                            Yes, the referral dashboard provides comprehensive tracking of your referral performance.
                            You can see the total number of referrals, active referrals, total earnings, and a detailed
                            list of all your referrals including their wallet addresses, dates, staked amounts, your
                            earnings, and current status. You can also view your complete claim history in the "Claim
                            History" tab.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </section>

                <section id="wallet" className="scroll-mt-16">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">Wallet & Security</CardTitle>
                      <CardDescription>Questions about wallet connections and security measures</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Which wallets are supported by Stable Vault?</AccordionTrigger>
                          <AccordionContent>
                            Stable Vault supports all major Web3 wallets, including MetaMask, Coinbase Wallet, and any
                            wallet compatible with WalletConnect. This ensures that most users can easily connect to the
                            platform using their preferred wallet solution. Make sure your wallet is configured to
                            support the blockchain networks used by Stable Vault (Base Chain, BNB Chain, and Sonic
                            Chain).
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger>What happens if I disconnect my wallet?</AccordionTrigger>
                          <AccordionContent>
                            Disconnecting your wallet only ends the current session between your wallet and the Stable
                            Vault interface. It does not affect your staked funds or accrued rewards, as these are
                            stored on the blockchain. You can reconnect your wallet at any time to view and manage your
                            stakes and rewards. This is useful for security-conscious users who prefer to disconnect
                            when not actively using the platform.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                          <AccordionTrigger>What happens if I lose access to my wallet?</AccordionTrigger>
                          <AccordionContent>
                            If you lose access to your wallet, Stable Vault cannot help you recover your funds or staked
                            assets. Your staked USDC and rewards are tied to your wallet address on the blockchain. This
                            is why it's crucial to securely back up your wallet's seed phrase or private keys according
                            to the wallet provider's recommendations. With your seed phrase, you can restore access to
                            your wallet and thus your staked assets.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </section>

                <section id="technical" className="scroll-mt-16">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">Technical Questions</CardTitle>
                      <CardDescription>Advanced technical details about the platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>How does Stable Vault work across multiple chains?</AccordionTrigger>
                          <AccordionContent>
                            Stable Vault deploys identical smart contracts on each supported blockchain (Base Chain, BNB
                            Chain, and Sonic Chain). The front-end interface integrates with all these contracts,
                            allowing users to switch between networks and interact with the contracts on each chain.
                            While your staked assets remain separate on each chain, the unified interface makes it easy
                            to manage all your stakes from one place. Each blockchain operates independently, so you'll
                            need to pay transaction fees specific to each network when interacting with it.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger>Are the smart contracts open source and audited?</AccordionTrigger>
                          <AccordionContent>
                            Yes, all Stable Vault smart contracts are open source and publicly available for review on
                            blockchain explorers. The contracts have undergone multiple security audits by reputable
                            third-party security firms. Audit reports are published on the Stable Vault website and
                            GitHub repository. This transparency ensures that the code can be verified by anyone and
                            helps build trust in the platform's security and functionality.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger>How are rewards funded and sustained?</AccordionTrigger>
                          <AccordionContent>
                            Stable Vault generates returns through concentrated liquidity pools managed by our
                            experienced team. The platform's team has over 3 years of experience in concentrated v3
                            farming and is constantly evolving and fine-tuning strategies to maximize returns. Interest
                            payments are made to investors from the profits of these liquidity pools. The system is
                            designed to adapt to changing market conditions to provide consistent high yields while
                            ensuring the security of user funds.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3.5">
                          <AccordionTrigger>What risks are associated with concentrated liquidity?</AccordionTrigger>
                          <AccordionContent>
                            Concentrated liquidity provision involves several risks that our team actively manages: (1)
                            Impermanent loss - when asset price fluctuations result in fewer total assets compared to
                            holding them independently, (2) Capital requirements - significant funds must be allocated
                            at precise price points, (3) Platform risks - technical vulnerabilities in the underlying
                            protocols, and (4) Opportunity costs - funds tied up in liquidity positions cannot be used
                            elsewhere. While these risks exist in the underlying strategy, Stable Vault users are
                            protected as their principal is guaranteed to be returned at the end of the staking period,
                            and our experienced team absorbs these risks.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                          <AccordionTrigger>What happens in case of a smart contract upgrade?</AccordionTrigger>
                          <AccordionContent>
                            When smart contract upgrades are necessary for improvements or new features, Stable Vault
                            follows a careful process: (1) Proposed changes are announced well in advance, (2) A
                            timelock period allows users to review the changes and exit if desired, (3) The upgrade is
                            first deployed to a testnet for thorough testing, (4) After successful testing, the upgrade
                            is implemented on the main networks. The process is designed to be transparent and minimize
                            disruption to users' staked funds.
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
