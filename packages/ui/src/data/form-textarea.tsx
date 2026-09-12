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
  InputGroupTextarea,
} from "@workspace/ui/components/input-group"

export interface FormTextareaProps extends React.ComponentProps<"textarea"> {
  label?: string
  description?: string
  error?: string
  icon?: React.ReactNode
}

export function FormTextarea({
  label,
  description,
  error,
  icon,
  id,
  ...props
}: FormTextareaProps) {
  return (
    <Field data-invalid={!!error}>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}

      <InputGroup>
        <InputGroupTextarea id={id} aria-invalid={!!error} {...props} />

        {icon && <InputGroupAddon align="block-start">{icon}</InputGroupAddon>}
      </InputGroup>

      {description && <FieldDescription>{description}</FieldDescription>}

      {error && <FieldError>{error}</FieldError>}
    </Field>
  )
}
