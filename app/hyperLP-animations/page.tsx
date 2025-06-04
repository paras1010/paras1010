"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import HyperLPAnimatedLogo from "@/components/hyperLP-animated-logo"
import HyperLP2DAnimation from "@/components/hyperLP-2d-animations"
import { RotateCcw, Download, Video, Monitor } from "lucide-react"

export default function HyperLPAnimations() {
  const [selectedAnimation, setSelectedAnimation] = useState<"intro" | "loading" | "reveal">("intro")
  const [selected2DAnimation, setSelected2DAnimation] = useState<
    "fadeIn" | "slideIn" | "typewriter" | "particles" | "morphing"
  >("fadeIn")
  const [colorScheme, setColorScheme] = useState<"light" | "dark" | "gradient">("gradient")
  const [isPlaying, setIsPlaying] = useState(true)
  const [animationKey, setAnimationKey] = useState(0)

  const restartAnimation = () => {
    setAnimationKey((prev) => prev + 1)
    setIsPlaying(true)
  }

  const animationTypes = [
    {
      id: "intro",
      name: "Video Intro",
      description: "Perfect for video intros and brand reveals",
      duration: "4 seconds",
      useCase: "Video intros, brand reveals, presentations",
    },
    {
      id: "loading",
      name: "Loading Screen",
      description: "Continuous animation for loading states",
      duration: "Infinite loop",
      useCase: "Loading screens, app startup, processing states",
    },
    {
      id: "reveal",
      name: "Particle Reveal",
      description: "Dramatic particle-based logo reveal",
      duration: "3 seconds",
      useCase: "Special events, product launches, dramatic reveals",
    },
  ]

  const animation2DTypes = [
    {
      id: "fadeIn",
      name: "Fade In",
      description: "Smooth fade-in with scale animation",
      duration: "1 second",
    },
    {
      id: "slideIn",
      name: "Slide In",
      description: "Logo and text slide in from sides",
      duration: "1.5 seconds",
    },
    {
      id: "typewriter",
      name: "Typewriter",
      description: "Text appears with typewriter effect",
      duration: "2 seconds",
    },
    {
      id: "particles",
      name: "Particle System",
      description: "Animated particles around the logo",
      duration: "Continuous",
    },
    {
      id: "morphing",
      name: "Morphing Shape",
      description: "Shape-shifting geometric animation",
      duration: "4 seconds",
    },
  ]

  const exportFormats = [
    { name: "MP4 Video (1080p)", description: "High-quality video for presentations" },
    { name: "WebM Video", description: "Optimized for web playback" },
    { name: "GIF Animation", description: "Universal animated format" },
    { name: "Lottie JSON", description: "Vector animation for web/mobile" },
    { name: "After Effects Project", description: "Editable AE project file" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-10">
        <div className="mb-10 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">HyperLP Animated Logos</h1>
          <p className="text-xl text-muted-foreground">
            Professional animated logo variations for video intros, loading screens, and brand presentations
          </p>
        </div>

        <Tabs defaultValue="3d" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="3d" className="flex items-center space-x-2">
              <Video className="h-4 w-4" />
              <span>3D Animations</span>
            </TabsTrigger>
            <TabsTrigger value="2d" className="flex items-center space-x-2">
              <Monitor className="h-4 w-4" />
              <span>2D Animations</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="3d" className="space-y-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* 3D Animation Display */}
              <div className="lg:col-span-2">
                <Card className="h-[600px]">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-2">
                          <Video className="h-5 w-5" />
                          <span>3D Animation Preview</span>
                        </CardTitle>
                        <CardDescription>
                          {animationTypes.find((a) => a.id === selectedAnimation)?.description}
                        </CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={restartAnimation}
                          className="flex items-center space-x-1"
                        >
                          <RotateCcw className="h-4 w-4" />
                          <span>Restart</span>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="h-[500px] p-0" key={animationKey}>
                    <HyperLPAnimatedLogo
                      animationType={selectedAnimation}
                      colorScheme={colorScheme}
                      autoPlay={isPlaying}
                      duration={selectedAnimation === "intro" ? 4 : selectedAnimation === "reveal" ? 3 : 2}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* 3D Controls */}
              <div className="space-y-6">
                {/* Animation Type Selector */}
                <Card>
                  <CardHeader>
                    <CardTitle>Animation Type</CardTitle>
                    <CardDescription>Choose the animation style</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {animationTypes.map((animation) => (
                      <div
                        key={animation.id}
                        className={`cursor-pointer rounded-lg border p-3 transition-all ${
                          selectedAnimation === animation.id
                            ? "border-primary bg-primary/10"
                            : "border-border hover:bg-muted/50"
                        }`}
                        onClick={() => setSelectedAnimation(animation.id as "intro" | "loading" | "reveal")}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{animation.name}</div>
                            <div className="text-sm text-muted-foreground">{animation.description}</div>
                            <div className="text-xs text-muted-foreground mt-1">Duration: {animation.duration}</div>
                          </div>
                          {selectedAnimation === animation.id && <Badge variant="default">Active</Badge>}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Color Scheme */}
                <Card>
                  <CardHeader>
                    <CardTitle>Color Scheme</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select
                      value={colorScheme}
                      onValueChange={(value: "light" | "dark" | "gradient") => setColorScheme(value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gradient">Gradient Theme</SelectItem>
                        <SelectItem value="light">Light Mode</SelectItem>
                        <SelectItem value="dark">Dark Mode</SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

                {/* Export Options */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Download className="h-5 w-5" />
                      <span>Export Options</span>
                    </CardTitle>
                    <CardDescription>Available export formats</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {exportFormats.map((format, index) => (
                      <Button key={index} variant="outline" className="w-full justify-start" disabled>
                        <div className="text-left">
                          <div className="font-medium">{format.name}</div>
                          <div className="text-xs text-muted-foreground">{format.description}</div>
                        </div>
                      </Button>
                    ))}
                    <p className="text-xs text-muted-foreground mt-2">
                      * Export functionality would be implemented in production
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="2d" className="space-y-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* 2D Animation Display */}
              <div className="lg:col-span-2">
                <Card className="h-[400px]">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-2">
                          <Monitor className="h-5 w-5" />
                          <span>2D Animation Preview</span>
                        </CardTitle>
                        <CardDescription>
                          {animation2DTypes.find((a) => a.id === selected2DAnimation)?.description}
                        </CardDescription>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setAnimationKey((prev) => prev + 1)}
                        className="flex items-center space-x-1"
                      >
                        <RotateCcw className="h-4 w-4" />
                        <span>Restart</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="h-[300px] flex items-center justify-center" key={`2d-${animationKey}`}>
                    <HyperLP2DAnimation
                      animationType={selected2DAnimation}
                      colorScheme={colorScheme}
                      size={100}
                      autoPlay={true}
                    />
                  </CardContent>
                </Card>

                {/* 2D Animation Grid */}
                <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {animation2DTypes.map((animation) => (
                    <Card
                      key={animation.id}
                      className={`cursor-pointer transition-all ${
                        selected2DAnimation === animation.id ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => setSelected2DAnimation(animation.id as any)}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">{animation.name}</CardTitle>
                        <CardDescription className="text-xs">{animation.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="h-24 flex items-center justify-center">
                        <HyperLP2DAnimation
                          animationType={animation.id as any}
                          colorScheme={colorScheme}
                          size={40}
                          autoPlay={true}
                          loop={true}
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* 2D Controls */}
              <div className="space-y-6">
                {/* Animation Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Animation Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium">Selected Animation</label>
                        <p className="text-sm text-muted-foreground">
                          {animation2DTypes.find((a) => a.id === selected2DAnimation)?.name}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Duration</label>
                        <p className="text-sm text-muted-foreground">
                          {animation2DTypes.find((a) => a.id === selected2DAnimation)?.duration}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Best Use Cases</label>
                        <p className="text-sm text-muted-foreground">Web headers, mobile apps, social media</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Color Scheme */}
                <Card>
                  <CardHeader>
                    <CardTitle>Color Scheme</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select
                      value={colorScheme}
                      onValueChange={(value: "light" | "dark" | "gradient") => setColorScheme(value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gradient">Gradient Theme</SelectItem>
                        <SelectItem value="light">Light Mode</SelectItem>
                        <SelectItem value="dark">Dark Mode</SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

                {/* Usage Guidelines */}
                <Card>
                  <CardHeader>
                    <CardTitle>Usage Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div>
                        <h4 className="font-medium text-green-600">Recommended</h4>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Use for web headers and navigation</li>
                          <li>• Perfect for mobile app splash screens</li>
                          <li>• Great for social media content</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-600">Technical Notes</h4>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• CSS animations for web performance</li>
                          <li>• SVG-based for crisp scaling</li>
                          <li>• Lightweight file sizes</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
