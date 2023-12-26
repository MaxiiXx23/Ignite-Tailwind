import { Cog, LifeBuoy, Search } from 'lucide-react'

import { Logo } from '@/assets/icons/Logo'
import * as Input from '@/components/atoms/Input'
import { MainNavigation } from './MainNavigation'
import { NavItem } from '@/components/atoms/NavItem'
import { SpaceWidget } from '../SpaceWidget'
import { Profile } from '../Profile'

export function Sidebar() {
  return (
    <aside className="flex  flex-col gap-6 overflow-y-auto overflow-x-hidden  border-r border-zinc-200 px-6 py-8">
      <Logo />
      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="search" />
      </Input.Root>
      <MainNavigation />
      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>
      </div>
      <SpaceWidget />
      <div className="h-px bg-zinc-200" />
      <Profile />
    </aside>
  )
}
