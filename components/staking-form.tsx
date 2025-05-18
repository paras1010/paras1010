"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import ChainLogo from "@/components/chain-logo"

interface StakingFormProps {
  onStake: (amount: number, chain: string) => void
}

export default function StakingForm({ onStake }: StakingFormProps) {
  const [amount, setAmount] = useState<string>("")
  const [chain, setChain] = useState<string>("Base Chain")
  const [error, setError] = useState<string | null>(null)

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setAmount(value)
      setError(null)
    }
  }

  const handleStake = () => {
    const numAmount = Number.parseFloat(amount)

    if (isNaN(numAmount) || numAmount <= 0) {
      setError("Please enter a valid amount")
      return
    }

    if (numAmount < 10) {
      setError("Minimum staking amount is 10 USDC")
      return
    }

    onStake(numAmount, chain)
    setAmount("")
    setError(null)
  }

  const calculateRewards = () => {
    const numAmount = Number.parseFloat(amount) || 0
    const dailyReward = numAmount * 0.0035 // 0.35% daily
    const totalReward = dailyReward * 200 // 200 days = 127.75% APR
    return {
      daily: dailyReward.toFixed(2),
      total: totalReward.toFixed(2),
    }
  }

  const { daily, total } = calculateRewards()

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="chain">Select Network</Label>
        <Select value={chain} onValueChange={setChain}>
          <SelectTrigger>
            <SelectValue placeholder="Select network">
              {chain && (
                <div className="flex items-center">
                  <ChainLogo chain={chain} size={16} className="mr-1" />
                  <span>{chain}</span>
                </div>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Base Chain">
              <div className="flex items-center">
                <ChainLogo chain="Base Chain" size={16} className="mr-1" />
                <span>Base Chain</span>
              </div>
            </SelectItem>
            <SelectItem value="BNB Chain">
              <div className="flex items-center">
                <ChainLogo chain="BNB Chain" size={16} className="mr-1" />
                <span>BNB Chain</span>
              </div>
            </SelectItem>
            <SelectItem value="Sonic Chain">
              <div className="flex items-center">
                <ChainLogo chain="Sonic Chain" size={16} className="mr-1" />
                <span>Sonic Chain</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="amount">Amount (USDC)</Label>
        <Input id="amount" type="text" placeholder="0.00" value={amount} onChange={handleAmountChange} />
        <p className="text-xs text-muted-foreground">Minimum staking amount: 10 USDC</p>
      </div>

      <div className="rounded-lg border p-4">
        <h4 className="mb-2 text-sm font-medium">Estimated Rewards</h4>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Daily Rewards:</span>
            <span>{daily} USDC</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Total Rewards (200 days):</span>
            <span>{total} USDC</span>
          </div>
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          Your original investment is returned when your stake expires.
        </div>
      </div>

      <Button onClick={handleStake} className="w-full">
        Stake USDC
      </Button>
    </div>
  )
}
