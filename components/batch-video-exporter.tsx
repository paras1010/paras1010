"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Download, Play, Package, CheckCircle } from "lucide-react"

interface ExportJob {
  id: string
  animationName: string
  format: "mp4" | "webm"
  duration: number
  status: "pending" | "recording" | "completed" | "failed"
  progress: number
  blob?: Blob
  url?: string
  size?: string
}

interface BatchVideoExporterProps {
  animations: Array<{
    id: string
    name: string
    type: "intro" | "loading" | "reveal"
    duration: number
  }>
}

export default function BatchVideoExporter({ animations }: BatchVideoExporterProps) {
  const [selectedAnimations, setSelectedAnimations] = useState<string[]>([])
  const [selectedFormats, setSelectedFormats] = useState<("mp4" | "webm")[]>(["mp4"])
  const [exportJobs, setExportJobs] = useState<ExportJob[]>([])
  const [isExporting, setIsExporting] = useState(false)
  const [overallProgress, setOverallProgress] = useState(0)

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const toggleAnimation = (animationId: string) => {
    setSelectedAnimations((prev) =>
      prev.includes(animationId) ? prev.filter((id) => id !== animationId) : [...prev, animationId],
    )
  }

  const toggleFormat = (format: "mp4" | "webm") => {
    setSelectedFormats((prev) => (prev.includes(format) ? prev.filter((f) => f !== format) : [...prev, format]))
  }

  const selectAllAnimations = () => {
    setSelectedAnimations(animations.map((a) => a.id))
  }

  const clearSelection = () => {
    setSelectedAnimations([])
  }

  const startBatchExport = async () => {
    if (selectedAnimations.length === 0 || selectedFormats.length === 0) return

    setIsExporting(true)
    setOverallProgress(0)

    // Create export jobs
    const jobs: ExportJob[] = []
    selectedAnimations.forEach((animationId) => {
      const animation = animations.find((a) => a.id === animationId)
      if (animation) {
        selectedFormats.forEach((format) => {
          jobs.push({
            id: `${animationId}-${format}`,
            animationName: animation.name,
            format,
            duration: animation.duration,
            status: "pending",
            progress: 0,
          })
        })
      }
    })

    setExportJobs(jobs)

    // Simulate export process (in real implementation, this would trigger actual recording)
    for (let i = 0; i < jobs.length; i++) {
      const job = jobs[i]

      // Update job status to recording
      setExportJobs((prev) => prev.map((j) => (j.id === job.id ? { ...j, status: "recording" as const } : j)))

      // Simulate recording progress
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise((resolve) => setTimeout(resolve, 100))
        setExportJobs((prev) => prev.map((j) => (j.id === job.id ? { ...j, progress } : j)))
      }

      // Simulate file creation
      const mockBlob = new Blob(["mock video data"], { type: `video/${job.format}` })
      const url = URL.createObjectURL(mockBlob)
      const size = formatFileSize(mockBlob.size + Math.random() * 5000000) // Random size for demo

      setExportJobs((prev) =>
        prev.map((j) =>
          j.id === job.id
            ? {
                ...j,
                status: "completed" as const,
                blob: mockBlob,
                url,
                size,
              }
            : j,
        ),
      )

      // Update overall progress
      setOverallProgress(((i + 1) / jobs.length) * 100)
    }

    setIsExporting(false)
  }

  const downloadJob = (job: ExportJob) => {
    if (job.url) {
      const link = document.createElement("a")
      link.href = job.url
      link.download = `${job.animationName}-${job.format}-${Date.now()}.${job.format}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const downloadAll = () => {
    const completedJobs = exportJobs.filter((job) => job.status === "completed")
    completedJobs.forEach((job) => {
      setTimeout(() => downloadJob(job), 100) // Stagger downloads
    })
  }

  const clearJobs = () => {
    exportJobs.forEach((job) => {
      if (job.url) URL.revokeObjectURL(job.url)
    })
    setExportJobs([])
    setOverallProgress(0)
  }

  const completedJobs = exportJobs.filter((job) => job.status === "completed")
  const totalJobs = exportJobs.length

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Package className="h-5 w-5" />
          <span>Batch Video Exporter</span>
        </CardTitle>
        <CardDescription>Export multiple animations in different formats simultaneously</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Animation Selection */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Select Animations</h4>
            <div className="flex space-x-2">
              <Button onClick={selectAllAnimations} size="sm" variant="outline">
                Select All
              </Button>
              <Button onClick={clearSelection} size="sm" variant="outline">
                Clear
              </Button>
            </div>
          </div>

          <div className="grid gap-2 md:grid-cols-2">
            {animations.map((animation) => (
              <div key={animation.id} className="flex items-center space-x-3 rounded-lg border p-3 hover:bg-muted/50">
                <Checkbox
                  checked={selectedAnimations.includes(animation.id)}
                  onCheckedChange={() => toggleAnimation(animation.id)}
                />
                <div className="flex-1">
                  <p className="font-medium">{animation.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {animation.duration}s • {animation.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Format Selection */}
        <div className="space-y-3">
          <h4 className="font-medium">Export Formats</h4>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <Checkbox checked={selectedFormats.includes("mp4")} onCheckedChange={() => toggleFormat("mp4")} />
              <label className="text-sm font-medium">MP4 (H.264)</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox checked={selectedFormats.includes("webm")} onCheckedChange={() => toggleFormat("webm")} />
              <label className="text-sm font-medium">WebM (VP9)</label>
            </div>
          </div>
        </div>

        {/* Export Summary */}
        <div className="rounded-lg border p-3">
          <h4 className="font-medium mb-2">Export Summary</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Selected Animations:</span>
              <span className="ml-2 font-medium">{selectedAnimations.length}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Selected Formats:</span>
              <span className="ml-2 font-medium">{selectedFormats.length}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Total Files:</span>
              <span className="ml-2 font-medium">{selectedAnimations.length * selectedFormats.length}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Est. Time:</span>
              <span className="ml-2 font-medium">
                {Math.ceil(
                  selectedAnimations.reduce((total, id) => {
                    const animation = animations.find((a) => a.id === id)
                    return total + (animation ? animation.duration : 0)
                  }, 0) * selectedFormats.length,
                )}
                s
              </span>
            </div>
          </div>
        </div>

        {/* Export Controls */}
        <div className="flex space-x-2">
          <Button
            onClick={startBatchExport}
            disabled={isExporting || selectedAnimations.length === 0 || selectedFormats.length === 0}
            className="flex-1"
          >
            <Play className="mr-2 h-4 w-4" />
            {isExporting ? "Exporting..." : "Start Batch Export"}
          </Button>
          {completedJobs.length > 0 && (
            <Button onClick={downloadAll} variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download All
            </Button>
          )}
        </div>

        {/* Overall Progress */}
        {isExporting && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-muted-foreground">
                {completedJobs.length} / {totalJobs} completed
              </span>
            </div>
            <Progress value={overallProgress} className="w-full" />
          </div>
        )}

        {/* Export Jobs */}
        {exportJobs.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Export Jobs</h4>
              <Button onClick={clearJobs} size="sm" variant="outline">
                Clear All
              </Button>
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto">
              {exportJobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      {job.status === "completed" ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : job.status === "recording" ? (
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                      ) : (
                        <div className="h-4 w-4 rounded-full border-2 border-muted" />
                      )}
                      <Badge variant="secondary">{job.format.toUpperCase()}</Badge>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{job.animationName}</p>
                      <p className="text-xs text-muted-foreground">
                        {job.status === "completed" && job.size ? `Size: ${job.size}` : `${job.duration}s duration`}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {job.status === "recording" && (
                      <div className="w-20">
                        <Progress value={job.progress} className="h-2" />
                      </div>
                    )}
                    {job.status === "completed" && (
                      <Button onClick={() => downloadJob(job)} size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
