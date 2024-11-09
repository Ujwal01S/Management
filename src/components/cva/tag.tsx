import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const tagVariant = cva("border rounded-full bg-slate-300", {
  variants: {
    tagType: {
      default: "",
      live: "text-green-700",
      setup: "text-purple-700",
    },
  },
});

export type TagTypesVariants = VariantProps<typeof tagVariant>;

export type TagTypes = TagTypesVariants[keyof TagTypesVariants];

type TagProps = {
  className?: string;
  children: React.ReactNode;
} & TagTypesVariants;

export const Tag = ({ children, className, tagType }: TagProps) => {
  return (
    <div className={twMerge(tagVariant({ tagType, className }), className)}>
      {children}
    </div>
  );
};
