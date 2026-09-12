"use client"
import { useState } from "react"
import { FormInput } from "@workspace/ui/data/form-input"
import { FormSelect } from "@workspace/ui/data/form-select"
import { Mail, User } from "lucide-react"

export function UsersFrom() {
  const [value, setValue] = useState("")
  return (
    <>
      <div className="space-y-2">
        <FormInput
          id="username"
          name="username"
          type="text"
          label="User Name"
          description="Input your user name"
          placeholder="John Doe"
          autoComplete="name"
          inputMode="text"
          icon={<User />}
        />
        <FormInput
          id="email"
          name="email"
          type="email"
          label="User Email"
          description="Input your user email"
          placeholder="example@example.com"
          autoComplete="email"
          inputMode="email"
          icon={<Mail />}
        />
        <FormSelect
          id="role"
          name="role"
          label="Role"
          options={[
            {
              value: "admin",
              label: "Administrator",
            },
            {
              value: "user",
              label: "User",
            },
          ]}
          value={value}
          onValueChange={(value) => setValue(value as string)}
        />
      </div>
    </>
  )
}
