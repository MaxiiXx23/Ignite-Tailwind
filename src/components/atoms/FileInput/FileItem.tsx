import { UploadCloud, Trash2, CheckCircle2 } from 'lucide-react'
import { formatBytes } from '../../../../utils/formatBytes'
import { ButtonIconAction } from '../ButtonIconAction'
import { tv, VariantProps } from 'tailwind-variants'

// With slots I can styles any tags on component
const fileItem = tv({
  slots: {
    container:
      'group flex items-start  gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
    deleteButton: 'h-4 w-4 text-zinc-500',
  },
  variants: {
    state: {
      progress: {
        container: 'dark:border-zinc-700',
      },
      complete: {
        container: 'border-violet-500 dark:border-violet-300',
      },
      error: {
        container:
          'bg-error-25 border-error-300 dark:bg-error-500/5 dark:border-error-500/30',
        icon: 'border-error-50 bg-error-100 text-error-600 dark:bg-error-500/5 dark:border-error-500/30 dark:text-error-400',
        deleteButton:
          'text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300',
      },
    },
  },
  defaultVariants: {
    state: 'progress',
  },
})

interface IFileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function FileItem({ name, size, state }: IFileItemProps) {
  const { container, icon, deleteButton } = fileItem({ state })

  return (
    <div key={name} className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>
      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-error-700 dark:text-error-400 text-sm font-medium">
              Upload failed, please try again
            </span>
            <span className="text-error-600 dark:text-error-500 text-sm">
              {name}
            </span>
          </div>
          <div className="flex w-full items-center gap-1">
            <button
              type="button"
              className="text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-400 text-sm font-semibold"
            >
              Try again
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
              {name}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {formatBytes(size)}
            </span>
          </div>
          <div className="flex w-full items-center gap-1">
            <div className="h-2 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-600">
              <div
                className="h-2 rounded-full bg-violet-600 dark:bg-violet-400"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              />
            </div>
            <span className="text-sm font-medium text-zinc-300 text-zinc-500">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}
      {state === 'complete' ? (
        <CheckCircle2 className="h-4 w-4  fill-violet-600 text-white" />
      ) : (
        <ButtonIconAction icon={Trash2} className={deleteButton()} />
      )}
    </div>
  )
}
