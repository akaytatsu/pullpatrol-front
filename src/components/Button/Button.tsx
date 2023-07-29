import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: React.ReactElement;
}

const Button = ({
  text,
  onClick,
  icon,
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
        "text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center hover:cursor-pointer flex flex-row w-max",
        className,
        isLoadingClass,
        disabledClass
      )}
    >
      {isLoading && (
        <div className="flex flex-row justify-center">
          <ArrowPathIcon className="w-6 h-6 text-gray-400 animate-spin animat" />
        </div>
      )}
      {!isLoading && (
        <>
          {icon && <div className="w-4 h-4 mr-2">{icon}</div>}
          {text}
        </>
      )}
    </a>
  );
};

export default Button;
