import { Button } from "@workspace/ui/components/button"
import { Download, Plus } from "lucide-react"

export function PageHeader({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-svh w-full bg-background px-6 py-12 text-foreground">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <h1 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              Projects
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage your team&apos;s projects and track their progress.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Download data-icon="inline-start" aria-hidden="true" />
              Export
            </Button>
            <Button>
              <Plus data-icon="inline-start" aria-hidden="true" />
              New Project
            </Button>
          </div>
        </div>

        {children}
      </div>
    </section>
  )
}
