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
    []
  )
}
