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
      try {
        setIsGenerating(true)
        setImageUrl(null)

        const response = await fetch("/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        })

        if (!response.ok) {
          throw new Error("Failed to generate image")
        }

        const data = await response.json()

        setImageUrl(data.image)
      } catch (error) {
        console.error(error)
        alert("Error generating icon")
      } finally {
        setIsGenerating(false)
      }
    },
    [selectedStyle]
  )

  // 👇 ESSE BLOCO ESTAVA FALTANDO
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 md:py-16">
      <div className="mb-10 text-center md:mb-14">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Generate icons with AI
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Describe the icon you need and let AI create it for you in seconds.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="grid gap-8 md:grid-cols-2">
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

          <PreviewPanel
            imageUrl={imageUrl}
            isGenerating={isGenerating}
          />
        </div>
      </div>
    </div>
  )
}