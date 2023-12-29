'use client'

import { Cog, LifeBuoy, Menu, Search } from 'lucide-react'

import * as Collapsible from '@radix-ui/react-collapsible'

import { Logo } from '@/assets/icons/Logo'
import * as Input from '@/components/atoms/Input'
import { MainNavigation } from './MainNavigation'
import { NavItem } from '@/components/atoms/NavItem'
import { SpaceWidget } from '../SpaceWidget'
import { Profile } from '../Profile'
import { ButtonIconAction } from '@/components/atoms/ButtonIconAction'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 overflow-x-hidden  border-b border-zinc-200 bg-white data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-6 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:overflow-y-auto">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <ButtonIconAction icon={Menu} />
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="search" />
        </Input.Root>
        <MainNavigation />
        <div className="flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>
        </div>
        <SpaceWidget />
        <div className="h-px bg-zinc-200" />
        <Profile />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
