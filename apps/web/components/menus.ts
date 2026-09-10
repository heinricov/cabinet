"use client"

import { LayoutDashboard, User, Users, UserStar } from "lucide-react"

// This is sample data.
export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  Menus: [
    {
      label: "Menus",
      items: [
        {
          name: "Dashboard",
          url: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          name: "Profile",
          url: "/profile",
          icon: User,
        },
      ],
    },
    {
      label: "Menus Data",
      items: [
        {
          name: "Users",
          url: "/dashboard/data/users",
          icon: Users,
        },
        {
          name: "Roles",
          url: "/dashboard/data/roles",
          icon: UserStar,
        },
      ],
    },
  ],
}
