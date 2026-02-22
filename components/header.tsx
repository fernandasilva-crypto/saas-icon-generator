import { Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
          <Sparkles className="h-4 w-4 text-background" />
        </div>
        <span className="text-lg font-semibold tracking-tight text-foreground">
          Iconify AI
        </span>
      </div>
      <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
        <a href="#" className="transition-colors hover:text-foreground">
          Gallery
        </a>
        <a href="#" className="transition-colors hover:text-foreground">
          Pricing
        </a>
        <a href="#" className="transition-colors hover:text-foreground">
          Docs
        </a>
      </nav>
    </header>
  )
}
