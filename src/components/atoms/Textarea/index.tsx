import { ComponentProps } from 'react'

type ITextareaProps = ComponentProps<'textarea'>

export function Textarea(props: ITextareaProps) {
  return (
    <textarea
      className="min-h-32 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm outline-none focus:border-violet-300 focus:ring-1 focus:ring-violet-200"
      {...props}
    />
  )
}
