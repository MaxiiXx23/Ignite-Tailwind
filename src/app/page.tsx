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
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button type="button" text="Cancel" variant="outline" />
            <Button type="submit" text="Save" variant="primary" />
          </div>
        </div>
        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <Label htmlFor="firstName" text="Name" />
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control
                  id="firstName"
                  placeholder="First name"
                  defaultValue="Max"
                />
              </Input.Root>
              <Label
                htmlFor="lastName"
                text="Last Name"
                className="lg:hidden"
              />
              <Input.Root>
                <Input.Control
                  id="lastName"
                  placeholder="Last name"
                  defaultValue="Jônatas"
                />
              </Input.Root>
            </div>
          </div>
          <div className="flex flex-col  gap-3 pt-5 lg:grid lg:grid-cols-2">
            <Label htmlFor="email" text="Email address" />
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
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
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <Label
              htmlFor="photo"
              text="Your photo"
              description="This will be displayed on your profile."
            />
            <InputFile.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <InputFile.ImagePreview />
              <InputFile.Trigger />
              <InputFile.Control />
            </InputFile.Root>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <Label htmlFor="role" text="Role" />
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control
                  id="role"
                  placeholder="Role"
                  defaultValue="Full Stack Developer"
                />
              </Input.Root>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <Label htmlFor="country" text="Country" />
            <Select id="country" placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <Label htmlFor="timezone" text="Timezone" />
            <Select id="timezone" placeholder="Select a timezone...">
              <SelectItem
                value="pst"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="br-sp" text="America São Paulo (UTC-03:00)" />
            </Select>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <Label
              htmlFor="bio"
              text="Bio"
              description="Write a short introduction."
            />
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
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
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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
            <Button type="button" text="Cancel" variant="outline" />
            <Button type="submit" text="Save" variant="primary" />
          </div>
        </form>
      </div>
    </>
  )
}
