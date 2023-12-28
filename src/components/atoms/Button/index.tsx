import { ComponentProps } from 'react'

interface IButtonProps extends ComponentProps<'button'> {
  text: string
  className: string
}

export function Button({
  text,
  className,
  type = 'button',
  ...props
}: IButtonProps) {
  return (
    <button type={type} className={className} {...props}>
      {text}
    </button>
  )
}
