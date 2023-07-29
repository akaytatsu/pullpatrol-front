import { twMerge } from "tailwind-merge";

interface TableItemProps {
  children: React.ReactNode;
  className?: string;
}

const TableItem = ({ children, className }: TableItemProps) => {
  return (
    <td
      className={twMerge(
        "border-t px-2 py-5 text-sm text-left align-top",
        className
      )}
    >
      {children}
    </td>
  );
};

export default TableItem;
