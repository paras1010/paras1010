"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import StakingForm from "@/components/staking-form"
import RewardsHistory from "@/components/rewards-history"
import StakingStats from "@/components/staking-stats"
import WalletConnect from "@/components/wallet-connect"
import ReferralSystem from "@/components/referral-system"
import TVLDashboard from "@/components/tvl-dashboard"
import ChainLogo from "@/components/chain-logo"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Lock, TrendingDown } from "lucide-react"

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

  // Calculate metrics
  const totalValueLocked = Object.values(stakedAmount).reduce((sum, amount) => sum + amount, 0)
  const totalDailyRewards = Object.values(rewards).reduce((sum, amount) => sum + amount, 0)
  const weeklyRewards = totalDailyRewards * 7

  // Prepare data for pie chart
  const pieData = Object.entries(stakedAmount).map(([chain, amount]) => ({
    name: chain,
    value: amount,
  }))

  const CHAIN_COLORS = {
    "Base Chain": "#0ea5e9", // Blue
    "BNB Chain": "#f0c010", // Yellow
    "Sonic Chain": "#10b981", // Green
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Hero Section */}
      <div className="container py-20">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold text-white mb-6">Welcome to Stable Vault</h1>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl">
            Your secure gateway to earning steady yield from stablecoins.
          </p>
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg rounded-lg">
            Get Started
          </Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="container mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardContent className="p-6">
              <div className="text-blue-300 text-sm mb-2">Total Value Locked</div>
              <div className="text-white text-3xl font-bold flex items-center">
                ${(totalValueLocked * 8.7).toLocaleString()}
                <TrendingDown className="ml-2 h-5 w-5 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardContent className="p-6">
              <div className="text-blue-300 text-sm mb-2">Daily Rewards</div>
              <div className="text-white text-3xl font-bold">
                {Math.floor(totalDailyRewards * 4200).toLocaleString()}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardContent className="p-6">
              <div className="text-blue-300 text-sm mb-2">Average APY</div>
              <div className="text-white text-3xl font-bold">6.72%</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="container pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stake Section */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Stake</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center text-blue-200">
                  <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                    1
                  </span>
                  Connect your wallet
                </div>
                <div className="flex items-center text-blue-200">
                  <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                    2
                  </span>
                  Select a chain
                </div>
                <div className="flex items-center text-blue-200">
                  <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                    3
                  </span>
                  Enter the amount to stake
                </div>
              </div>

              {/* Staking Form */}
              <div className="mt-8">
                {!connected ? (
                  <div className="text-center py-8">
                    <WalletConnect onConnect={handleConnect} />
                  </div>
                ) : (
                  <StakingForm onStake={handleStake} />
                )}
              </div>
            </CardContent>
          </Card>

          {/* Rewards Section */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Rewards</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-8">
              <div className="bg-teal-600/20 rounded-full p-8 mb-6">
                <Lock className="h-16 w-16 text-teal-400" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-teal-400 text-2xl font-bold">$</span>
                </div>
              </div>

              <div className="text-blue-300 text-sm mb-2 flex items-center">
                Estimated Weekly
                <div className="ml-2 w-4 h-4 rounded-full border border-blue-300 flex items-center justify-center">
                  <span className="text-xs">i</span>
                </div>
              </div>
              <div className="text-white text-3xl font-bold">
                {weeklyRewards.toFixed(2)} <span className="text-lg text-blue-300">USD</span>
              </div>
            </CardContent>
          </Card>

          {/* Chain Distribution */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Chain Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      dataKey="value"
                      startAngle={90}
                      endAngle={450}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={CHAIN_COLORS[entry.name]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Legend */}
              <div className="space-y-2 mt-4">
                {Object.entries(stakedAmount).map(([chain, amount]) => (
                  <div key={chain} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: CHAIN_COLORS[chain] }} />
                      <ChainLogo chain={chain} size={16} className="mr-2" />
                      <span className="text-blue-200 text-sm">{chain}</span>
                    </div>
                    <span className="text-white text-sm">{amount.toFixed(0)} USDC</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Tabs for Advanced Features */}
        <div className="mt-16">
          <Tabs defaultValue="stats" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-800/50 border-slate-700">
              <TabsTrigger value="stats" className="text-white">
                Stats
              </TabsTrigger>
              <TabsTrigger value="history" className="text-white">
                History
              </TabsTrigger>
              <TabsTrigger value="referrals" className="text-white">
                Referrals
              </TabsTrigger>
            </TabsList>

            <TabsContent value="stats" className="mt-6">
              <div className="grid gap-6">
                <StakingStats
                  stakedAmount={stakedAmount}
                  rewards={rewards}
                  onCollectRewards={handleCollectRewards}
                  connected={connected}
                />
                <TVLDashboard stakedAmount={stakedAmount} />
              </div>
            </TabsContent>

            <TabsContent value="history" className="mt-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-white">Rewards History</CardTitle>
                  <CardDescription className="text-blue-300">
                    View your collected rewards history across all chains.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!connected ? (
                    <div className="flex flex-col items-center justify-center py-8">
                      <p className="mb-4 text-center text-blue-300">Connect your wallet to view rewards</p>
                      <WalletConnect onConnect={handleConnect} />
                    </div>
                  ) : (
                    <RewardsHistory history={rewardsHistory} stakedAmount={stakedAmount} />
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="referrals" className="mt-6">
              <ReferralSystem
                connected={connected}
                walletAddress={connected ? "0x7a16ff8270133f063aab6c9977183d9e72835428" : ""}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
