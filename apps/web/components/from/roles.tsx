import { FormInput } from "@workspace/ui/data/form-input"
import { FieldLayout } from "@workspace/ui/data/form-layout"
import { FormTextarea } from "@workspace/ui/data/form-textarea"
import { FileText, User } from "lucide-react"

export function RolesFrom() {
  return (
    <FieldLayout classFieldLayout="w-full max-w-xl">
      <div className="space-y-2">
        <FormInput
          id="role"
          name="role"
          type="text"
          label="Role Name"
          description="Input your role"
          placeholder="role"
          autoComplete="name"
          inputMode="text"
          icon={<User />}
        />
        <FormTextarea
          id="description"
          name="description"
          label="Description Role"
          placeholder="Enter description..."
          //   icon={<FileText />}
          description="Input your new role description here"
          rows={5}
        />
      </div>
    </FieldLayout>
  )
}
