"use client"

const styles = [
  { id: "flat", label: "Flat" },
  { id: "outlined", label: "Outlined" },
  { id: "3d", label: "3D" },
  { id: "glyph", label: "Glyph" },
] as const

interface StyleSelectorProps {
  selected: string
  onSelect: (style: string) => void
}

export function StyleSelector({ selected, onSelect }: StyleSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-foreground">Style</span>
      <div className="grid grid-cols-4 gap-2">
        {styles.map((style) => (
          <button
            key={style.id}
            type="button"
            onClick={() => onSelect(style.id)}
            className={`rounded-xl border px-3 py-2 text-xs font-medium transition-all ${
              selected === style.id
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground"
            }`}
          >
            {style.label}
          </button>
        ))}
      </div>
    </div>
  )
}
