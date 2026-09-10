"use client"

import * as React from "react"

import { NavCollaps } from "@workspace/ui/layout/nav-collaps"
import { NavMenus } from "@workspace/ui/layout/nav-menus"
import { NavUser } from "@workspace/ui/layout/nav-user"
import { AppLogo } from "@workspace/ui/layout/app-logo"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@workspace/ui/components/sidebar"

type Props = React.ComponentProps<typeof Sidebar> & {
  user: React.ComponentProps<typeof NavUser>["user"]
  navCollaps?: React.ComponentProps<typeof NavCollaps>["menus"]
  navMenus: React.ComponentProps<typeof NavMenus>["menus"]
}

export function AppSidebar({ user, navCollaps, navMenus, ...props }: Props) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={user} />
      </SidebarHeader>
      <SidebarContent>
        <NavCollaps menus={navCollaps} />
        <NavMenus menus={navMenus} />
      </SidebarContent>
      <SidebarFooter>
        <AppLogo />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
