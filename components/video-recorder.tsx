"use client"

import type React from "react"

import { useRef, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Download, Video, Play, Square, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface VideoRecorderProps {
  canvasRef: React.RefObject<HTMLCanvasElement>
  animationName: string
  duration: number
  onRecordingComplete?: (blob: Blob, format: string) => void
}

export default function VideoRecorder({ canvasRef, animationName, duration, onRecordingComplete }: VideoRecorderProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingProgress, setRecordingProgress] = useState(0)
  const [recordedVideos, setRecordedVideos] = useState<
    Array<{ blob: Blob; format: string; url: string; size: string }>
  >([])
  const [error, setError] = useState<string | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const startRecording = useCallback(
    async (format: "mp4" | "webm") => {
      if (!canvasRef.current) {
        setError("Canvas not available for recording")
        return
      }

      try {
        setError(null)
        setIsRecording(true)
        setRecordingProgress(0)
        chunksRef.current = []

        // Get canvas stream
        const stream = canvasRef.current.captureStream(60) // 60 FPS

        // Configure MediaRecorder based on format
        const mimeType = format === "mp4" ? "video/mp4" : "video/webm"
        const options: MediaRecorderOptions = {
          mimeType: MediaRecorder.isTypeSupported(mimeType) ? mimeType : "video/webm",
          videoBitsPerSecond: 8000000, // 8 Mbps for high quality
        }

        const mediaRecorder = new MediaRecorder(stream, options)
        mediaRecorderRef.current = mediaRecorder

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            chunksRef.current.push(event.data)
          }
        }

        mediaRecorder.onstop = () => {
          const blob = new Blob(chunksRef.current, { type: options.mimeType })
          const url = URL.createObjectURL(blob)
          const size = formatFileSize(blob.size)

          const videoData = {
            blob,
            format: format.toUpperCase(),
            url,
            size,
          }

          setRecordedVideos((prev) => [...prev, videoData])

          if (onRecordingComplete) {
            onRecordingComplete(blob, format)
          }

          setIsRecording(false)
          setRecordingProgress(0)
        }

        mediaRecorder.onerror = (event) => {
          console.error("MediaRecorder error:", event)
          setError("Recording failed. Please try again.")
          setIsRecording(false)
        }

        // Start recording
        mediaRecorder.start(100) // Collect data every 100ms

        // Progress tracking
        const progressInterval = setInterval(() => {
          setRecordingProgress((prev) => {
            const newProgress = prev + 100 / (duration * 10) // Update every 100ms
            if (newProgress >= 100) {
              clearInterval(progressInterval)
              return 100
            }
            return newProgress
          })
        }, 100)

        // Auto-stop after duration
        setTimeout(() => {
          if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
            mediaRecorderRef.current.stop()
          }
          clearInterval(progressInterval)
        }, duration * 1000)
      } catch (err) {
        console.error("Failed to start recording:", err)
        setError("Failed to start recording. Your browser may not support this feature.")
        setIsRecording(false)
      }
    },
    [canvasRef, duration, onRecordingComplete],
  )

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop()
    }
  }, [])

  const downloadVideo = (videoData: { blob: Blob; format: string; url: string }) => {
    const link = document.createElement("a")
    link.href = videoData.url
    link.download = `${animationName}-${videoData.format.toLowerCase()}-${Date.now()}.${videoData.format.toLowerCase()}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const clearRecordings = () => {
    recordedVideos.forEach((video) => URL.revokeObjectURL(video.url))
    setRecordedVideos([])
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Video className="h-5 w-5" />
          <span>Video Export</span>
        </CardTitle>
        <CardDescription>Record and export your animations as video files</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Recording Controls */}
        <div className="space-y-3">
          <div className="flex space-x-2">
            <Button
              onClick={() => startRecording("mp4")}
              disabled={isRecording}
              className="flex-1"
              variant={isRecording ? "secondary" : "default"}
            >
              <Play className="mr-2 h-4 w-4" />
              Record MP4
            </Button>
            <Button
              onClick={() => startRecording("webm")}
              disabled={isRecording}
              className="flex-1"
              variant={isRecording ? "secondary" : "default"}
            >
              <Play className="mr-2 h-4 w-4" />
              Record WebM
            </Button>
          </div>

          {isRecording && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Recording in progress...</span>
                <Button onClick={stopRecording} size="sm" variant="outline">
                  <Square className="mr-1 h-3 w-3" />
                  Stop
                </Button>
              </div>
              <Progress value={recordingProgress} className="w-full" />
              <p className="text-xs text-muted-foreground">
                {Math.round(recordingProgress)}% complete ({Math.round((recordingProgress / 100) * duration)}s /{" "}
                {duration}s)
              </p>
            </div>
          )}
        </div>

        {/* Recording Info */}
        <div className="rounded-lg border p-3 text-sm">
          <h4 className="font-medium mb-2">Recording Settings</h4>
          <div className="space-y-1 text-muted-foreground">
            <div className="flex justify-between">
              <span>Animation:</span>
              <span>{animationName}</span>
            </div>
            <div className="flex justify-between">
              <span>Duration:</span>
              <span>{duration} seconds</span>
            </div>
            <div className="flex justify-between">
              <span>Frame Rate:</span>
              <span>60 FPS</span>
            </div>
            <div className="flex justify-between">
              <span>Quality:</span>
              <span>High (8 Mbps)</span>
            </div>
          </div>
        </div>

        {/* Recorded Videos */}
        {recordedVideos.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Recorded Videos</h4>
              <Button onClick={clearRecordings} size="sm" variant="outline">
                Clear All
              </Button>
            </div>

            <div className="space-y-2">
              {recordedVideos.map((video, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary">{video.format}</Badge>
                    <div>
                      <p className="text-sm font-medium">{animationName}</p>
                      <p className="text-xs text-muted-foreground">Size: {video.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <video src={video.url} className="h-12 w-16 rounded border object-cover" muted loop autoPlay />
                    <Button onClick={() => downloadVideo(video)} size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Browser Compatibility Info */}
        <div className="rounded-lg bg-muted/50 p-3 text-xs">
          <h5 className="font-medium mb-1">Browser Compatibility</h5>
          <p className="text-muted-foreground">
            Video recording requires a modern browser with MediaRecorder API support. Chrome, Firefox, and Safari are
            recommended for best results.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
