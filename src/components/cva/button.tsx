
import { twMerge } from "tailwind-merge"
import { cva, type VariantProps } from "class-variance-authority"

const buttonStyles = cva(
    'py-6 px-6 rounded-2xl font-bold bg-green-700',
    {
        variants:{
            size:{
                small:'w-[250px]',
                large:'w-[550px]'
            },
            color:{
                primary:'text-slate-700',
                danger:'text-red-700'
            },
            defaultVariants:{
                size:'small',
                color:'danger'
            }

        }
    }
);

export type buttonVariantProps = VariantProps<typeof buttonStyles>


type buttonProps = {
    className?:string
    children:React.ReactNode
} & buttonVariantProps

export const Button = ({children,className,color,size,defaultVariants}:buttonProps) => {
  return (
    <div className={twMerge(buttonStyles({color,size,defaultVariants, className}),className)}>
        {children}
    </div>
  )
}
