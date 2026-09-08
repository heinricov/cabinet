"use client"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"

export function NavMenus({
  menus,
}: {
  menus: {
    label: string
    items: {
      name: string
      url: string
      icon: React.ComponentType<{ className?: string }>
    }[]
  }[]
}) {
  return (
    <>
      {menus.map((menu) => (
        <SidebarGroup key={menu.label}>
          <SidebarGroupLabel>{menu.label}</SidebarGroupLabel>
          <SidebarMenu>
            {menu.items.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton render={<a href={item.url} />}>
                  <item.icon />
                  <span>{item.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  )
}
