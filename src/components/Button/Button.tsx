import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button = ({
  text,
  onClick,
  children,
  className,
  disabled = false,
  isLoading = false,
}: ButtonProps) => {
  const isLoadingClass = isLoading
    ? "bg-gray-700 hover:bg-gray-700 focus:ring-primary-0 hover:cursor-default"
    : "";

  const disabledClass = disabled
    ? "bg-gray-700 hover:bg-gray-700 focus:ring-primary-0 hover:cursor-default"
    : "";

  return (
    <a
      onClick={isLoading || disabled ? () => {} : onClick}
      className={twMerge(
        " text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:cursor-pointer",
        className,
        isLoadingClass,
        disabledClass
      )}
    >
      {isLoading && (
        <div className="flex flex-row justify-center">
          <ArrowPathIcon className="w-6 h-6 animate-spin animat text-gray-400" />
        </div>
      )}
      {!isLoading && (
        <>
          {text}
          {children}
        </>
      )}
    </a>
  );
};

export default Button;
