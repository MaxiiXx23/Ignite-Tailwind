import { ComponentProps, ElementType } from 'react'

interface IButtonIconActionProps extends ComponentProps<'button'> {
  icon: ElementType
}

export function ButtonIconAction({
  icon: Icon,
  className = 'h-4 w-4 text-zinc-500 dark:text-zinc-300',
  ...props
}: IButtonIconActionProps) {
  return (
    <button
      type="button"
      className="rounded p-2 hover:bg-zinc-50 dark:hover:bg-white/5"
      {...props}
    >
      <Icon className={className} strokeWidth={3} />
    </button>
  )
}
