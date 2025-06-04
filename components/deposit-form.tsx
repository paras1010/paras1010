"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import ChainLogo from "./chain-logo"

interface DepositFormProps {
  onDeposit: (amount: number, chain: string) => void
  connected: boolean
}

export default function DepositForm({ onDeposit, connected }: DepositFormProps) {
  const [amount, setAmount] = useState<string>("")
  const [chain, setChain] = useState<string>("Base Chain")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!connected || !amount || Number.parseFloat(amount) <= 0) return

    setIsSubmitting(true)

    // Simulate transaction
    setTimeout(() => {
      onDeposit(Number.parseFloat(amount), chain)
      setAmount("")
      setIsSubmitting(false)
      setShowSuccess(true)

      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="chain" className="text-blue-200">
            Select Chain
          </Label>
          <Select value={chain} onValueChange={setChain} disabled={!connected || isSubmitting}>
            <SelectTrigger id="chain" className="bg-slate-800 border-slate-700 text-white">
              <SelectValue placeholder="Select Chain" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700 text-white">
              <SelectItem value="Base Chain" className="flex items-center">
                <div className="flex items-center">
                  <ChainLogo chain="Base Chain" size={20} className="mr-2" />
                  Base Chain
                </div>
              </SelectItem>
              <SelectItem value="BNB Chain">
                <div className="flex items-center">
                  <ChainLogo chain="BNB Chain" size={20} className="mr-2" />
                  BNB Chain
                </div>
              </SelectItem>
              <SelectItem value="Sonic Chain">
                <div className="flex items-center">
                  <ChainLogo chain="Sonic Chain" size={20} className="mr-2" />
                  Sonic Chain
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount" className="text-blue-200">
            Amount (USDC)
          </Label>
          <div className="relative">
            <Input
              id="amount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-slate-800 border-slate-700 text-white pr-16"
              disabled={!connected || isSubmitting}
              min="10"
              step="0.01"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-blue-300">USDC</span>
            </div>
          </div>
        </div>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-blue-300">Staking Period</span>
                <span className="text-white">200 days</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-300">Daily APR</span>
                <span className="text-white">0.35%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-300">Total APR</span>
                <span className="text-white">127.75%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-300">Maturity Date</span>
                <span className="text-white">
                  {new Date(Date.now() + 200 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {showSuccess && (
          <Alert className="bg-green-900/50 border-green-700 text-green-200">
            <AlertTitle>Deposit Successful</AlertTitle>
            <AlertDescription>Your deposit has been successfully processed and is now staked.</AlertDescription>
          </Alert>
        )}

        <Button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white"
          disabled={!connected || !amount || Number.parseFloat(amount) <= 0 || isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Deposit USDC"}
        </Button>
      </div>
    </form>
  )
}
