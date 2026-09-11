"use client"

import { FileText, LayoutDashboard, User, Users, UserStar } from "lucide-react"

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
      label: "Admin",
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
    {
      label: "Document Receipt",
      items: [
        {
          name: "Invoice",
          url: "/dashboard/document-receipt/invoice",
          icon: FileText,
        },
        {
          name: "DO",
          url: "/dashboard/document-receipt/do",
          icon: FileText,
        },
        {
          name: "DO Dummy",
          url: "/dashboard/document-receipt/do-dummy",
          icon: FileText,
        },
        {
          name: "PL Principal",
          url: "/dashboard/document-receipt/pl-principal",
          icon: FileText,
        },
        {
          name: "PL HPE",
          url: "/dashboard/document-receipt/pl-hpe",
          icon: FileText,
        },
      ],
    },
  ],
}
