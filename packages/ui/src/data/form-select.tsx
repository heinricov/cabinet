/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxClear,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from "@workspace/ui/components/combobox"

export interface FormSelectOption {
  value: string
  label: string
}

export interface FormSelectProps {
  id?: string
  name?: string
  label?: string
  description?: string
  error?: string

  options: FormSelectOption[]

  multiple?: boolean

  value?: string | string[]
  defaultValue?: string | string[]

  onValueChange?: (value: string | string[]) => void

  placeholder?: string
  emptyMessage?: string

  disabled?: boolean
  required?: boolean
}

export function FormSelect({
  id,
  name,
  label,
  description,
  error,
  options,
  multiple = false,
  value,
  defaultValue,
  onValueChange,
  placeholder = "Select option",
  emptyMessage = "No options found.",
  disabled = false,
  required = false,
}: FormSelectProps) {
  return (
    <Field data-invalid={!!error}>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}

      {multiple ? (
        <MultipleSelect
          id={id}
          name={name}
          options={options}
          value={Array.isArray(value) ? value : []}
          defaultValue={Array.isArray(defaultValue) ? defaultValue : []}
          onValueChange={(value) => onValueChange?.(value)}
          placeholder={placeholder}
          emptyMessage={emptyMessage}
          disabled={disabled}
          required={required}
          error={!!error}
        />
      ) : (
        <SingleSelect
          id={id}
          name={name}
          options={options}
          value={typeof value === "string" ? value : ""}
          defaultValue={typeof defaultValue === "string" ? defaultValue : ""}
          onValueChange={(value) => onValueChange?.(value)}
          placeholder={placeholder}
          emptyMessage={emptyMessage}
          disabled={disabled}
          required={required}
          error={!!error}
        />
      )}

      {description && <FieldDescription>{description}</FieldDescription>}

      {error && <FieldError>{error}</FieldError>}
    </Field>
  )
}

interface SingleSelectProps {
  id?: string
  name?: string
  options: FormSelectOption[]
  value: string
  defaultValue: string
  onValueChange: (value: string) => void
  placeholder: string
  emptyMessage: string
  disabled: boolean
  required: boolean
  error: boolean
}

function SingleSelect({
  id,
  name,
  options,
  value,
  defaultValue,
  onValueChange,
  placeholder,
  emptyMessage,
  disabled,
  required,
  error,
}: SingleSelectProps) {
  const selectedOption =
    options.find((option) => option.value === value) ?? null

  const defaultOption =
    options.find((option) => option.value === defaultValue) ?? null

  return (
    <Combobox
      items={options}
      value={selectedOption}
      defaultValue={defaultOption}
      onValueChange={(option) => {
        onValueChange(option?.value ?? "")
      }}
      itemToStringValue={(item) => item.label}
      disabled={disabled}
      required={required}
    >
      <ComboboxInput
        id={id}
        name={name}
        placeholder={placeholder}
        showClear={false}
        aria-invalid={error}
      />

      <ComboboxContent>
        <ComboboxEmpty>{emptyMessage}</ComboboxEmpty>
        <ComboboxList>
          {(option) => (
            <ComboboxItem key={option.value} value={option}>
              {option.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

interface MultipleSelectProps {
  id?: string
  name?: string
  options: FormSelectOption[]
  value: string[]
  defaultValue: string[]
  onValueChange: (value: string[]) => void
  placeholder: string
  emptyMessage: string
  disabled: boolean
  required: boolean
  error: boolean
}

function MultipleSelect({
  id,
  name,
  options,
  value,
  defaultValue,
  onValueChange,
  placeholder,
  emptyMessage,
  disabled,
  required,
  error,
}: MultipleSelectProps) {
  const selectedOptions = options.filter((option) =>
    value.includes(option.value)
  )

  const defaultOptions = options.filter((option) =>
    defaultValue.includes(option.value)
  )

  return (
    <Combobox
      items={options}
      multiple
      value={selectedOptions}
      defaultValue={defaultOptions}
      onValueChange={(items) => {
        onValueChange(items.map((item) => item.value))
      }}
      itemToStringValue={(item) => item.label}
      disabled={disabled}
      required={required}
    >
      <ComboboxChips id={id} aria-invalid={error}>
        <ComboboxValue>
          {(items: any) =>
            items.map((item: any) => (
              <ComboboxChip key={item.value}>{item.label}</ComboboxChip>
            ))
          }
        </ComboboxValue>

        <ComboboxChipsInput
          name={name}
          placeholder={placeholder}
          required={required}
        />

        <ComboboxClear />
      </ComboboxChips>

      <ComboboxContent>
        <ComboboxEmpty>{emptyMessage}</ComboboxEmpty>
        <ComboboxList>
          {(option) => (
            <ComboboxItem key={option.value} value={option}>
              {option.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
