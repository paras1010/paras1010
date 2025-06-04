"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import HyperLPLogo3D from "@/components/hyperLP-logo-3d"
import HyperLPLogo2D from "@/components/hyperLP-logo-2d"
import { Download, Palette, RotateCcw, Maximize } from "lucide-react"

export default function HyperLPShowcase() {
  const [colorScheme, setColorScheme] = useState<"light" | "dark" | "gradient">("gradient")
  const [autoRotate, setAutoRotate] = useState(true)
  const [logoSize, setLogoSize] = useState(1)

  const downloadFormats = [
    { name: "3D Model (.glb)", description: "High-resolution 3D model for web and applications" },
    { name: "3D Model (.obj)", description: "Standard 3D format for modeling software" },
    { name: "PNG (High-res)", description: "4K transparent background PNG" },
    { name: "SVG Vector", description: "Scalable vector format for web use" },
    { name: "Brand Package", description: "Complete brand package with all formats" },
  ]

  const colorSchemes = [
    { id: "gradient", name: "Gradient", description: "Multi-color gradient theme" },
    { id: "light", name: "Light Mode", description: "Optimized for light backgrounds" },
    { id: "dark", name: "Dark Mode", description: "Optimized for dark backgrounds" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-10">
        <div className="mb-10 space-y-4">
          <div className="flex items-center space-x-4">
            <HyperLPLogo2D size={60} colorScheme={colorScheme} variant="icon" />
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground">HyperLP Logo Showcase</h1>
              <p className="text-xl text-muted-foreground">
                Modern 3D logo design for decentralized finance and liquidity provision
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* 3D Logo Display */}
          <div className="lg:col-span-2">
            <Card className="h-[600px]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>3D Interactive Logo</CardTitle>
                    <CardDescription>Drag to rotate, scroll to zoom</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setAutoRotate(!autoRotate)}
                      className="flex items-center space-x-1"
                    >
                      <RotateCcw className="h-4 w-4" />
                      <span>{autoRotate ? "Stop" : "Start"} Rotation</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="h-[500px] p-0">
                <HyperLPLogo3D autoRotate={autoRotate} size={logoSize} colorScheme={colorScheme} />
              </CardContent>
            </Card>
          </div>

          {/* Controls */}
          <div className="space-y-6">
            {/* Color Scheme Selector */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="h-5 w-5" />
                  <span>Color Schemes</span>
                </CardTitle>
                <CardDescription>Choose the color theme for your use case</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {colorSchemes.map((scheme) => (
                  <div
                    key={scheme.id}
                    className={`cursor-pointer rounded-lg border p-3 transition-all ${
                      colorScheme === scheme.id ? "border-primary bg-primary/10" : "border-border hover:bg-muted/50"
                    }`}
                    onClick={() => setColorScheme(scheme.id as "light" | "dark" | "gradient")}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{scheme.name}</div>
                        <div className="text-sm text-muted-foreground">{scheme.description}</div>
                      </div>
                      {colorScheme === scheme.id && <Badge variant="default">Active</Badge>}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Size Control */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Maximize className="h-5 w-5" />
                  <span>Size Control</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <label className="text-sm font-medium">Logo Size: {logoSize.toFixed(1)}x</label>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={logoSize}
                    onChange={(e) => setLogoSize(Number.parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Download Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download Formats</span>
                </CardTitle>
                <CardDescription>Available logo formats for different use cases</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {downloadFormats.map((format, index) => (
                  <Button key={index} variant="outline" className="w-full justify-start" disabled>
                    <div className="text-left">
                      <div className="font-medium">{format.name}</div>
                      <div className="text-xs text-muted-foreground">{format.description}</div>
                    </div>
                  </Button>
                ))}
                <p className="text-xs text-muted-foreground mt-2">
                  * Download functionality would be implemented in a production environment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 2D Logo Variations */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>2D Logo Variations</CardTitle>
              <CardDescription>Different formats and sizes for various applications</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="full">Full Logo</TabsTrigger>
                  <TabsTrigger value="icon">Icon Only</TabsTrigger>
                  <TabsTrigger value="text">Text Only</TabsTrigger>
                </TabsList>

                <TabsContent value="full" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                      <h3 className="font-medium">Large (Website Header)</h3>
                      <HyperLPLogo2D size={120} colorScheme={colorScheme} variant="full" />
                    </div>
                    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                      <h3 className="font-medium">Medium (Navigation)</h3>
                      <HyperLPLogo2D size={80} colorScheme={colorScheme} variant="full" />
                    </div>
                    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                      <h3 className="font-medium">Small (Footer)</h3>
                      <HyperLPLogo2D size={60} colorScheme={colorScheme} variant="full" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="icon" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                      <h3 className="font-medium">Large Icon</h3>
                      <HyperLPLogo2D size={100} colorScheme={colorScheme} variant="icon" />
                    </div>
                    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                      <h3 className="font-medium">Medium Icon</h3>
                      <HyperLPLogo2D size={60} colorScheme={colorScheme} variant="icon" />
                    </div>
                    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                      <h3 className="font-medium">Small Icon</h3>
                      <HyperLPLogo2D size={40} colorScheme={colorScheme} variant="icon" />
                    </div>
                    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                      <h3 className="font-medium">Favicon</h3>
                      <HyperLPLogo2D size={24} colorScheme={colorScheme} variant="icon" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="text" className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                      <h3 className="font-medium">Large Text</h3>
                      <HyperLPLogo2D size={120} colorScheme={colorScheme} variant="text" />
                    </div>
                    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                      <h3 className="font-medium">Medium Text</h3>
                      <HyperLPLogo2D size={80} colorScheme={colorScheme} variant="text" />
                    </div>
                    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                      <h3 className="font-medium">Small Text</h3>
                      <HyperLPLogo2D size={60} colorScheme={colorScheme} variant="text" />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Usage Guidelines */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Usage Guidelines</CardTitle>
              <CardDescription>Best practices for using the HyperLP logo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 font-semibold text-green-600">Do's</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Use the logo on contrasting backgrounds</li>
                    <li>• Maintain proper spacing around the logo</li>
                    <li>• Use the appropriate color scheme for your context</li>
                    <li>• Scale proportionally to maintain aspect ratio</li>
                    <li>• Use high-resolution versions for print materials</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 font-semibold text-red-600">Don'ts</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Don't stretch or distort the logo</li>
                    <li>• Don't use on busy or low-contrast backgrounds</li>
                    <li>• Don't modify the colors or design elements</li>
                    <li>• Don't use pixelated or low-resolution versions</li>
                    <li>• Don't place other elements too close to the logo</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
