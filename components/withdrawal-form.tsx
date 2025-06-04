"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InfoIcon, AlertTriangle } from "lucide-react"
import ChainLogo from "./chain-logo"

interface WithdrawalFormProps {
  onWithdraw: (amount: number, chain: string, isEarly: boolean) => void
  connected: boolean
  stakedAmount: Record<string, number>
  stakingDates: Record<string, Date>
}

export default function WithdrawalForm({ onWithdraw, connected, stakedAmount, stakingDates }: WithdrawalFormProps) {
  const [amount, setAmount] = useState<string>("")
  const [chain, setChain] = useState<string>("Base Chain")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [withdrawalType, setWithdrawalType] = useState<"normal" | "early">("normal")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!connected || !amount || Number.parseFloat(amount) <= 0) return

    setIsSubmitting(true)

    // Simulate transaction
    setTimeout(() => {
      onWithdraw(Number.parseFloat(amount), chain, withdrawalType === "early")
      setAmount("")
      setIsSubmitting(false)
      setShowSuccess(true)

      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000)
    }, 1500)
  }

  // Calculate days staked for each chain
  const getDaysStaked = (chain: string) => {
    if (!stakingDates[chain]) return 0
    const millisecondsPerDay = 24 * 60 * 60 * 1000
    return Math.floor((Date.now() - stakingDates[chain].getTime()) / millisecondsPerDay)
  }

  // Check if early withdrawal is available
  const isEarlyWithdrawalAvailable = (chain: string) => {
    const daysStaked = getDaysStaked(chain)
    return daysStaked >= 150 && daysStaked < 200
  }

  // Calculate early withdrawal fee
  const calculateEarlyWithdrawalFee = (amount: number) => {
    return amount * 0.15 // 15% fee
  }

  // Calculate net withdrawal amount
  const calculateNetWithdrawal = (amount: number) => {
    if (withdrawalType === "early") {
      return amount - calculateEarlyWithdrawalFee(amount)
    }
    return amount
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <Tabs
          defaultValue="normal"
          value={withdrawalType}
          onValueChange={(value) => setWithdrawalType(value as "normal" | "early")}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 border-slate-700">
            <TabsTrigger value="normal" className="text-white">
              Normal Withdrawal
            </TabsTrigger>
            <TabsTrigger value="early" className="text-white">
              Early Withdrawal
            </TabsTrigger>
          </TabsList>

          <TabsContent value="normal" className="mt-4">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4 space-y-2">
                <div className="flex items-start gap-2">
                  <InfoIcon className="h-5 w-5 text-blue-400 mt-0.5" />
                  <p className="text-sm text-blue-200">
                    Normal withdrawals are available after the full 200-day staking period. Your initial deposit and all
                    earned rewards will be returned.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="early" className="mt-4">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4 space-y-2">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
                  <p className="text-sm text-yellow-200">
                    Early withdrawals are available after 150 days with a 15% fee on your initial deposit. You will
                    receive 85% of your initial deposit plus all earned rewards.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

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
                  {isEarlyWithdrawalAvailable("Base Chain") && withdrawalType === "early" && (
                    <span className="ml-2 text-xs bg-yellow-600/50 text-yellow-200 px-2 py-0.5 rounded">
                      Early Available
                    </span>
                  )}
                </div>
              </SelectItem>
              <SelectItem value="BNB Chain">
                <div className="flex items-center">
                  <ChainLogo chain="BNB Chain" size={20} className="mr-2" />
                  BNB Chain
                  {isEarlyWithdrawalAvailable("BNB Chain") && withdrawalType === "early" && (
                    <span className="ml-2 text-xs bg-yellow-600/50 text-yellow-200 px-2 py-0.5 rounded">
                      Early Available
                    </span>
                  )}
                </div>
              </SelectItem>
              <SelectItem value="Sonic Chain">
                <div className="flex items-center">
                  <ChainLogo chain="Sonic Chain" size={20} className="mr-2" />
                  Sonic Chain
                  {isEarlyWithdrawalAvailable("Sonic Chain") && withdrawalType === "early" && (
                    <span className="ml-2 text-xs bg-yellow-600/50 text-yellow-200 px-2 py-0.5 rounded">
                      Early Available
                    </span>
                  )}
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="amount" className="text-blue-200">
              Amount (USDC)
            </Label>
            <button
              type="button"
              className="text-xs text-teal-400 hover:text-teal-300"
              onClick={() => setAmount(stakedAmount[chain]?.toString() || "0")}
              disabled={!connected || isSubmitting}
            >
              Max: {stakedAmount[chain]?.toFixed(2) || "0.00"}
            </button>
          </div>
          <div className="relative">
            <Input
              id="amount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-slate-800 border-slate-700 text-white pr-16"
              disabled={!connected || isSubmitting}
              min="0.01"
              max={stakedAmount[chain]?.toString() || "0"}
              step="0.01"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-blue-300">USDC</span>
            </div>
          </div>
        </div>

        {withdrawalType === "early" && Number.parseFloat(amount) > 0 && (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-300">Withdrawal Amount</span>
                  <span className="text-white">{Number.parseFloat(amount).toFixed(2)} USDC</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-yellow-300">Early Withdrawal Fee (15%)</span>
                  <span className="text-yellow-300">
                    -{calculateEarlyWithdrawalFee(Number.parseFloat(amount)).toFixed(2)} USDC
                  </span>
                </div>
                <div className="border-t border-slate-700 my-2"></div>
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-blue-200">Net Withdrawal</span>
                  <span className="text-white">
                    {calculateNetWithdrawal(Number.parseFloat(amount)).toFixed(2)} USDC
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {showSuccess && (
          <Alert className="bg-green-900/50 border-green-700 text-green-200">
            <AlertTitle>Withdrawal Successful</AlertTitle>
            <AlertDescription>
              Your withdrawal has been successfully processed and will be sent to your wallet.
            </AlertDescription>
          </Alert>
        )}

        <Button
          type="submit"
          className={`w-full ${
            withdrawalType === "early" ? "bg-yellow-600 hover:bg-yellow-700" : "bg-teal-600 hover:bg-teal-700"
          } text-white`}
          disabled={
            !connected ||
            !amount ||
            Number.parseFloat(amount) <= 0 ||
            Number.parseFloat(amount) > (stakedAmount[chain] || 0) ||
            isSubmitting ||
            (withdrawalType === "early" && !isEarlyWithdrawalAvailable(chain))
          }
        >
          {isSubmitting ? "Processing..." : withdrawalType === "early" ? "Early Withdraw (15% Fee)" : "Withdraw USDC"}
        </Button>
      </div>
    </form>
  )
}
