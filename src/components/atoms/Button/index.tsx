import { ComponentProps } from 'react'

import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg border px-4 py-2.5 text-sm font-semibold shadow-sm outline-none',
    'focus-visible:ring-2 focus-visible:ring-violet-200',
    'active:opacity-80',
  ],
  variants: {
    variant: {
      primary: 'border-violet-600 bg-violet-600 text-white hover:bg-violet-700',
      outline: 'border-zinc-300 text-zinc-700 hover:bg-zinc-100',
    },
  },
})

interface IButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {
  text: string
}

// variants to button

export function Button({
  text,
  variant,
  type = 'button',
  ...props
}: IButtonProps) {
  return (
    <button type={type} className={button({ variant })} {...props}>
      {text}
    </button>
  )
}
