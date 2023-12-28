import { ComponentProps } from 'react'

interface ILabelProps extends ComponentProps<'label'> {
  text: string
  description?: string
}

export function Label({ text, description, ...props }: ILabelProps) {
  return (
    <label className="text-sm font-medium text-zinc-700" {...props}>
      {text}
      {description && (
        <span className="block text-sm font-normal text-zinc-500">
          {description}
        </span>
      )}
    </label>
  )
}
