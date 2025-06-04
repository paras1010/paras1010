"use client"

export default function GradientOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large gradient orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute top-1/4 -right-40 w-96 h-96 bg-gradient-to-br from-teal-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute -bottom-40 left-1/4 w-80 h-80 bg-gradient-to-br from-cyan-600/25 to-blue-600/25 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "4s" }}
      />

      {/* Medium gradient orbs */}
      <div
        className="absolute top-1/3 left-1/3 w-60 h-60 bg-gradient-to-br from-blue-500/15 to-teal-500/15 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-60 h-60 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "3s" }}
      />

      {/* Small gradient orbs */}
      <div
        className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "2.5s" }}
      />
    </div>
  )
}
