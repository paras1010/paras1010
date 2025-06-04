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
import { InfoIcon, AlertTriangle, Clock } from "lucide-react"
import ChainLogo from "./chain-logo"

interface WithdrawalFormProps {
  onWithdraw: (amount: number, chain: string, isEarly: boolean) => void
  connected: boolean
  stakedAmount: Record<string, number>
  stakingDates: Record<string, Date>
  withdrawalRequests: Record<
    string,
    {
      requestDate: Date
      amount: number
      chain: string
      isEarly: boolean
    }
  >
  setWithdrawalRequests: React.Dispatch<
    React.SetStateAction<
      Record<
        string,
        {
          requestDate: Date
          amount: number
          chain: string
          isEarly: boolean
        }
      >
    >
  >
}

export default function WithdrawalForm({
  onWithdraw,
  connected,
  stakedAmount,
  stakingDates,
  withdrawalRequests,
  setWithdrawalRequests,
}: WithdrawalFormProps) {
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
      if (withdrawalType === "early") {
        // Create withdrawal request for early withdrawal
        const requestId = `${chain}-${Date.now()}`
        setWithdrawalRequests((prev) => ({
          ...prev,
          [requestId]: {
            requestDate: new Date(),
            amount: Number.parseFloat(amount),
            chain,
            isEarly: true,
          },
        }))
        setShowSuccess(true)
      } else {
        // Process normal withdrawal immediately
        onWithdraw(Number.parseFloat(amount), chain, false)
        setShowSuccess(true)
      }

      setAmount("")
      setIsSubmitting(false)

      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000)
    }, 1500)
  }

  const handleClaimWithdrawal = (requestId: string) => {
    const request = withdrawalRequests[requestId]
    if (!request) return

    setIsSubmitting(true)

    setTimeout(() => {
      onWithdraw(request.amount, request.chain, request.isEarly)

      // Remove the request from pending
      setWithdrawalRequests((prev) => {
        const updated = { ...prev }
        delete updated[requestId]
        return updated
      })

      setIsSubmitting(false)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }, 1500)
  }

  const getTimeRemaining = (requestDate: Date) => {
    const now = new Date()
    const waitingPeriodEnd = new Date(requestDate.getTime() + 48 * 60 * 60 * 1000) // 48 hours
    const timeRemaining = waitingPeriodEnd.getTime() - now.getTime()

    if (timeRemaining <= 0) return null

    const hours = Math.floor(timeRemaining / (1000 * 60 * 60))
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))

    return { hours, minutes, totalMs: timeRemaining }
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
                  <div className="space-y-2">
                    <p className="text-sm text-yellow-200">
                      Early withdrawals are available after 150 days with a 15% fee on your initial deposit. You will
                      receive 85% of your initial deposit plus all earned rewards.
                    </p>
                    <p className="text-sm text-orange-200 font-medium">
                      ⏱️ Important: After submitting an early withdrawal request, there is a mandatory 48-hour waiting
                      period before you can claim your funds. This allows for proper position rebalancing and security
                      verification.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Pending Early Withdrawal Requests */}
        {Object.entries(withdrawalRequests).length > 0 && (
          <Card className="bg-slate-800/50 border-slate-700 mb-6">
            <CardContent className="p-3 sm:p-4">
              <h3 className="text-base sm:text-lg font-medium text-white mb-3 sm:mb-4 flex items-center">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 mr-2" />
                Pending Early Withdrawals
              </h3>
              <div className="space-y-3">
                {Object.entries(withdrawalRequests).map(([requestId, request]) => {
                  const timeRemaining = getTimeRemaining(request.requestDate)
                  const canClaim = !timeRemaining

                  return (
                    <div key={requestId} className="bg-slate-700/50 rounded-lg p-3 sm:p-4">
                      {/* Mobile-first header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <div className="flex items-center">
                          <ChainLogo chain={request.chain} size={18} className="mr-2" />
                          <span className="text-white font-medium text-sm sm:text-base">{request.chain}</span>
                        </div>
                        <span className="text-white font-medium text-sm sm:text-base self-start sm:self-center">
                          {request.amount.toFixed(2)} USDC
                        </span>
                      </div>

                      <div className="text-xs sm:text-sm text-blue-200 mb-3">
                        Requested: {request.requestDate.toLocaleDateString()} at{" "}
                        {request.requestDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </div>

                      {timeRemaining ? (
                        <div className="space-y-3">
                          {/* Mobile-optimized countdown */}
                          <div className="bg-slate-600/50 rounded-lg p-3 text-center">
                            <div className="text-yellow-300 font-mono text-lg sm:text-xl font-bold">
                              {String(timeRemaining.hours).padStart(2, "0")}h{" "}
                              {String(timeRemaining.minutes).padStart(2, "0")}m
                            </div>
                            <div className="text-xs sm:text-sm text-yellow-200 mt-1">Waiting period remaining</div>
                          </div>

                          {/* Progress bar */}
                          <div className="w-full bg-slate-600 rounded-full h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded-full transition-all duration-1000"
                              style={{
                                width: `${Math.max(0, 100 - (timeRemaining.totalMs / (48 * 60 * 60 * 1000)) * 100)}%`,
                              }}
                            ></div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-2">
                            <div className="text-xs sm:text-sm text-slate-300 flex-1">
                              You can claim your funds after the waiting period ends
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-400 border-red-400 hover:bg-red-400/10 w-full sm:w-auto"
                              onClick={() => {
                                setWithdrawalRequests((prev) => {
                                  const updated = { ...prev }
                                  delete updated[requestId]
                                  return updated
                                })
                              }}
                            >
                              Cancel Request
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div className="bg-green-900/30 border border-green-700 rounded-lg p-3 text-center">
                            <div className="text-green-300 font-medium text-sm sm:text-base">✓ Ready to Claim</div>
                            <div className="text-xs sm:text-sm text-green-200 mt-1">85% of principal + all rewards</div>
                          </div>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 text-white w-full"
                            onClick={() => handleClaimWithdrawal(requestId)}
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Processing..." : "Claim Funds"}
                          </Button>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        )}

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
            <CardContent className="p-3 sm:p-4">
              <div className="space-y-3">
                <div className="text-sm sm:text-base font-medium text-white mb-2">Early Withdrawal Breakdown</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-blue-300">Withdrawal Amount</span>
                    <span className="text-white font-medium">{Number.parseFloat(amount).toFixed(2)} USDC</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-yellow-300">Early Withdrawal Fee (15%)</span>
                    <span className="text-yellow-300 font-medium">
                      -{calculateEarlyWithdrawalFee(Number.parseFloat(amount)).toFixed(2)} USDC
                    </span>
                  </div>
                  <div className="border-t border-slate-700 my-2"></div>
                  <div className="flex justify-between text-sm sm:text-base font-medium">
                    <span className="text-blue-200">You Will Receive</span>
                    <span className="text-white">
                      {calculateNetWithdrawal(Number.parseFloat(amount)).toFixed(2)} USDC
                    </span>
                  </div>
                </div>

                {/* Mobile warning */}
                <div className="bg-orange-900/30 border border-orange-700 rounded-lg p-2 sm:p-3 mt-3">
                  <div className="text-xs sm:text-sm text-orange-200">
                    <strong>⏱️ 48-hour waiting period applies</strong>
                    <br />
                    After submitting, you'll need to wait 48 hours before claiming your funds.
                  </div>
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
          className={`w-full h-12 text-sm sm:text-base font-medium ${
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
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Processing...
            </div>
          ) : withdrawalType === "early" ? (
            "Request Early Withdrawal"
          ) : (
            "Withdraw USDC"
          )}
        </Button>
      </div>
    </form>
  )
}
