"use client"

import { useState } from "react"
import { Loader2, Wand2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PromptFormProps {
  onGenerate: (prompt: string) => void
  isGenerating: boolean
}

export function PromptForm({ onGenerate, isGenerating }: PromptFormProps) {
  const [prompt, setPrompt] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!prompt.trim() || isGenerating) return
    onGenerate(prompt.trim())
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="prompt"
          className="text-sm font-medium text-foreground"
        >
          Describe your icon
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="A minimalist rocket ship icon with rounded edges, suitable for a tech startup..."
          rows={4}
          className="w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
        />
        <p className="text-xs text-muted-foreground">
          Be specific about style, color, and intended use for best results.
        </p>
      </div>
      <Button
        type="submit"
        disabled={!prompt.trim() || isGenerating}
        className="h-11 w-full rounded-2xl text-sm font-medium"
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Wand2 className="mr-2 h-4 w-4" />
            Generate Icon
          </>
        )}
      </Button>
    </form>
  )
}
