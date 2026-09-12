"use client"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { Switch } from "@workspace/ui/components/switch"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
import { Separator } from "@workspace/ui/components/separator"

const frameworks = ["Dark", "Light", "System"] as const

export function GeneralsSection() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Generals Setting</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Field orientation="horizontal" className="w-full justify-between">
            <FieldContent>
              <FieldLabel htmlFor="switch-focus-mode">
                Share across devices
              </FieldLabel>
              <FieldDescription>
                Focus is shared across devices, and turns off when you leave the
                app.
              </FieldDescription>
            </FieldContent>
            <Switch id="switch-focus-mode" />
          </Field>
          <Separator />
          <Field orientation="horizontal" className="w-full justify-between">
            <FieldContent>
              <FieldLabel htmlFor="switch-focus-mode">
                Share across devices
              </FieldLabel>
              <FieldDescription>
                Focus is shared across devices, and turns off when you leave the
                app.
              </FieldDescription>
            </FieldContent>
            <Combobox items={frameworks} autoHighlight>
              <ComboboxInput placeholder="Select a framework" />
              <ComboboxContent>
                <ComboboxEmpty>No items found.</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </Field>
          <Separator />
        </CardContent>
        <div className="mt-2 flex justify-end gap-2 p-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </div>
      </Card>
    </div>
  )
}
