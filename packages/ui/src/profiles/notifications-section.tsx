"use client"

import { Separator } from "@workspace/ui/components/separator"
import { Switch } from "@workspace/ui/components/switch"

export function NotificationsSection() {
  return (
    <div className="flex flex-col gap-4">
      {["Product updates", "Weekly digest", "Security alerts"].map(
        (label, index) => (
          <div key={label} className="flex flex-col gap-4">
            {index > 0 && <Separator />}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{label}</span>
              <Switch
                defaultChecked={index !== 1}
                aria-label={label}
              />
            </div>
          </div>
        )
      )}
    </div>
  )
}
