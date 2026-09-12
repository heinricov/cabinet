import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

export interface FormInputProps extends React.ComponentProps<"input"> {
  label?: string
  description?: string
  error?: string
  icon?: React.ReactNode
}

export function FormInput({
  label,
  description,
  error,
  icon,
  id,
  ...props
}: FormInputProps) {
  return (
    <Field data-invalid={!!error}>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}

      <InputGroup>
        {icon && <InputGroupAddon align="inline-start">{icon}</InputGroupAddon>}

        <InputGroupInput id={id} aria-invalid={!!error} {...props} />
      </InputGroup>

      {description && <FieldDescription>{description}</FieldDescription>}

      {error && <FieldError>{error}</FieldError>}
    </Field>
  )
}
