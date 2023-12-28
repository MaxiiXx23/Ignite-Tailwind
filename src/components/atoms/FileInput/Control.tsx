'use-client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

type IControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: IControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return

    // usando o Array.from para converter a lista de objetos files para Arrays
    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      id={id}
      className="sr-only"
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  )
}
