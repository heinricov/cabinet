"use client"

import { AppSidebar } from "@workspace/ui/layout/app-sidebar"
import { AppHeader } from "@workspace/ui/layout/app-header"
import { SidebarInset, SidebarProvider } from "@workspace/ui/components/sidebar"
import { TooltipProvider } from "@workspace/ui/components/tooltip"

export function AppLayout({
  user,
  navCollaps,
  navMenus,
  children,
}: {
  user: React.ComponentProps<typeof AppSidebar>["user"]
  navCollaps?: React.ComponentProps<typeof AppSidebar>["navCollaps"]
  navMenus: React.ComponentProps<typeof AppSidebar>["navMenus"]
  children: React.ReactNode
}) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar user={user} navCollaps={navCollaps} navMenus={navMenus} />
        <SidebarInset>
          <AppHeader />
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}
