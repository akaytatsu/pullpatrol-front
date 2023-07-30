import { twMerge } from "tailwind-merge";

interface FooterProps {
  children?: React.ReactNode;
  className?: string;
}

const Footer = ({ children, className }: FooterProps) => {
  const dataClass = twMerge("flex w-full border-t border-gray-200", className);

  return <div className={dataClass}>{children}</div>;
};

export default Footer;
