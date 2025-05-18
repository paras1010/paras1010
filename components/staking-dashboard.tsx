"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import StakingForm from "@/components/staking-form"
import RewardsHistory from "@/components/rewards-history"
import StakingStats from "@/components/staking-stats"
import WalletConnect from "@/components/wallet-connect"
import ReferralSystem from "@/components/referral-system"
import TVLDashboard from "@/components/tvl-dashboard"

export default function StakingDashboard() {
  const [connected, setConnected] = useState(false)
  const [activeChain, setActiveChain] = useState<string | null>(null)
  const [stakedAmount, setStakedAmount] = useState<Record<string, number>>({
    "Base Chain": 1250,
    "BNB Chain": 875,
    "Sonic Chain": 625,
  })
  const [rewards, setRewards] = useState<Record<string, number>>({
    "Base Chain": 4.375,
    "BNB Chain": 3.0625,
    "Sonic Chain": 2.1875,
  })
  const [rewardsHistory, setRewardsHistory] = useState<Array<{ date: Date; amount: number; chain: string }>>([
    {
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      amount: 4.375,
      chain: "Base Chain",
    },
    {
      date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
      amount: 3.0625,
      chain: "BNB Chain",
    },
    {
      date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), // 6 days ago
      amount: 2.1875,
      chain: "Sonic Chain",
    },
  ])

  const handleConnect = (status: boolean) => {
    setConnected(status)
  }

  const handleStake = (amount: number, chain: string) => {
    if (!connected) return

    setStakedAmount((prev) => ({
      ...prev,
      [chain]: prev[chain] + amount,
    }))

    // Calculate initial rewards (would be handled by smart contract in real implementation)
    const dailyReward = amount * 0.0035 // 0.35% daily APR
    setRewards((prev) => ({
      ...prev,
      [chain]: prev[chain] + dailyReward,
    }))
  }

  const handleCollectRewards = (chain: string) => {
    if (!connected || rewards[chain] <= 0) return

    // Add to history
    setRewardsHistory((prev) => [
      ...prev,
      {
        date: new Date(),
        amount: rewards[chain],
        chain,
      },
    ])

    // Reset rewards for this chain
    setRewards((prev) => ({
      ...prev,
      [chain]: 0,
    }))
  }

  return (
    <div className="container py-10">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Stable Vault</h1>
        <p className="text-muted-foreground">
          Stake your USDC tokens across three different blockchain networks with a 0.35% daily APR (127.75% over the
          200-day period). Your initial investment is returned when your stake expires.
        </p>
      </div>

      {/* TVL Dashboard */}
      <div className="mb-8">
        <TVLDashboard stakedAmount={stakedAmount} />
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Tabs defaultValue="stake" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-secondary/20">
              <TabsTrigger value="stake">Stake</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
              <TabsTrigger value="referrals">Referrals</TabsTrigger>
            </TabsList>
            <TabsContent value="stake" className="space-y-4">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Stake USDC</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Stake your USDC tokens for 200 days and earn 0.35% daily APR.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!connected ? (
                    <div className="flex flex-col items-center justify-center py-8">
                      <p className="mb-4 text-center text-muted-foreground">Connect your wallet to start staking</p>
                      <WalletConnect onConnect={handleConnect} />
                    </div>
                  ) : (
                    <StakingForm onStake={handleStake} />
                  )}
                </CardContent>
              </Card>

              <StakingStats
                stakedAmount={stakedAmount}
                rewards={rewards}
                onCollectRewards={handleCollectRewards}
                connected={connected}
              />
            </TabsContent>
            <TabsContent value="rewards">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Rewards History</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    View your collected rewards history across all chains.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!connected ? (
                    <div className="flex flex-col items-center justify-center py-8">
                      <p className="mb-4 text-center text-muted-foreground">Connect your wallet to view rewards</p>
                      <WalletConnect onConnect={handleConnect} />
                    </div>
                  ) : (
                    <RewardsHistory history={rewardsHistory} stakedAmount={stakedAmount} />
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="referrals">
              <ReferralSystem
                connected={connected}
                walletAddress={connected ? "0x7a16ff8270133f063aab6c9977183d9e72835428" : ""}
              />
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Wallet</CardTitle>
              <CardDescription className="text-muted-foreground">Connect your wallet to stake USDC</CardDescription>
            </CardHeader>
            <CardContent>
              <WalletConnect onConnect={handleConnect} />
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-4">
              <div className="w-full">
                <h4 className="mb-2 text-sm font-medium text-foreground">Staking Details</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Staking Period</span>
                    <span className="text-foreground">200 days</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Daily APR</span>
                    <span className="text-foreground">0.35%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Total APR</span>
                    <span className="text-foreground">127.75%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Supported Networks</span>
                    <span className="text-foreground">3</span>
                  </li>
                </ul>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
