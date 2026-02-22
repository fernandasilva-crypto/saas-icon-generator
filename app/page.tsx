import { Header } from "@/components/header"
import { IconGenerator } from "@/components/icon-generator"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <IconGenerator />
      </main>
    </div>
  )
}
