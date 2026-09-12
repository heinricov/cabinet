import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { cn } from "cn"

interface FieldLayoutProps {
  children: React.ReactNode
  classFieldLayout?: string
}

export function FieldLayout({ children, classFieldLayout }: FieldLayoutProps) {
  return (
    <div className={cn("", classFieldLayout)}>
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup>{children}</FieldGroup>
          </FieldSet>
          <Field orientation="horizontal" className="justify-end">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
