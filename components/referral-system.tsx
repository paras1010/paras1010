"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Copy, Facebook, Twitter, Mail, Check } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import ReferralStats from "@/components/referral-stats"

interface ReferralSystemProps {
  connected: boolean
  walletAddress: string
}

export default function ReferralSystem({ connected, walletAddress }: ReferralSystemProps) {
  const [copied, setCopied] = useState(false)
  const [referralHistory, setReferralHistory] = useState<
    Array<{
      address: string
      date: Date
      stakedAmount: number
      earnings: number
      status: "active" | "inactive"
    }>
  >([
    {
      address: "0x7a16ff8270133f063aab6c9977183d9e72835428",
      date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
      stakedAmount: 500,
      earnings: 10, // 2% of 500 USDC (changed from 25)
      status: "active",
    },
    {
      address: "0x3d2f4d8d7889b4142a7902c5e8a3d8a2e37cd6e1",
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
      stakedAmount: 1000,
      earnings: 20, // 2% of 1000 USDC (changed from 50)
      status: "active",
    },
    {
      address: "0x9e8f7d9d94c28c6914ab169e8a3624e914a4eb57",
      date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
      stakedAmount: 250,
      earnings: 5, // 2% of 250 USDC (changed from 12.5)
      status: "inactive",
    },
  ])

  const [claimedHistory, setClaimedHistory] = useState<
    Array<{
      date: Date
      amount: number
    }>
  >([
    {
      date: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000), // 45 days ago
      amount: 37.5,
    },
  ])

  // Generate referral link based on wallet address
  const getReferralLink = () => {
    if (!connected) return ""
    const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
    return `${baseUrl}?ref=${walletAddress.substring(2, 8)}`
  }

  const referralLink = getReferralLink()

  const copyToClipboard = () => {
    if (!referralLink) return
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const totalEarnings = referralHistory.reduce((sum, ref) => sum + ref.earnings, 0)
  const totalClaimed = claimedHistory.reduce((sum, claim) => sum + claim.amount, 0)
  const claimableAmount = totalEarnings - totalClaimed

  const handleClaimRewards = () => {
    if (claimableAmount <= 0) return

    // Add to claimed history
    setClaimedHistory((prev) => [
      ...prev,
      {
        date: new Date(),
        amount: claimableAmount,
      },
    ])

    // Reset earnings (in a real implementation, this would be handled by a smart contract)
    setReferralHistory((prev) =>
      prev.map((ref) => ({
        ...ref,
        earnings: 0,
      })),
    )
  }

  if (!connected) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Referral Program</CardTitle>
          <CardDescription>Connect your wallet to access the referral program</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-8">
          <p className="text-center text-muted-foreground">
            Connect your wallet to generate your unique referral link and start earning rewards
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <ReferralStats
        totalReferrals={referralHistory.length}
        activeReferrals={referralHistory.filter((r) => r.status === "active").length}
        totalEarnings={totalEarnings}
        claimableAmount={claimableAmount}
        totalClaimed={totalClaimed}
        onClaimRewards={handleClaimRewards}
      />

      <Card>
        <CardHeader>
          <CardTitle>Your Referral Link</CardTitle>
          <CardDescription>Share this link with friends to earn 2% of their deposit amount</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input value={referralLink} readOnly className="font-mono text-sm" />
            <Button variant="outline" size="icon" onClick={copyToClipboard}>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>

          <div className="mt-4 flex justify-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Facebook className="h-4 w-4" />
              <span>Share</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Twitter className="h-4 w-4" />
              <span>Tweet</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="referrals">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="referrals">Referrals</TabsTrigger>
          <TabsTrigger value="claims">Claim History</TabsTrigger>
        </TabsList>

        <TabsContent value="referrals">
          <Card>
            <CardHeader>
              <CardTitle>Your Referrals</CardTitle>
              <CardDescription>Track your referrals and earnings</CardDescription>
            </CardHeader>
            <CardContent>
              {referralHistory.length > 0 ? (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Address</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Staked</TableHead>
                        <TableHead>Earnings (2%)</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {referralHistory.map((referral, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-mono text-xs">
                            {referral.address.substring(0, 6)}...
                            {referral.address.substring(referral.address.length - 4)}
                          </TableCell>
                          <TableCell>{formatDistanceToNow(referral.date, { addSuffix: true })}</TableCell>
                          <TableCell>{referral.stakedAmount} USDC</TableCell>
                          <TableCell>{referral.earnings.toFixed(2)} USDC</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                referral.status === "active"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {referral.status === "active" ? "Active" : "Inactive"}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed">
                  <p className="text-center text-muted-foreground">No referrals yet</p>
                  <p className="text-center text-sm text-muted-foreground">Share your referral link to start earning</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="claims">
          <Card>
            <CardHeader>
              <CardTitle>Claim History</CardTitle>
              <CardDescription>Your referral rewards claim history</CardDescription>
            </CardHeader>
            <CardContent>
              {claimedHistory.length > 0 ? (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {claimedHistory.map((claim, index) => (
                        <TableRow key={index}>
                          <TableCell>{formatDistanceToNow(claim.date, { addSuffix: true })}</TableCell>
                          <TableCell className="text-right">{claim.amount.toFixed(2)} USDC</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed">
                  <p className="text-center text-muted-foreground">No claims yet</p>
                  <p className="text-center text-sm text-muted-foreground">Earn referral rewards to claim</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
