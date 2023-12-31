import { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

// Example Pattern Composition
// There is more examples in documentation Radix UI and Shadcn Ui to export components

type IInputPrefixProps = ComponentProps<'div'>

export function Prefix(props: IInputPrefixProps) {
  return <div {...props} />
}

type IInputControlProps = ComponentProps<'input'>

export function Control(props: IInputControlProps) {
  return (
    <input
      className="w-full border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-500 outline-none dark:text-zinc-100 dark:placeholder:text-zinc-400"
      {...props}
    />
  )
}

type IInputRootProps = ComponentProps<'div'>

export function Root(props: IInputRootProps) {
  return (
    <div
      className={twMerge(
        'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm',
        'focus-within:border-violet-300 focus-within:ring-1 focus-within:ring-violet-200',
        'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/10',
        props.className,
      )}
      {...props}
    />
  )
}
