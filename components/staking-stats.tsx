"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ChainLogo from "@/components/chain-logo"

interface StakingStatsProps {
  stakedAmount: Record<string, number>
  rewards: Record<string, number>
  onCollectRewards: (chain: string) => void
  connected: boolean
}

export default function StakingStats({ stakedAmount, rewards, onCollectRewards, connected }: StakingStatsProps) {
  const chains = ["Base Chain", "BNB Chain", "Sonic Chain"]

  const totalStaked = Object.values(stakedAmount).reduce((sum, amount) => sum + amount, 0)
  const totalRewards = Object.values(rewards).reduce((sum, amount) => sum + amount, 0)

  if (!connected) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Staking Stats</CardTitle>
        <CardDescription>View your staked amounts and pending rewards</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="rounded-lg border p-4">
            <div className="text-sm text-muted-foreground">Total Staked</div>
            <div className="mt-1 text-2xl font-bold">{totalStaked.toFixed(2)} USDC</div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="text-sm text-muted-foreground">Pending Rewards</div>
            <div className="mt-1 text-2xl font-bold">{totalRewards.toFixed(4)} USDC</div>
          </div>
        </div>

        <Tabs defaultValue={chains[0]}>
          <TabsList className="grid w-full grid-cols-3">
            {chains.map((chain) => (
              <TabsTrigger key={chain} value={chain}>
                <div className="flex items-center">
                  <ChainLogo chain={chain} size={16} className="mr-1" />
                  <span>{chain.split(" ")[0]}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {chains.map((chain) => (
            <TabsContent key={chain} value={chain} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border p-4">
                  <div className="text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <ChainLogo chain={chain} size={16} className="mr-1" />
                      <span>Staked on {chain}</span>
                    </div>
                  </div>
                  <div className="mt-1 text-xl font-bold">{stakedAmount[chain].toFixed(2)} USDC</div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="text-sm text-muted-foreground">Pending Rewards</div>
                  <div className="mt-1 text-xl font-bold">{rewards[chain].toFixed(4)} USDC</div>
                </div>
              </div>

              <Button onClick={() => onCollectRewards(chain)} disabled={rewards[chain] <= 0} className="w-full">
                {rewards[chain] > 0 ? `Collect ${rewards[chain].toFixed(4)} USDC` : "No Rewards to Collect"}
              </Button>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
