"use client"

import { useState, useEffect } from "react"
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
import DepositForm from "@/components/deposit-form"
import WithdrawalForm from "@/components/withdrawal-form"
import DepositsTable from "@/components/deposits-table"
import AnimatedBackground from "@/components/animated-background"
import FloatingElements from "@/components/floating-elements"
import GradientOrbs from "@/components/gradient-orbs"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Lock, TrendingDown } from "lucide-react"

// Generate a unique ID
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

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

  // Track staking dates for each deposit
  const [stakingDates, setStakingDates] = useState<Record<string, Date>>({
    "Base Chain": new Date(Date.now() - 160 * 24 * 60 * 60 * 1000), // 160 days ago (eligible for early withdrawal)
    "BNB Chain": new Date(Date.now() - 120 * 24 * 60 * 60 * 1000), // 120 days ago
    "Sonic Chain": new Date(Date.now() - 80 * 24 * 60 * 60 * 1000), // 80 days ago
  })

  // Track individual deposits
  const [deposits, setDeposits] = useState<
    Array<{
      id: string
      chain: string
      amount: number
      depositDate: Date
      rewards: number
      status: "locked" | "earlyWithdrawal" | "mature"
    }>
  >([
    {
      id: generateId(),
      chain: "Base Chain",
      amount: 1000,
      depositDate: new Date(Date.now() - 160 * 24 * 60 * 60 * 1000), // 160 days ago
      rewards: 3.5,
      status: "earlyWithdrawal",
    },
    {
      id: generateId(),
      chain: "BNB Chain",
      amount: 750,
      depositDate: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000), // 120 days ago
      rewards: 2.625,
      status: "locked",
    },
    {
      id: generateId(),
      chain: "Sonic Chain",
      amount: 500,
      depositDate: new Date(Date.now() - 80 * 24 * 60 * 60 * 1000), // 80 days ago
      rewards: 1.75,
      status: "locked",
    },
    {
      id: generateId(),
      chain: "Base Chain",
      amount: 250,
      depositDate: new Date(Date.now() - 210 * 24 * 60 * 60 * 1000), // 210 days ago (mature)
      rewards: 0.875,
      status: "mature",
    },
  ])

  // Update deposit statuses based on their age
  useEffect(() => {
    const updatedDeposits = deposits.map((deposit) => {
      const daysStaked = Math.floor((Date.now() - deposit.depositDate.getTime()) / (24 * 60 * 60 * 1000))
      let status: "locked" | "earlyWithdrawal" | "mature" = "locked"

      if (daysStaked >= 200) {
        status = "mature"
      } else if (daysStaked >= 150) {
        status = "earlyWithdrawal"
      }

      return {
        ...deposit,
        status,
      }
    })

    setDeposits(updatedDeposits)
  }, [])

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

    // Add new deposit
    const newDeposit = {
      id: generateId(),
      chain,
      amount,
      depositDate: new Date(),
      rewards: dailyReward,
      status: "locked" as const,
    }

    setDeposits((prev) => [...prev, newDeposit])
  }

  const handleDeposit = (amount: number, chain: string) => {
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

    // Add new deposit
    const newDeposit = {
      id: generateId(),
      chain,
      amount,
      depositDate: new Date(),
      rewards: dailyReward,
      status: "locked" as const,
    }

    setDeposits((prev) => [...prev, newDeposit])
  }

  const handleWithdraw = (amount: number, chain: string, isEarly: boolean) => {
    if (!connected) return

    // Calculate withdrawal amount
    let withdrawalAmount = amount
    if (isEarly) {
      // Apply 15% fee for early withdrawal
      withdrawalAmount = amount * 0.85
    }

    // Update staked amount
    setStakedAmount((prev) => ({
      ...prev,
      [chain]: Math.max(0, prev[chain] - amount),
    }))

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

  const handleWithdrawDeposit = (depositId: string, isEarly: boolean) => {
    if (!connected) return

    // Find the deposit
    const deposit = deposits.find((d) => d.id === depositId)
    if (!deposit) return

    // Calculate withdrawal amount
    let withdrawalAmount = deposit.amount
    if (isEarly) {
      // Apply 15% fee for early withdrawal
      withdrawalAmount = deposit.amount * 0.85
    }

    // Update staked amount
    setStakedAmount((prev) => ({
      ...prev,
      [deposit.chain]: Math.max(0, prev[deposit.chain] - deposit.amount),
    }))

    // Add to history
    setRewardsHistory((prev) => [
      ...prev,
      {
        date: new Date(),
        amount: deposit.rewards,
        chain: deposit.chain,
      },
    ])

    // Remove the deposit
    setDeposits((prev) => prev.filter((d) => d.id !== depositId))
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Layers */}
      <AnimatedBackground />
      <GradientOrbs />
      <FloatingElements />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container py-20">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold text-white mb-6 animate-glow">Welcome to Stable Vault</h1>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl">
              Your secure gateway to earning steady yield from stablecoins.
            </p>
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg rounded-lg hover-glow smooth-transition"
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="container mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-card hover-scale smooth-transition">
              <CardContent className="p-6">
                <div className="text-blue-300 text-sm mb-2">Total Value Locked</div>
                <div className="text-white text-3xl font-bold flex items-center">
                  ${(totalValueLocked * 8.7).toLocaleString()}
                  <TrendingDown className="ml-2 h-5 w-5 text-blue-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-scale smooth-transition">
              <CardContent className="p-6">
                <div className="text-blue-300 text-sm mb-2">Daily Rewards</div>
                <div className="text-white text-3xl font-bold">
                  {Math.floor(totalDailyRewards * 4200).toLocaleString()}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-scale smooth-transition">
              <CardContent className="p-6">
                <div className="text-blue-300 text-sm mb-2">Average APY</div>
                <div className="text-white text-3xl font-bold">6.72%</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="container pb-20">
          <Tabs defaultValue="stake" className="w-full">
            <TabsList className="flex w-full glass-effect rounded-lg overflow-hidden mb-6">
              <TabsTrigger value="stake" className="flex-1 text-white py-4 smooth-transition">
                Stake
              </TabsTrigger>
              <TabsTrigger value="deposits" className="flex-1 text-white py-4 smooth-transition">
                Deposits
              </TabsTrigger>
              <TabsTrigger value="rewards" className="flex-1 text-white py-4 smooth-transition">
                Rewards
              </TabsTrigger>
              <TabsTrigger value="withdraw" className="flex-1 text-white py-4 smooth-transition">
                Withdraw
              </TabsTrigger>
              <TabsTrigger value="referrals" className="flex-1 text-white py-4 smooth-transition">
                Referrals
              </TabsTrigger>
            </TabsList>

            {/* Stake Tab */}
            <TabsContent value="stake">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Stake Section */}
                <Card className="glass-card hover-scale smooth-transition">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Stake</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center text-blue-200">
                        <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 animate-glow">
                          1
                        </span>
                        Connect your wallet
                      </div>
                      <div className="flex items-center text-blue-200">
                        <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 animate-glow">
                          2
                        </span>
                        Select a chain
                      </div>
                      <div className="flex items-center text-blue-200">
                        <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 animate-glow">
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
                <Card className="glass-card hover-scale smooth-transition">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Rewards</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center py-8">
                    <div className="bg-teal-600/20 rounded-full p-8 mb-6 animate-glow">
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
                <Card className="glass-card hover-scale smooth-transition">
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
                            <div
                              className="w-3 h-3 rounded-full mr-2 animate-glow"
                              style={{ backgroundColor: CHAIN_COLORS[chain] }}
                            />
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

              <div className="mt-8">
                <TVLDashboard stakedAmount={stakedAmount} />
              </div>
            </TabsContent>

            {/* Deposits Tab */}
            <TabsContent value="deposits">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2">
                  <Card className="glass-card hover-scale smooth-transition">
                    <CardHeader>
                      <CardTitle className="text-white text-2xl">Your Deposits</CardTitle>
                      <CardDescription className="text-blue-200">
                        Overview of all your staked USDC deposits
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {!connected ? (
                        <div className="flex flex-col items-center justify-center py-8">
                          <p className="mb-4 text-center text-blue-300">Connect your wallet to view deposits</p>
                          <WalletConnect onConnect={handleConnect} />
                        </div>
                      ) : (
                        <DepositsTable deposits={deposits} onWithdraw={handleWithdrawDeposit} connected={connected} />
                      )}
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="glass-card hover-scale smooth-transition">
                    <CardHeader>
                      <CardTitle className="text-white text-2xl">New Deposit</CardTitle>
                      <CardDescription className="text-blue-200">Stake additional USDC to earn rewards</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {!connected ? (
                        <div className="flex flex-col items-center justify-center py-8">
                          <p className="mb-4 text-center text-blue-300">Connect your wallet to make deposits</p>
                          <WalletConnect onConnect={handleConnect} />
                        </div>
                      ) : (
                        <DepositForm onDeposit={handleDeposit} connected={connected} />
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Rewards Tab */}
            <TabsContent value="rewards">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card className="glass-card hover-scale smooth-transition">
                    <CardHeader>
                      <CardTitle className="text-white text-2xl">Rewards History</CardTitle>
                      <CardDescription className="text-blue-200">
                        View your collected rewards history across all chains
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
                </div>

                <div>
                  <StakingStats
                    stakedAmount={stakedAmount}
                    rewards={rewards}
                    onCollectRewards={handleCollectRewards}
                    connected={connected}
                  />
                </div>
              </div>
            </TabsContent>

            {/* Withdraw Tab */}
            <TabsContent value="withdraw">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card className="glass-card hover-scale smooth-transition">
                    <CardHeader>
                      <CardTitle className="text-white text-2xl">Withdrawal Options</CardTitle>
                      <CardDescription className="text-blue-200">
                        Choose between normal and early withdrawal
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {!connected ? (
                        <div className="flex flex-col items-center justify-center py-8">
                          <p className="mb-4 text-center text-blue-300">Connect your wallet to make withdrawals</p>
                          <WalletConnect onConnect={handleConnect} />
                        </div>
                      ) : (
                        <WithdrawalForm
                          onWithdraw={handleWithdraw}
                          connected={connected}
                          stakedAmount={stakedAmount}
                          stakingDates={stakingDates}
                        />
                      )}
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="glass-card hover-scale smooth-transition">
                    <CardHeader>
                      <CardTitle className="text-white text-2xl">Withdrawal Terms</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium text-white">Normal Withdrawal</h3>
                        <p className="text-blue-200 text-sm">
                          After the full 200-day staking period, you can withdraw your entire initial deposit plus all
                          earned rewards without any fees.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-medium text-yellow-300">Early Withdrawal</h3>
                        <p className="text-blue-200 text-sm">
                          After 150 days, you can withdraw your funds early with a 15% fee on your initial deposit. You
                          will receive 85% of your initial deposit plus all earned rewards.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-medium text-white">Withdrawal Timeline</h3>
                        <div className="relative pt-6">
                          <div className="absolute left-0 right-0 h-1 bg-slate-700 top-0"></div>
                          <div className="absolute left-0 w-3/4 h-1 bg-teal-600 top-0 animate-shimmer"></div>
                          <div className="absolute left-0 h-3 w-3 rounded-full bg-slate-700 -top-1 animate-glow"></div>
                          <div className="absolute left-3/4 h-3 w-3 rounded-full bg-yellow-500 -top-1 animate-glow"></div>
                          <div className="absolute right-0 h-3 w-3 rounded-full bg-green-500 -top-1 animate-glow"></div>

                          <div className="grid grid-cols-3 text-center text-xs">
                            <div className="text-slate-400">Day 0</div>
                            <div className="text-yellow-400">Day 150</div>
                            <div className="text-green-400">Day 200</div>
                          </div>
                          <div className="grid grid-cols-3 text-center text-xs mt-1">
                            <div className="text-slate-400">Deposit</div>
                            <div className="text-yellow-400">
                              Early Withdrawal
                              <br />
                              (15% fee)
                            </div>
                            <div className="text-green-400">
                              Full Maturity
                              <br />
                              (No fee)
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Referrals Tab */}
            <TabsContent value="referrals">
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
