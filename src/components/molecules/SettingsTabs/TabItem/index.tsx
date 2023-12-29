'use client'

import * as Tabs from '@radix-ui/react-tabs'

import { motion } from 'framer-motion'

interface ITabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: ITabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-violet-700 data-[state=active]:text-violet-700 dark:text-zinc-300 dark:hover:text-violet-400 dark:data-[state=active]:text-violet-400"
    >
      <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-200 group-focus-visible:ring-offset-8">
        {title}
      </span>
      {isSelected && (
        <motion.div
          layoutId="activeId"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-400"
        />
      )}
    </Tabs.Trigger>
  )
}
