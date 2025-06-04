"use client"

import AnimationStudio from "@/components/animation-studio"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AnimationStudioPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-10">
        <div className="mb-8">
          <Link
            href="/hyperLP-animations"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Animations
          </Link>
        </div>

        <AnimationStudio />
      </div>
    </div>
  )
}
