"use client"

import { AppLayout } from "@workspace/ui/layout/app-layout"
import { data } from "@/components/menus"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppLayout
      user={data.user}
      navMenus={data.projects}
      navCollaps={data.navMain}
    >
      {children}
    </AppLayout>
  )
}
