import { ButtonIconAction } from '@/components/atoms/ButtonIconAction'
import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/MaxiiXx23.png"
        alt="Image avatar"
        title="Avatar"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Max Jônatas
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-300">
          max.232017@gmail.com
        </span>
      </div>
      <ButtonIconAction icon={LogOut} />
    </div>
  )
}
