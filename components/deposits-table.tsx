"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, CheckCircle, AlertTriangle } from "lucide-react"
import ChainLogo from "./chain-logo"

interface Deposit {
  id: string
  chain: string
  amount: number
  depositDate: Date
  rewards: number
  status: "locked" | "earlyWithdrawal" | "mature"
}

interface DepositsTableProps {
  deposits: Deposit[]
  onWithdraw: (depositId: string, isEarly: boolean) => void
  connected: boolean
}

export default function DepositsTable({ deposits, onWithdraw, connected }: DepositsTableProps) {
  // Filter deposits by status
  const allDeposits = deposits
  const matureDeposits = deposits.filter((d) => d.status === "mature")
  const earlyWithdrawalDeposits = deposits.filter((d) => d.status === "earlyWithdrawal")
  const lockedDeposits = deposits.filter((d) => d.status === "locked")

  // Group deposits by chain
  const depositsByChain = deposits.reduce(
    (acc, deposit) => {
      if (!acc[deposit.chain]) {
        acc[deposit.chain] = []
      }
      acc[deposit.chain].push(deposit)
      return acc
    },
    {} as Record<string, Deposit[]>,
  )

  // Calculate days until maturity
  const getDaysUntilMaturity = (depositDate: Date) => {
    const maturityDate = new Date(depositDate)
    maturityDate.setDate(maturityDate.getDate() + 200)
    const now = new Date()
    const diffTime = maturityDate.getTime() - now.getTime()
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  // Calculate days until early withdrawal
  const getDaysUntilEarlyWithdrawal = (depositDate: Date) => {
    const earlyWithdrawalDate = new Date(depositDate)
    earlyWithdrawalDate.setDate(earlyWithdrawalDate.getDate() + 150)
    const now = new Date()
    const diffTime = earlyWithdrawalDate.getTime() - now.getTime()
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  // Calculate days staked
  const getDaysStaked = (depositDate: Date) => {
    const now = new Date()
    const diffTime = now.getTime() - depositDate.getTime()
    return Math.floor(diffTime / (1000 * 60 * 60 * 24))
  }

  // Format date
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  // Get maturity date
  const getMaturityDate = (depositDate: Date) => {
    const maturityDate = new Date(depositDate)
    maturityDate.setDate(maturityDate.getDate() + 200)
    return maturityDate
  }

  // Render status badge
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "locked":
        return (
          <Badge variant="outline" className="bg-blue-900/30 text-blue-300 border-blue-700 flex items-center gap-1">
            <Clock className="h-3 w-3" /> Locked
          </Badge>
        )
      case "earlyWithdrawal":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-900/30 text-yellow-300 border-yellow-700 flex items-center gap-1"
          >
            <AlertTriangle className="h-3 w-3" /> Early Withdrawal
          </Badge>
        )
      case "mature":
        return (
          <Badge variant="outline" className="bg-green-900/30 text-green-300 border-green-700 flex items-center gap-1">
            <CheckCircle className="h-3 w-3" /> Mature
          </Badge>
        )
      default:
        return null
    }
  }

  const renderDepositTable = (filteredDeposits: Deposit[]) => {
    if (filteredDeposits.length === 0) {
      return <div className="text-center py-8 text-blue-300">No deposits found in this category.</div>
    }

    return (
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-4 text-blue-300 font-medium">Chain</th>
              <th className="text-left py-3 px-4 text-blue-300 font-medium">Amount</th>
              <th className="text-left py-3 px-4 text-blue-300 font-medium">Deposit Date</th>
              <th className="text-left py-3 px-4 text-blue-300 font-medium">Maturity</th>
              <th className="text-left py-3 px-4 text-blue-300 font-medium">Status</th>
              <th className="text-left py-3 px-4 text-blue-300 font-medium">Rewards & Fees</th>
              <th className="text-right py-3 px-4 text-blue-300 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDeposits.map((deposit) => (
              <tr key={deposit.id} className="border-b border-slate-800 hover:bg-slate-800/30">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <ChainLogo chain={deposit.chain} size={20} className="mr-2" />
                    <span className="text-white">{deposit.chain}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-white">{deposit.amount.toFixed(2)} USDC</td>
                <td className="py-3 px-4 text-white">{formatDate(deposit.depositDate)}</td>
                <td className="py-3 px-4">
                  <div className="text-white">{formatDate(getMaturityDate(deposit.depositDate))}</div>
                  {deposit.status === "locked" && (
                    <div className="text-sm text-blue-300">
                      {getDaysUntilEarlyWithdrawal(deposit.depositDate) > 0
                        ? `${getDaysUntilEarlyWithdrawal(deposit.depositDate)} days until early withdrawal`
                        : "Eligible for early withdrawal"}
                      <span className="mx-1">•</span>
                      Staked for {getDaysStaked(deposit.depositDate)} days
                    </div>
                  )}
                </td>
                <td className="py-3 px-4">{renderStatusBadge(deposit.status)}</td>
                <td className="py-3 px-4">
                  <span className="text-green-400">+{deposit.rewards.toFixed(4)} USDC</span>
                </td>
                <td className="py-3 px-4 text-right">
                  {deposit.status === "mature" && (
                    <Button
                      size="sm"
                      className="bg-teal-600 hover:bg-teal-700 text-white"
                      onClick={() => onWithdraw(deposit.id, false)}
                      disabled={!connected}
                    >
                      Withdraw
                    </Button>
                  )}
                  {deposit.status === "earlyWithdrawal" && (
                    <Button
                      size="sm"
                      className="bg-yellow-600 hover:bg-yellow-700 text-white"
                      onClick={() => onWithdraw(deposit.id, true)}
                      disabled={!connected}
                    >
                      Early Withdraw
                    </Button>
                  )}
                  {deposit.status === "locked" && getDaysUntilEarlyWithdrawal(deposit.depositDate) <= 0 && (
                    <Button
                      size="sm"
                      className="bg-yellow-600 hover:bg-yellow-700 text-white"
                      onClick={() => onWithdraw(deposit.id, true)}
                      disabled={!connected}
                    >
                      Early Withdraw
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex w-full bg-slate-900/50 border-b border-slate-700">
            <TabsTrigger value="all" className="flex-1 text-white py-3">
              All ({allDeposits.length})
            </TabsTrigger>
            <TabsTrigger value="mature" className="flex-1 text-white py-3">
              Mature ({matureDeposits.length})
            </TabsTrigger>
            <TabsTrigger value="earlyWithdrawal" className="flex-1 text-white py-3">
              Early Withdrawal ({earlyWithdrawalDeposits.length})
            </TabsTrigger>
            <TabsTrigger value="locked" className="flex-1 text-white py-3">
              Locked ({lockedDeposits.length})
            </TabsTrigger>
            <TabsTrigger value="byChain" className="flex-1 text-white py-3">
              By Chain
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="p-0">
            {renderDepositTable(allDeposits)}
          </TabsContent>

          <TabsContent value="mature" className="p-0">
            {renderDepositTable(matureDeposits)}
          </TabsContent>

          <TabsContent value="earlyWithdrawal" className="p-0">
            {renderDepositTable(earlyWithdrawalDeposits)}
          </TabsContent>

          <TabsContent value="locked" className="p-0">
            {renderDepositTable(lockedDeposits)}
          </TabsContent>

          <TabsContent value="byChain" className="p-0">
            <Tabs defaultValue={Object.keys(depositsByChain)[0] || "none"} className="w-full">
              <TabsList className="flex w-full bg-slate-800/50 border-b border-slate-700 overflow-x-auto">
                {Object.keys(depositsByChain).length > 0 ? (
                  Object.keys(depositsByChain).map((chain) => (
                    <TabsTrigger key={chain} value={chain} className="text-white py-2 px-4 flex items-center">
                      <ChainLogo chain={chain} size={16} className="mr-2" />
                      {chain} ({depositsByChain[chain].length})
                    </TabsTrigger>
                  ))
                ) : (
                  <TabsTrigger value="none" className="text-white py-2 px-4">
                    No Chains
                  </TabsTrigger>
                )}
              </TabsList>

              {Object.keys(depositsByChain).length > 0 ? (
                Object.keys(depositsByChain).map((chain) => (
                  <TabsContent key={chain} value={chain} className="p-0">
                    {renderDepositTable(depositsByChain[chain])}
                  </TabsContent>
                ))
              ) : (
                <TabsContent value="none" className="p-0">
                  <div className="text-center py-8 text-blue-300">No deposits found.</div>
                </TabsContent>
              )}
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
        <h3 className="text-lg font-medium text-white mb-3">Deposit Status Legend</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="bg-green-900/30 text-green-300 border-green-700 flex items-center gap-1"
            >
              <CheckCircle className="h-3 w-3" /> Mature
            </Badge>
            <span className="text-blue-200 text-sm">Fully matured deposits (200+ days)</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="bg-yellow-900/30 text-yellow-300 border-yellow-700 flex items-center gap-1"
            >
              <AlertTriangle className="h-3 w-3" /> Early Withdrawal
            </Badge>
            <span className="text-blue-200 text-sm">Eligible for early withdrawal (150-199 days)</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-blue-900/30 text-blue-300 border-blue-700 flex items-center gap-1">
              <Clock className="h-3 w-3" /> Locked
            </Badge>
            <span className="text-blue-200 text-sm">Still locked (0-149 days)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
