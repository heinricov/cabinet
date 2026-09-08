"use client"

import * as React from "react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import { MapPin, Link, Calendar, Heart, MessageCircle } from "lucide-react"

/** Props a call site may pass through to an icon. */
type IconProps = { className?: string; size?: number | string }

const stats = [
  { label: "Posts", value: "128" },
  { label: "Followers", value: "12.4k" },
  { label: "Following", value: "312" },
]

const posts = [
  {
    title: "Designing tokens that scale",
    excerpt:
      "How we restructured our design tokens into three tiers and cut theme work to almost nothing.",
    date: "Jun 14, 2026",
    likes: 184,
    comments: 23,
  },
  {
    title: "The case for boring infrastructure",
    excerpt:
      "Reliability is a feature. A look at why we chose the least exciting option at every layer.",
    date: "May 28, 2026",
    likes: 142,
    comments: 17,
  },
]

const info = [
  {
    icon: (p: IconProps) => <MapPin {...p} />,
    label: "Berlin, Germany",
  },
  {
    icon: (p: IconProps) => <Link {...p} />,
    label: "priyanair.design",
  },
  {
    icon: (p: IconProps) => <Calendar {...p} />,
    label: "Joined March 2021",
  },
]

export default function ProfilePage() {
  return (
    <section className="flex min-h-svh w-full justify-center py-10">
      <div className="w-full max-w-7xl px-4 pb-6 sm:px-6">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Avatar className="size-26 border-4 border-background sm:size-42">
            <AvatarImage
              src="https://i.pravatar.cc/160?img=32"
              alt="Priya Nair"
              className="grayscale"
            />
            <AvatarFallback>PN</AvatarFallback>
          </Avatar>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:pt-4">
            <div className="mt-3 flex items-center gap-2">
              <h1 className="font-heading text-xl font-bold tracking-tight">
                Priya Nair
              </h1>
              <Badge variant="secondary">Pro</Badge>
            </div>
            <p className="text-sm text-muted-foreground">@priyanair</p>
            <p className="mt-3 text-sm/relaxed text-foreground/80">
              Staff product designer. Writing about design systems, tokens, and
              the craft of shipping calm software.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {stats.map((stat) => (
                <span key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="font-semibold tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground">{stat.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <Tabs defaultValue="posts" className="mt-6 gap-4 sm:mt-16">
          <TabsList className="w-full max-w-xs">
            <TabsTrigger value="posts" className="flex-1">
              Posts
            </TabsTrigger>
            <TabsTrigger value="about" className="flex-1">
              About
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="flex flex-col gap-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="flex flex-col gap-1.5 rounded-lg border border-border p-4"
              >
                <h2 className="font-heading text-sm font-semibold">
                  {post.title}
                </h2>
                <p className="text-xs/relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-1 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="tabular-nums">{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Heart className="size-3.5" aria-hidden="true" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="size-3.5" aria-hidden="true" />
                    {post.comments}
                  </span>
                </div>
              </article>
            ))}
          </TabsContent>

          <TabsContent value="about" className="flex flex-col gap-4">
            <p className="text-sm/relaxed text-foreground/80">
              Designer and writer focused on the systems behind good products.
              Previously at Acme and Northwind, now building tools for design
              teams.
            </p>
            <Separator />
            <ul className="flex flex-col gap-2.5">
              {info.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <item.icon className="size-4 shrink-0" aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
