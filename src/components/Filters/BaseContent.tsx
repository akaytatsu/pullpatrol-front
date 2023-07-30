interface BaseFilterContentProps {
  children: React.ReactNode;
}

const BaseFilterContent = ({ children }: BaseFilterContentProps) => {
  return (
    <div className="flex flex-row space-x-5 text-black my-7">{children}</div>
  );
};

export default BaseFilterContent;
