import { twMerge } from "tailwind-merge";

export type PassingPropsToChildElementProps = {
  children?: React.ReactNode;
  title?: string;
  className?: string;
  childrenElementBoolean?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function PassingPropsToChildElemnt({
  children,
  title,
  className,
  childrenElementBoolean,
  ...props
}: PassingPropsToChildElementProps) {
    console.log(childrenElementBoolean)
  return (
    <div
      className={twMerge(
        "w-[500px] h-[500px] border-2 border-cyan-600 flex flex-col items-center justify-center",
        className
      )}
    >
      <p className={`font-bold text-2xl border-2 text-center `} {...props}>
        {title}
      </p>
      {children}
    </div>
  );
}
