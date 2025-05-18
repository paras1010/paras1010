"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet, CircleCheck } from "lucide-react"

interface WalletConnectProps {
  onConnect: (status: boolean) => void
}

export default function WalletConnect({ onConnect }: WalletConnectProps) {
  const [connected, setConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const handleConnect = () => {
    // In a real implementation, this would connect to MetaMask or another wallet
    // For demo purposes, we'll just simulate a connection
    if (!connected) {
      // Generate a random wallet address
      const randomAddress = "0x" + [...Array(40)].map(() => Math.floor(Math.random() * 16).toString(16)).join("")
      setWalletAddress(randomAddress)
      setConnected(true)
      onConnect(true)
    } else {
      setWalletAddress("")
      setConnected(false)
      onConnect(false)
    }
  }

  return (
    <div className="space-y-4">
      {connected ? (
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CircleCheck className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Connected</span>
            </div>
            <Button variant="outline" size="sm" onClick={handleConnect}>
              Disconnect
            </Button>
          </div>
          <div className="mt-2">
            <p className="text-xs text-muted-foreground">Wallet Address</p>
            <p className="text-sm font-mono truncate">{walletAddress}</p>
          </div>
          <div className="mt-4 border-t pt-4">
            <h4 className="mb-2 text-sm font-medium">Referral Earnings</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Earnings per Referral:</span>
                <span>2% of deposit amount</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Claimable Amount:</span>
                <span>87.50 USDC</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Claimed:</span>
                <span>37.50 USDC</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="mt-2 w-full" onClick={() => {}}>
              View Referral Details
            </Button>
          </div>
        </div>
      ) : (
        <Button onClick={handleConnect} className="w-full" variant="default">
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      )}

      {!connected && (
        <div className="rounded-lg border p-4">
          <h4 className="mb-2 text-sm font-medium">Supported Wallets</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <div className="mr-2 h-4 w-4 rounded-full bg-orange-500" />
              <span>MetaMask</span>
            </li>
            <li className="flex items-center">
              <div className="mr-2 h-4 w-4 rounded-full bg-blue-500" />
              <span>Coinbase Wallet</span>
            </li>
            <li className="flex items-center">
              <div className="mr-2 h-4 w-4 rounded-full bg-purple-500" />
              <span>WalletConnect</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
