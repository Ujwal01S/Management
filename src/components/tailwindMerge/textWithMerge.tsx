

import {twMerge} from 'tailwind-merge'

interface textWithMergeProps {
    className:string
    children:React.ReactNode
}

export const TextWithMerge:React.FC<textWithMergeProps> = ({children,className}) => {
  return (
    <div className={twMerge('bg-slate-300, font-medium, text-blue-600', className)}>
        {children}
    </div>
  )
}
