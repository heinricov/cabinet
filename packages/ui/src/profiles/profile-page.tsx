"use client"

import { useState } from "react"
import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import { User, Shield, Bell, CreditCard } from "lucide-react"
import { AccountSection } from "@workspace/ui/profiles/account-section"
import { BillingSection } from "@workspace/ui/profiles/billing-section"
import { NotificationsSection } from "@workspace/ui/profiles/notifications-section"
import { ProfileSection } from "@workspace/ui/profiles/profile-section"

/** Props a call site may pass through to an icon. */
type IconProps = { className?: string; size?: number | string }

const sections = [
  {
    id: "profile",
    label: "Profile",
    icon: (p: IconProps) => <User {...p} />,
  },
  {
    id: "account",
    label: "Account",
    icon: (p: IconProps) => <Shield {...p} />,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: (p: IconProps) => <Bell {...p} />,
  },
  {
    id: "billing",
    label: "Billing",
    icon: (p: IconProps) => <CreditCard {...p} />,
  },
]

export function ProfilePage() {
  const [active, setActive] = useState("profile")

  return (
    <section className="flex min-h-svh w-full bg-background px-6 py-12 text-foreground">
      <div className="w-full max-w-3xl">
        <h1 className="font-heading text-2xl font-bold tracking-tight">
          Profile
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your account and workspace preferences.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[12rem_1fr]">
          <nav className="-mx-2 scrollbar-none flex gap-1 overflow-x-auto px-2 md:mx-0 md:flex-col md:overflow-visible md:px-0">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActive(section.id)}
                  aria-current={active === section.id}
                  className={cn(
                    "flex shrink-0 items-center gap-2.5 rounded-md px-3 py-2 text-left text-sm whitespace-nowrap transition-colors md:shrink",
                    active === section.id
                      ? "bg-muted font-medium text-foreground"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  )}
                >
                  <Icon className="size-4 shrink-0" aria-hidden="true" />
                  {section.label}
                </button>
              )
            })}
          </nav>

          <div className="min-w-0">
            {active === "profile" && <ProfileSection />}
            {active === "notifications" && <NotificationsSection />}
            {active === "account" && <AccountSection />}
            {active === "billing" && <BillingSection />}

            <div className="mt-8 flex justify-end gap-2 border-t border-border pt-5">
              <Button variant="outline">Cancel</Button>
              <Button>Save changes</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
