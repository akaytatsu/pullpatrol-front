import { twMerge } from "tailwind-merge";

interface TableLineProps {
  children: React.ReactNode;
  className?: string;
}

const TableLine = ({ children, className }: TableLineProps) => {
  return <tr className={twMerge("py-7", className)}>{children}</tr>;
};

export default TableLine;
