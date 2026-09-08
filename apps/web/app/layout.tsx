import "@workspace/ui/globals.css"
import { fontMono, oxanium } from "@/components/providers/font-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { cn } from "@workspace/ui/lib/utils"
import { AppLayout } from "@workspace/ui/layout/app-layout"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        oxanium.variable
      )}
    >
      <body>
        <ThemeProvider>
          <AppLayout>{children}</AppLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
