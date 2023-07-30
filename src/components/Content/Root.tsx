import { twMerge } from "tailwind-merge";

interface RootProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return <div className="m-1 mb-4 text-xl text-sky-900">{text}</div>;
};

const Root = ({ children, className, title = "" }: RootProps) => {
  return (
    <div
      className={twMerge(
        "bg-white border border-gray-200 shadow-sm shadow-gray-200 p-4 items-start align-middle",
        className
      )}
    >
      {title && <Title text={title} />}
      {children}
    </div>
  );
};

export default Root;
