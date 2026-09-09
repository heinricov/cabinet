"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export function ProfileSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar className="size-14 border border-border">
          <AvatarImage
            src="https://i.pravatar.cc/80?img=45"
            alt="Elena Duarte"
            className="grayscale"
          />
          <AvatarFallback>ED</AvatarFallback>
        </Avatar>
        <Button variant="outline" size="sm">
          Change avatar
        </Button>
      </div>
      <Field>
        <FieldLabel htmlFor="name">Full name</FieldLabel>
        <Input id="name" defaultValue="Elena Duarte" />
      </Field>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input
          id="email"
          type="email"
          defaultValue="elena@acme.com"
        />
      </Field>
    </div>
  )
}
