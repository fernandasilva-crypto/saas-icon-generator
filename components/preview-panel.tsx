"use client"

import { Download, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PreviewPanelProps {
  imageUrl: string | null
  isGenerating: boolean
}

export function PreviewPanel({ imageUrl, isGenerating }: PreviewPanelProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">Preview</span>
        {imageUrl && (
          <Button
            variant="outline"
            size="sm"
            className="h-8 rounded-xl text-xs"
            onClick={() => {
              const a = document.createElement("a")
              a.href = imageUrl
              a.download = "icon.png"
              a.click()
            }}
          >
            <Download className="mr-1.5 h-3.5 w-3.5" />
            Download
          </Button>
        )}
      </div>
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-secondary/50">
        {isGenerating ? (
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 rounded-full border-2 border-muted-foreground/20" />
              <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">
              Creating your icon...
            </span>
          </div>
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt="Generated icon preview"
            className="h-full w-full object-contain p-8"
          />
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-dashed border-muted-foreground/30 bg-muted/50">
              <ImageIcon className="h-6 w-6 text-muted-foreground/50" />
            </div>
            <span className="text-sm text-muted-foreground">
              Your icon will appear here
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
