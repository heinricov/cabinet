"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@workspace/ui/components/button"
import { CardContent } from "@workspace/ui/components/card"
import { FieldError, FieldLabel } from "@workspace/ui/components/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@workspace/ui/components/input-otp"

export function OtpCode() {
  const [error, setError] = useState("")
  const router = useRouter()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")
    router.push("/auth/new-password")
  }

  return (
    <CardContent>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col items-center"
      >
        <div className="flex flex-col items-center gap-2">
          <FieldLabel
            htmlFor="otp"
            className="self-start text-sm text-muted-foreground"
          >
            Enter the 6-digit code
          </FieldLabel>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <FieldError>{error}</FieldError>

        <Button type="submit" className="mt-4 w-full">
          Submit Code
        </Button>
      </form>
    </CardContent>
  )
}
