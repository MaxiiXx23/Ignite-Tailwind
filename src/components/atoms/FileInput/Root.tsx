'use-client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type IRootProps = ComponentProps<'div'>

type IFileInputContextProps = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], isMultiple: boolean) => void
}

const FileInputContext = createContext({} as IFileInputContextProps)

export function Root(props: IRootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function handleFilesSelected(files: File[], isMultiple: boolean) {
    if (isMultiple) {
      setFiles((prevState) => [...files, ...prevState])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected: handleFilesSelected }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
