"use client"

import { useRef, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import HyperLPAnimatedLogo from "@/components/hyperLP-animated-logo"
import VideoRecorder from "@/components/video-recorder"
import { Play, Download, Settings, Film } from "lucide-react"

interface AnimationPreset {
  id: string
  name: string
  type: "intro" | "loading" | "reveal"
  duration: number
  description: string
  recommended: string[]
}

export default function AnimationStudio() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedPreset, setSelectedPreset] = useState<AnimationPreset | null>(null)
  const [colorScheme, setColorScheme] = useState<"light" | "dark" | "gradient">("gradient")
  const [isPlaying, setIsPlaying] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)

  const animationPresets: AnimationPreset[] = [
    {
      id: "brand-intro",
      name: "Brand Intro",
      type: "intro",
      duration: 4,
      description: "Professional brand introduction with dramatic reveal",
      recommended: ["Video intros", "Presentations", "Brand reveals"],
    },
    {
      id: "app-loading",
      name: "App Loading",
      type: "loading",
      duration: 3,
      description: "Continuous loading animation for applications",
      recommended: ["App startup", "Loading screens", "Processing states"],
    },
    {
      id: "particle-reveal",
      name: "Particle Reveal",
      type: "reveal",
      duration: 3,
      description: "Dramatic particle-based logo formation",
      recommended: ["Product launches", "Special events", "Social media"],
    },
    {
      id: "quick-intro",
      name: "Quick Intro",
      type: "intro",
      duration: 2,
      description: "Fast-paced intro for short-form content",
      recommended: ["Social media", "YouTube shorts", "Quick presentations"],
    },
    {
      id: "elegant-reveal",
      name: "Elegant Reveal",
      type: "reveal",
      duration: 5,
      description: "Sophisticated reveal for premium presentations",
      recommended: ["Corporate presentations", "Luxury brands", "Awards ceremonies"],
    },
  ]

  const exportFormats = [
    {
      format: "mp4",
      name: "MP4 (H.264)",
      description: "Universal compatibility, best for most platforms",
      fileSize: "~2-5 MB",
      quality: "High",
      compatibility: "Excellent",
    },
    {
      format: "webm",
      name: "WebM (VP9)",
      description: "Optimized for web, smaller file sizes",
      fileSize: "~1-3 MB",
      quality: "High",
      compatibility: "Good (Modern browsers)",
    },
  ]

  const playAnimation = () => {
    setIsPlaying(true)
    setAnimationKey((prev) => prev + 1)
  }

  const handleRecordingComplete = (blob: Blob, format: string) => {
    console.log(`Recording complete: ${format}, Size: ${blob.size} bytes`)
  }

  // Set default preset
  useEffect(() => {
    if (!selectedPreset && animationPresets.length > 0) {
      setSelectedPreset(animationPresets[0])
    }
  }, [selectedPreset])

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Animation Studio</h1>
        <p className="text-muted-foreground">Professional video export system for HyperLP animated logos</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Animation Preview */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Film className="h-5 w-5" />
                    <span>Animation Preview</span>
                  </CardTitle>
                  <CardDescription>
                    {selectedPreset ? selectedPreset.description : "Select a preset to begin"}
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button onClick={playAnimation} size="sm" className="flex items-center space-x-1">
                    <Play className="h-4 w-4" />
                    <span>Play</span>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="h-[400px] p-0 relative">
              <Canvas
                ref={canvasRef}
                camera={{ position: [0, 0, 8], fov: 50 }}
                style={{ background: "transparent" }}
                key={animationKey}
              >
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />
                <pointLight position={[10, -10, 5]} intensity={0.5} color="#8b5cf6" />

                {selectedPreset && (
                  <HyperLPAnimatedLogo
                    animationType={selectedPreset.type}
                    duration={selectedPreset.duration}
                    colorScheme={colorScheme}
                    autoPlay={isPlaying}
                  />
                )}
              </Canvas>
            </CardContent>
          </Card>

          {/* Export Formats Info */}
          <Card>
            <CardHeader>
              <CardTitle>Export Formats</CardTitle>
              <CardDescription>Choose the best format for your use case</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {exportFormats.map((format) => (
                  <div key={format.format} className="rounded-lg border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{format.name}</h3>
                      <Badge variant="outline">{format.format.toUpperCase()}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{format.description}</p>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>File Size:</span>
                        <span>{format.fileSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Quality:</span>
                        <span>{format.quality}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Compatibility:</span>
                        <span>{format.compatibility}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Controls and Export */}
        <div className="space-y-6">
          {/* Preset Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Animation Presets</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {animationPresets.map((preset) => (
                <div
                  key={preset.id}
                  className={`cursor-pointer rounded-lg border p-3 transition-all ${
                    selectedPreset?.id === preset.id
                      ? "border-primary bg-primary/10"
                      : "border-border hover:bg-muted/50"
                  }`}
                  onClick={() => setSelectedPreset(preset)}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium">{preset.name}</h4>
                    <Badge variant="secondary">{preset.duration}s</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{preset.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {preset.recommended.slice(0, 2).map((use, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {use}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Color Scheme */}
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Color Scheme</label>
                  <Select
                    value={colorScheme}
                    onValueChange={(value: "light" | "dark" | "gradient") => setColorScheme(value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gradient">Gradient Theme</SelectItem>
                      <SelectItem value="light">Light Mode</SelectItem>
                      <SelectItem value="dark">Dark Mode</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Video Recorder */}
          {selectedPreset && (
            <VideoRecorder
              canvasRef={canvasRef}
              animationName={selectedPreset.name}
              duration={selectedPreset.duration}
              onRecordingComplete={handleRecordingComplete}
            />
          )}

          {/* Quick Export */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Quick Export</span>
              </CardTitle>
              <CardDescription>Export all formats with one click</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" disabled={!selectedPreset}>
                Export All Formats
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                This will generate both MP4 and WebM versions of your selected animation
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>Video Export Guidelines</CardTitle>
          <CardDescription>Best practices for using your exported videos</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="technical">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="technical">Technical Specs</TabsTrigger>
              <TabsTrigger value="usage">Usage Tips</TabsTrigger>
              <TabsTrigger value="platforms">Platform Guide</TabsTrigger>
            </TabsList>

            <TabsContent value="technical" className="mt-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-medium mb-2">Video Specifications</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Resolution: 1920x1080 (Full HD)</li>
                    <li>• Frame Rate: 60 FPS</li>
                    <li>• Bitrate: 8 Mbps (High Quality)</li>
                    <li>• Color Space: sRGB</li>
                    <li>• Audio: None (Visual only)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">File Formats</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• MP4: H.264 codec, broad compatibility</li>
                    <li>• WebM: VP9 codec, web optimized</li>
                    <li>• Transparent background support</li>
                    <li>• Optimized compression</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="usage" className="mt-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-medium mb-2 text-green-600">Best Practices</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Use MP4 for maximum compatibility</li>
                    <li>• WebM for web-only applications</li>
                    <li>• Test on target platforms before deployment</li>
                    <li>• Consider file size for mobile users</li>
                    <li>• Provide fallback static images</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-blue-600">Optimization Tips</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Compress further if needed for web</li>
                    <li>• Use shorter durations for loading screens</li>
                    <li>• Consider loop points for seamless playback</li>
                    <li>• Test autoplay policies on target platforms</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="platforms" className="mt-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h4 className="font-medium mb-2">Social Media</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• YouTube: MP4 recommended</li>
                    <li>• Instagram: MP4, square format</li>
                    <li>• LinkedIn: MP4, professional tone</li>
                    <li>• Twitter: MP4, under 512MB</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Web Platforms</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Websites: WebM preferred</li>
                    <li>• Email: GIF fallback needed</li>
                    <li>• Presentations: MP4 universal</li>
                    <li>• Apps: Platform-specific formats</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Broadcasting</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• TV: High bitrate MP4</li>
                    <li>• Streaming: Multiple resolutions</li>
                    <li>• Digital signage: Loop-friendly</li>
                    <li>• Cinema: Uncompressed formats</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
