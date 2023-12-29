import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

interface INavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: INavItemProps) {
  return (
    <a
      href="#"
      className="group flex items-center gap-3 rounded px-3 py-2 outline-none hover:bg-zinc-50 focus-visible:ring-2 focus-visible:ring-violet-200 dark:hover:bg-zinc-800"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-400 dark:text-zinc-600" />
    </a>
  )
}
