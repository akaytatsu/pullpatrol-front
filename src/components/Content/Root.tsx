import { twMerge } from "tailwind-merge";
import Title from "../Title/Title";

interface RootProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  action?: React.ReactNode;
}

interface TitleProps {
  title?: string;
  action?: React.ReactNode;
}

const mountHeader = ({ title = "", action = null }: TitleProps) => {
  return (
    <div className="flex flex-row justify-between m-1 mb-4 text-xl text-sky-900">
      {title && <Title>{title}</Title>}
      {action && <>{action}</>}
    </div>
  );
};

const Root = ({ children, className, title = "", action }: RootProps) => {
  return (
    <div
      className={twMerge(
        "bg-white border border-gray-200 shadow-sm shadow-gray-200 p-4 items-start align-middle",
        className
      )}
    >
      {mountHeader({ title, action })}
      {children}
    </div>
  );
};

export default Root;
