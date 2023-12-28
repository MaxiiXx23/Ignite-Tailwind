'use-client'

import { User } from 'lucide-react'
import { useFileInput } from './Root'
import { useMemo } from 'react'

export function ImagePreview() {
  const { files } = useFileInput()

  // useMemo é usado para evitar renderizações custozas no componente

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center rounded-full bg-zinc-50">
        <User className="h-8 w-8 text-violet-600" />
      </div>
    )
  } else {
    return (
      <img
        src={previewURL}
        alt="image-preview"
        title="image-profile"
        className="h-16 w-16 rounded-full object-cover"
      />
    )
  }
}
