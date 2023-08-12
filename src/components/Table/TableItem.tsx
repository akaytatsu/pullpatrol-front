import { twMerge } from "tailwind-merge";

interface TableItemProps {
  children: React.ReactNode;
  className?: string;
  colspan?: number;
}

const TableItem = ({ children, className, ...props }: TableItemProps) => {
  return (
    <td
      className={twMerge(
        "border-t px-2 py-5 text-sm text-left align-top",
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
};

export default TableItem;
