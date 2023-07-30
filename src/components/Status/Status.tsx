import { tv } from "tailwind-variants";

interface StatusProps {
  children: React.ReactNode;
  variation?:
    | "yellow"
    | "green"
    | "red"
    | "orange"
    | "blue"
    | "purple"
    | "pink"
    | "gray";
}

const statusVariants = tv({
  base: "rounded-full px-5 py-1 text-xs font-bold w-max",
  variants: {
    color: {
      yellow: "bg-yellow-200 text-yellow-800",
      green: "bg-green-200 text-green-800",
      red: "bg-red-200 text-red-800",
      blue: "bg-blue-200 text-blue-800",
      orange: "bg-orange-200 text-orange-800",
      purple: "bg-purple-200 text-purple-800",
      pink: "bg-pink-200 text-pink-800",
      gray: "bg-gray-200 text-gray-800",
    },
  },
  defaultVariants: {
    color: "green",
  },
});

const Status = ({ children, variation = "blue" }: StatusProps) => {
  return <div className={statusVariants({ color: variation })}>{children}</div>;
};

export default Status;
