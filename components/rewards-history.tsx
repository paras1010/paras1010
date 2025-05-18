"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { format } from "date-fns"
import ChainLogo from "@/components/chain-logo"

interface RewardsHistoryProps {
  history: Array<{ date: Date; amount: number; chain: string }>
  stakedAmount: Record<string, number>
}

export default function RewardsHistory({ history, stakedAmount }: RewardsHistoryProps) {
  // Calculate daily yield for each chain
  const calculateDailyYield = (amount: number) => {
    return amount * 0.0035 // 0.35% daily APR
  }

  // Generate some sample data for daily yield tracking
  const generateYieldHistory = () => {
    const today = new Date()
    const result = []

    // Generate 7 days of yield history
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)

      // Calculate yield for each chain on this date
      Object.entries(stakedAmount).forEach(([chain, amount]) => {
        // Add some variation to make it look realistic
        const variationFactor = 0.95 + Math.random() * 0.1 // Between 0.95 and 1.05
        const dailyYield = calculateDailyYield(amount) * variationFactor

        if (amount > 0) {
          result.push({
            date,
            chain,
            stakedAmount: amount,
            dailyYield: dailyYield,
            claimed: i % 2 === 0 && i < 5, // Some days have claimed rewards
            claimedAmount: i % 2 === 0 && i < 5 ? dailyYield : 0,
          })
        }
      })
    }

    return result
  }

  const yieldHistory = generateYieldHistory()

  if (history.length === 0 && yieldHistory.length === 0) {
    return (
      <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed">
        <p className="text-center text-muted-foreground">No rewards collected yet</p>
        <p className="text-center text-sm text-muted-foreground">Stake USDC and collect rewards to see your history</p>
      </div>
    )
  }

  return (
    <Tabs defaultValue="collected">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="collected">Collected Rewards</TabsTrigger>
        <TabsTrigger value="daily">Daily Yield</TabsTrigger>
      </TabsList>

      <TabsContent value="collected">
        {history.length > 0 ? (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Network</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {history.map((record, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      <div>{format(record.date, "MMM d, yyyy")}</div>
                      <div className="text-xs text-muted-foreground">{format(record.date, "h:mm a")}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <ChainLogo chain={record.chain} size={16} className="mr-1" />
                        <span>{record.chain}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{record.amount.toFixed(4)} USDC</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed">
            <p className="text-center text-muted-foreground">No rewards collected yet</p>
            <p className="text-center text-sm text-muted-foreground">Collect your pending rewards to see history</p>
          </div>
        )}
      </TabsContent>

      <TabsContent value="daily">
        <Card>
          <CardHeader>
            <CardTitle>Daily Yield Generation</CardTitle>
            <CardDescription>Track your daily yield based on staked amount</CardDescription>
          </CardHeader>
          <CardContent>
            {yieldHistory.length > 0 ? (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Network</TableHead>
                      <TableHead>Staked Amount</TableHead>
                      <TableHead>Daily Yield</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {yieldHistory.map((record, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{format(record.date, "MMM d, yyyy")}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <ChainLogo chain={record.chain} size={16} className="mr-1" />
                            <span>{record.chain}</span>
                          </div>
                        </TableCell>
                        <TableCell>{record.stakedAmount.toFixed(2)} USDC</TableCell>
                        <TableCell>{record.dailyYield.toFixed(4)} USDC</TableCell>
                        <TableCell>
                          {record.claimed ? (
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                              Claimed {format(record.date, "h:mm a")}
                            </span>
                          ) : (
                            <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                              Pending
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed">
                <p className="text-center text-muted-foreground">No yield data available</p>
                <p className="text-center text-sm text-muted-foreground">Stake USDC to start generating yield</p>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
