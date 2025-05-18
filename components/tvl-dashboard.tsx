"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  AreaChart,
  Area,
} from "recharts"
import ChainLogo from "@/components/chain-logo"

interface TVLDashboardProps {
  stakedAmount: Record<string, number>
}

export default function TVLDashboard({ stakedAmount }: TVLDashboardProps) {
  // Calculate total value locked
  const totalValueLocked = Object.values(stakedAmount).reduce((sum, amount) => sum + amount, 0)

  // Calculate daily rewards for each chain
  const dailyRewards = Object.entries(stakedAmount).reduce(
    (acc, [chain, amount]) => {
      acc[chain] = amount * 0.0035 // 0.35% daily APR
      return acc
    },
    {} as Record<string, number>,
  )

  // Calculate total daily rewards
  const totalDailyRewards = Object.values(dailyRewards).reduce((sum, amount) => sum + amount, 0)

  // Calculate total rewards distributed (simulated data)
  const totalDistributed = totalValueLocked * 0.0035 * 30 // Simulating ~30 days of operation

  // Prepare data for pie chart
  const pieData = Object.entries(stakedAmount).map(([chain, amount]) => ({
    name: chain,
    value: amount,
  }))

  // Prepare data for bar chart
  const barData = Object.entries(dailyRewards).map(([chain, amount]) => ({
    name: chain,
    rewards: amount,
  }))

  // Updated colors for the charts - using chain-specific colors
  // Base Chain: Powder blue, BNB Chain: Yellow, Sonic Chain: White
  const CHAIN_COLORS = {
    "Base Chain": "#b0e0e6", // Powder blue
    "BNB Chain": "#f0c010", // Yellow (slightly muted to work better on dark background)
    "Sonic Chain": "#ffffff", // White
  }

  // Create an array of colors for charts
  const COLORS = Object.values(CHAIN_COLORS)

  // Generate sample TVL growth data
  const generateTVLGrowthData = () => {
    const result = []
    const today = new Date()

    // Generate data for the last 7 days
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)

      // Create growth factors - simulating TVL growth over time
      const growthFactor = 1 + (6 - i) * 0.05 // 5% growth per day

      const baseChainAmount = stakedAmount["Base Chain"] * (growthFactor - 0.1)
      const bnbChainAmount = stakedAmount["BNB Chain"] * growthFactor
      const sonicChainAmount = stakedAmount["Sonic Chain"] * (growthFactor + 0.1)
      const totalAmount = baseChainAmount + bnbChainAmount + sonicChainAmount

      result.push({
        date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        baseChain: baseChainAmount,
        bnbChain: bnbChainAmount,
        sonicChain: sonicChainAmount,
        total: totalAmount,
      })
    }

    return result
  }

  // Generate line chart data for TVL trend
  const generateTVLTrendData = () => {
    const result = []
    const today = new Date()

    // Generate data for the last 30 days with some random fluctuations
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)

      // Random fluctuation between -5% and +8%
      const randomFactor = 0.95 + Math.random() * 0.13

      // Base value with some growth trend
      const baseValue = totalValueLocked * (0.7 + (30 - i) * 0.01) * randomFactor

      result.push({
        date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        tvl: baseValue,
      })
    }

    return result
  }

  const tvlTrendData = generateTVLTrendData()
  const tvlGrowthData = generateTVLGrowthData()

  // Helper function to get chain color
  const getChainColor = (chain: string) => {
    return CHAIN_COLORS[chain] || "#0ea5e9" // Default to blue if chain not found
  }

  return (
    <Card className="w-full bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Total Value Locked (TVL)</CardTitle>
        <CardDescription className="text-muted-foreground">
          Overview of funds locked and rewards distribution
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-secondary/20 p-4">
            <div className="text-sm text-muted-foreground">Total Value Locked</div>
            <div className="mt-1 text-2xl font-bold text-foreground">{totalValueLocked.toFixed(2)} USDC</div>
          </div>
          <div className="rounded-lg border border-border bg-secondary/20 p-4">
            <div className="text-sm text-muted-foreground">Daily Rewards</div>
            <div className="mt-1 text-2xl font-bold text-foreground">{totalDailyRewards.toFixed(4)} USDC</div>
          </div>
          <div className="rounded-lg border border-border bg-secondary/20 p-4">
            <div className="text-sm text-muted-foreground">Total Distributed</div>
            <div className="mt-1 text-2xl font-bold text-foreground">{totalDistributed.toFixed(4)} USDC</div>
          </div>
        </div>

        <Tabs defaultValue="trend" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-secondary/20">
            <TabsTrigger value="trend">TVL Trend</TabsTrigger>
            <TabsTrigger value="distribution">Distribution</TabsTrigger>
            <TabsTrigger value="rewards">Daily Rewards</TabsTrigger>
            <TabsTrigger value="growth">TVL Growth</TabsTrigger>
          </TabsList>

          <TabsContent value="trend" className="h-80 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={tvlTrendData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="tvlGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="date" stroke="#94a3b8" tick={{ fill: "#94a3b8" }} />
                <YAxis
                  stroke="#94a3b8"
                  tick={{ fill: "#94a3b8" }}
                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    borderColor: "#334155",
                    color: "#f8fafc",
                  }}
                  formatter={(value) => [`$${Number(value).toLocaleString()}`, "TVL"]}
                  labelFormatter={(label) => `Date: ${label}`}
                />
                <Area type="monotone" dataKey="tvl" stroke="#0ea5e9" strokeWidth={2} fill="url(#tvlGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="distribution" className="h-80 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={80}
                  fill="#0ea5e9"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getChainColor(entry.name)} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    borderColor: "#334155",
                    color: "#f8fafc",
                  }}
                  formatter={(value) => [`${Number(value).toFixed(2)} USDC`, ""]}
                  labelFormatter={(label) => `Chain: ${label}`}
                />
                <Legend
                  formatter={(value) => (
                    <span className="text-sm font-medium text-foreground flex items-center">
                      <ChainLogo chain={value} size={14} className="mr-1" />
                      {value}
                    </span>
                  )}
                  wrapperStyle={{ color: "#f8fafc" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="rewards" className="h-80 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: "#94a3b8" }} />
                <YAxis stroke="#94a3b8" tick={{ fill: "#94a3b8" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    borderColor: "#334155",
                    color: "#f8fafc",
                  }}
                  formatter={(value) => [`${Number(value).toFixed(4)} USDC`, "Daily Rewards"]}
                />
                <Bar dataKey="rewards" fill="#0ea5e9">
                  {barData.map((entry) => (
                    <Cell key={`cell-${entry.name}`} fill={getChainColor(entry.name)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="growth" className="h-80 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={tvlGrowthData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="date" stroke="#94a3b8" tick={{ fill: "#94a3b8" }} />
                <YAxis stroke="#94a3b8" tick={{ fill: "#94a3b8" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    borderColor: "#334155",
                    color: "#f8fafc",
                  }}
                  formatter={(value) => [`${Number(value).toFixed(2)} USDC`, ""]}
                  labelFormatter={(label) => `Date: ${label}`}
                />
                <Legend
                  wrapperStyle={{ color: "#f8fafc" }}
                  formatter={(value) => (
                    <span className="text-sm font-medium text-foreground flex items-center">
                      <ChainLogo chain={value} size={14} className="mr-1" />
                      {value}
                    </span>
                  )}
                />
                <Bar name="Base Chain" dataKey="baseChain" stackId="a" fill={CHAIN_COLORS["Base Chain"]} />
                <Bar name="BNB Chain" dataKey="bnbChain" stackId="a" fill={CHAIN_COLORS["BNB Chain"]} />
                <Bar name="Sonic Chain" dataKey="sonicChain" stackId="a" fill={CHAIN_COLORS["Sonic Chain"]} />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>

        <div className="mt-6">
          <h4 className="mb-2 text-sm font-medium text-foreground">Chain Distribution</h4>
          <div className="space-y-2">
            {Object.entries(stakedAmount).map(([chain, amount]) => (
              <div key={chain} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full" style={{ backgroundColor: getChainColor(chain) }} />
                  <div className="flex items-center">
                    <ChainLogo chain={chain} size={16} />
                    <span className="text-sm text-foreground">{chain}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-foreground">{amount.toFixed(2)} USDC</span>
                  <span className="text-xs text-muted-foreground">{dailyRewards[chain].toFixed(4)} USDC/day</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
