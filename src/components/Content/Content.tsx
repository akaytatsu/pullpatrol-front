import { twMerge } from "tailwind-merge";

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

const Content = ({ children, className }: ContentProps) => {
  return (
    <div
      className={twMerge(
        "bg-white border border-gray-200 shadow-sm shadow-gray-200 p-4 text-center justify-center align-middle",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Content;
