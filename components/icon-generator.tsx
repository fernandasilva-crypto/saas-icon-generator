"use client"

import { useState, useCallback } from "react"
import { PromptForm } from "@/components/prompt-form"
import { PreviewPanel } from "@/components/preview-panel"
import { StyleSelector } from "@/components/style-selector"

export function IconGenerator() {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedStyle, setSelectedStyle] = useState("flat")

  const handleGenerate = useCallback(
    async (prompt: string) => {
      setIsGenerating(true)
      setImageUrl(null)

      // Simulate AI generation with a placeholder
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Use a deterministic placeholder based on the prompt
      const seed = encodeURIComponent(`${prompt}-${selectedStyle}`)
      setImageUrl(
        `https://api.dicebear.com/9.x/shapes/svg?seed=${seed}&backgroundColor=f0f0f0`
      )
      setIsGenerating(false)
    },
    [selectedStyle]
  )

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 md:py-16">
      <div className="mb-10 text-center md:mb-14">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl text-balance">
          Generate icons with AI
        </h1>
        <p className="mt-3 text-base text-muted-foreground text-pretty">
          Describe the icon you need and let AI create it for you in seconds.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left column: form */}
          <div className="flex flex-col gap-6">
            <PromptForm
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />
            <StyleSelector
              selected={selectedStyle}
              onSelect={setSelectedStyle}
            />
          </div>

          {/* Right column: preview */}
          <PreviewPanel imageUrl={imageUrl} isGenerating={isGenerating} />
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Generated icons are free to use for personal and commercial projects.
      </p>
    </div>
  )
}
