"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export function ProfileSection() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
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
            <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
            <Input id="form-phone" type="tel" placeholder="+1 (555) 123-4567" />
          </Field>
        </CardContent>
        <div className="mt-2 flex justify-end gap-2 p-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </div>
      </Card>
    </div>
  )
}
