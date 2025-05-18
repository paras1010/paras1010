"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, DollarSign, Wallet } from "lucide-react"

interface ReferralStatsProps {
  totalReferrals: number
  activeReferrals: number
  totalEarnings: number
  claimableAmount: number
  totalClaimed: number
  onClaimRewards: () => void
}

export default function ReferralStats({
  totalReferrals,
  activeReferrals,
  totalEarnings,
  claimableAmount,
  totalClaimed,
  onClaimRewards,
}: ReferralStatsProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Referrals</p>
              <p className="text-xl font-bold">{totalReferrals}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <Users className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Referrals</p>
              <p className="text-xl font-bold">{activeReferrals}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
              <DollarSign className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Earnings</p>
              <p className="text-xl font-bold">{totalEarnings.toFixed(4)} USDC</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
              <Wallet className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Claimed</p>
              <p className="text-xl font-bold">{totalClaimed.toFixed(4)} USDC</p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Claimable Rewards</p>
              <p className="text-2xl font-bold">{claimableAmount.toFixed(4)} USDC</p>
            </div>
            <Button
              onClick={onClaimRewards}
              disabled={claimableAmount <= 0}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
            >
              Claim Rewards
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
