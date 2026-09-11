"use client"

import { useState } from "react"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Field, FieldError, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { ArrowLeft, Mail } from "lucide-react"
import { OtpCode } from "@workspace/ui/auth/otp-code"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ForgotPasswrdForm() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!emailPattern.test(email)) {
      setError("Enter a valid email address")
      return
    }
    setError("")
    setSent(true)
  }

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-background px-6 py-12 text-foreground">
      <Card className="w-full max-w-sm">
        {sent ? (
          <>
            <CardHeader className="items-center text-center">
              <span
                className="mx-auto flex size-11 items-center justify-center rounded-lg border border-border bg-muted/40"
                aria-hidden="true"
              >
                <Mail className="size-5" />
              </span>
              <CardTitle className="mt-4 text-xl font-bold tracking-tight">
                Check your inbox
              </CardTitle>
              <CardDescription className="text-sm">
                We An OTP code has been sent to reset your password, please
                check your email.
                <span className="font-medium text-foreground">{email}</span>
              </CardDescription>
            </CardHeader>
            <OtpCode />
            <CardFooter className="flex text-sm text-muted-foreground">
              <p className="gap-2">
                {" "}
                If you encounter any issues while logging in,
                <a className="ml-2 text-primary" href="/dashboard">
                  please contact us.
                </a>
              </p>
            </CardFooter>
          </>
        ) : (
          <>
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-bold tracking-tight">
                Forgot your password?
              </CardTitle>
              <CardDescription className="text-sm">
                Enter your email, and you will receive a verification code to
                create a new password.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} noValidate>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    aria-invalid={!!error}
                    onChange={(event) => {
                      setEmail(event.target.value)
                      if (error) setError("")
                    }}
                  />
                  <FieldError>{error}</FieldError>
                </Field>
                <Button type="submit" className="mt-4 w-full">
                  Send reset link
                </Button>
              </form>
            </CardContent>
          </>
        )}
        <CardFooter className="justify-center">
          <Button
            variant="link"
            size="sm"
            className="text-muted-foreground"
            render={<a href="/auth/login" />}
            nativeButton={false}
          >
            <ArrowLeft data-icon="inline-start" aria-hidden="true" />
            Back to sign in
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
