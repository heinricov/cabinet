"use client"

import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"

export function AccountSection() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Field>
            <FieldLabel htmlFor="name">User Name</FieldLabel>
            <Input id="username" defaultValue="Elena Duarte" />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="email" defaultValue="elena@acme.com" />
          </Field>
        </CardContent>
        <div className="mt-2 flex justify-end gap-2 p-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </div>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>New Password</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Field>
            <FieldLabel htmlFor="current">Current password</FieldLabel>
            <Input id="current" type="password" placeholder="••••••••" />
          </Field>
          <Field>
            <FieldLabel htmlFor="new-password">New password</FieldLabel>
            <Input id="new-password" type="password" placeholder="••••••••" />
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
