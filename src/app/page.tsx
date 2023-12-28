'use client'

import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

import { SettingsTabs } from '@/components/molecules/SettingsTabs'
import * as Input from '@/components/atoms/Input'
import * as InputFile from '@/components/atoms/FileInput'
import { Select } from '@/components/atoms/Select'
import { SelectItem } from '@/components/atoms/Select/SelectItem'
import { Textarea } from '@/components/atoms/Textarea'
import { Label } from '@/components/atoms/Label'
import { ButtonIconAction } from '@/components/atoms/ButtonIconAction'
import { Button } from '@/components/atoms/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              type="button"
              text="Cancel"
              className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            />
            <Button
              type="submit"
              text="Save"
              className="rounded-lg border border-violet-600 bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            />
          </div>
        </div>
        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <Label htmlFor="firstName" text="Name" />
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control
                  id="firstName"
                  placeholder="First name"
                  defaultValue="Max"
                />
              </Input.Root>
              <Input.Root>
                <Input.Control placeholder="Last name" defaultValue="Jônatas" />
              </Input.Root>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="email" text="Email address" />
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Prefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </Input.Prefix>
                <Input.Control
                  id="email"
                  placeholder="example@example.com"
                  defaultValue="max.232017@gmail.com"
                />
              </Input.Root>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <Label
              htmlFor="photo"
              text="Your photo"
              description="This will be displayed on your profile."
            />
            <InputFile.Root className="flex items-start gap-5">
              <InputFile.ImagePreview />
              <InputFile.Trigger />
              <InputFile.Control />
            </InputFile.Root>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="role" text="Role" />
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control
                  id="role"
                  placeholder="Role"
                  defaultValue="Full Stack Developer"
                />
              </Input.Root>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="country" text="Country" />
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <Label htmlFor="timezone" text="Timezone" />
            <Select placeholder="Select a timezone...">
              <SelectItem
                value="pst"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="br-sp" text="America São Paulo (UTC-03:00)" />
            </Select>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <Label
              htmlFor="bio"
              text="Bio"
              description="Write a short introduction."
            />
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    text="Normal Text"
                    defaultChecked
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>
                <div className="flex items-center gap-1">
                  <ButtonIconAction icon={Bold} />
                  <ButtonIconAction icon={Italic} />
                  <ButtonIconAction icon={Link} />
                  <ButtonIconAction icon={List} />
                  <ButtonIconAction icon={ListOrdered} />
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="I'm a Full Stack Developer with focus Node.js and React, I like Typescript and API RESTfull."
              />
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <Label
              htmlFor="projects"
              text="Portfolio projects"
              description="Share a few snippets of your work."
            />
            <InputFile.Root>
              <InputFile.Trigger />
              <InputFile.FileList />
              <InputFile.Control multiple />
            </InputFile.Root>
          </div>
          <div className="flex items-center justify-end gap-2 pt-5">
            <Button
              type="button"
              text="Cancel"
              className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            />
            <Button
              type="submit"
              text="Save"
              className="rounded-lg border border-violet-600 bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            />
          </div>
        </form>
      </div>
    </>
  )
}
