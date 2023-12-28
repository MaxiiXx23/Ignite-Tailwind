import { ComponentProps } from 'react'

type ITextareaProps = ComponentProps<'textarea'>

export function Textarea(props: ITextareaProps) {
  return (
    <textarea
      className="min-h-32 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm outline-none"
      {...props}
    />
  )
}
